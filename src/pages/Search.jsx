import Filter from "../components/Filter";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCars } from "../util/http";
import loader from "../img/loader.svg";
export default function Search() {
  const params = useParams();
  const { brand, fuelType, model } = params;
  // console.log(brand, fuelType, model);
  const { data, isPending, isError, error } = useQuery({
    queryFn: fetchCars,
    queryKey: ["cars"],
  });

  if (isError) {
    return (
      <h1 className="mt-16 text-red-500 font-bold">
        {error.info ? error.info : "Failed to fetch! Please try again."}
      </h1>
    );
  }

  if (data) {
    const cars = data.filter((car) => {
      return car.make == brand && car.fuelType == fuelType && car.year == model;
    });
    return (
      <>
        <Filter />
        <section className="w-9/10 mx-auto mt-16 h-screen">
          <h3 className="text-3xl">Search results({cars.length})...</h3>
          <div className="flex md:flex-wrap gap-16">
            {cars.map((car) => {
              return (
                <Link
                  to={`/details/${car.id}`}
                  className="2xl:w-1/5 xl:w-2/9 lg:w-3/11 md:w-2/5 sm:w-3/5 h-1/2 p-2 text-black bg-white mt-8 flex flex-col gap-2 transition-transform transform hover:shadow-xl hover:translate-y-[-10px] hover:translate-x-[-10px] cursor-pointer rounded-lg"
                  key={car.id}
                >
                  <img
                    src={car.image}
                    alt="Model image"
                    className="2xl:h-50 rounded-lg"
                  />
                  <p className="2xl:text-lg">
                    Made by <span className="font-bold">{car.make}</span>
                  </p>
                  <p>Mileage : {car.mileage} kmpl</p>
                  <p>On-road : ${car.price}</p>
                  <p>Color : {car.color}</p>
                </Link>
              );
            })}
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Filter />
      {isPending && (
        <div className="flex justify-center mt-16">
          <img src={loader} alt="Loading spinner..." />
        </div>
      )}
    </>
  );
}
