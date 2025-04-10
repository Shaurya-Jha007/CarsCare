export async function fetchCars() {
  const response = await fetch("https://www.freetestapi.com/api/v1/cars");
  if (!response.ok) {
    const error = new Error(
      "Something went wrong while fetching cars data! Please try again."
    );
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }
  const data = await response.json();
  return data;
}
