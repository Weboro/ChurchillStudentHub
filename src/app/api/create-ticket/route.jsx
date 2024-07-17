import axios from 'axios';

let accessTokenStore = { token: null };

// Function to read access token from the in-memory object
function readAccessToken() {
  return accessTokenStore.token;
}

// Function to write access token to the in-memory object
function writeAccessToken(token) {
  accessTokenStore.token = token;
}

export async function POST(request) {
  const { firstName, lastName, email, subject, description } = await request.json();

  async function getNewAccessToken() {
    const response = await axios.post('https://accounts.zoho.com.au/oauth/v2/token', null, {
      params: {
        refresh_token: process.env.REFRESH_TOKEN,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        grant_type: 'refresh_token',
        redirect_uri: process.env.REDIRECT_URI,
        scope: 'Desk.tickets.ALL',
      },
    });
    const newAccessToken = response.data.access_token;
    writeAccessToken(newAccessToken); // Update the access token in the in-memory object
    return newAccessToken;
  }

  async function createTicket(accessToken) {
    try {
      const response = await axios.post(
        'https://desk.zoho.com.au/api/v1/tickets',
        {
          departmentId: process.env.DEPARTMENT_ID,
          contact: {
            firstName: firstName,
            lastName: lastName,
            email: email,
          },
          subject: subject,
          status: 'Open',
          description: description,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            orgId: process.env.ORG_ID,
            Authorization: `Zoho-oauthtoken ${accessToken}`,
          },
        }
      );
      return new Response(JSON.stringify(response.data), { status: 200 });
    } catch (error) {
      if (error.response && error.response.data.errorCode === 'INVALID_OAUTH') {
        const newAccessToken = await getNewAccessToken();
        return await createTicket(newAccessToken);
      } else {
        return new Response(JSON.stringify(error.response.data), { status: error.response.status });
      }
    }
  }

  // Check if the access token is set; if not, fetch a new one
  let currentAccessToken = readAccessToken();
  if (!currentAccessToken) {
    currentAccessToken = await getNewAccessToken();
  }

  return await createTicket(currentAccessToken);
}
