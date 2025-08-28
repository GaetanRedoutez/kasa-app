const RENTAL_BASE_URL = "/src/data/rentals";

export const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const fetchRentals = async (lang) => {
  const url = RENTAL_BASE_URL + "_" + lang + ".json";
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
