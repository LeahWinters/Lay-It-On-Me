const url = "https://api.adviceslip.com/advice";

export const getSearchResults = async (searchedTopic) => {
  const response = await fetch(`${url}/search/${searchedTopic}`);
  const foundResults = await response.json();
  return foundResults;
};

export const getRandomAdvice = async () => {
  const response = await fetch(`${url}`);
  const randomAdvice = await response.json();
  return randomAdvice;
};
