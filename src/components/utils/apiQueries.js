import axiosBaseURL from "../../../baseUrl";

export const FetchHowToGuide = (slug) => {
  const data = axiosBaseURL.get(
    `/api/v1/cms/how-to-guide${slug ? `/${slug}` : ""}`
  );

  return data;
};

export const FetchPolicyData = () => {
  const data = axiosBaseURL.get(`/api/v1/cms/policy`);
  return data;
};

export const FetchRequestForms = () => {
  const data = axiosBaseURL.get(`/api/v1/cms/request-form`);
  return data;
};

export const FetchUpcomingKeyDate = () => {
  const data = axiosBaseURL.get(`/api/v1/edu_hub/upcoming-key-date`);
  return data;
};

// export const FetchExampleDatas= () => {
//   const data = axiosBaseURL.get(`/api/v1/example`);
//   return data;
// }

// const [exampleData, setExampleData] = useState([]);
// useEffect(() => {
//   FetchExampleDatas()
//     .then((res) => {
//       setExampleData(res.data);
//     })
//     .catch((err) => console.log(err));
// }, []);
