const RENTAL_BASE_URL = "/data/rentals";

export const fetchRentals = async (lang) => {
  const url = RENTAL_BASE_URL + "_" + lang + ".json";
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const fetchRentalById = async (id, lang) => {
  const rentals = await fetchRentals(lang);

  const data = rentals.find((rental) => rental.id === id);

  if (!data) {
    throw new Error(`Rental with ID ${id} not found`);
  }

  return data;
};
