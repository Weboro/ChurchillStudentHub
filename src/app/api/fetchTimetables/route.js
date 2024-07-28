import axios from "axios";

const PUBLIC_KEY_TIMETABLES = process.env.NEXT_PUBLIC_PUBLIC_KEY_TIMETABLES;

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const studentID = searchParams.get("studentID");

  if (!studentID) {
    return new Response(JSON.stringify({ error: "Student ID is required" }), {
      status: 400,
    });
  }

  try {
    const response = await axios.get(
      `https://www.zohoapis.com.au/creator/custom/s.lohani_churchill2/Fetch_Student_Classes?Student_ID=${studentID}&publickey=${PUBLIC_KEY_TIMETABLES}`
    );
    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (error) {
    console.error("Error fetching student classes:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: error.response?.status || 500,
    });
  }
}
