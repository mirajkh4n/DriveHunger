export const myFetchGetRequest = async () => {
  const response = await fetch(
    'https://thapatechnical.github.io/userapi/users.json',
  );
  const resJson = await response.json();
  return resJson;
};
