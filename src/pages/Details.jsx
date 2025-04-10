import { useQuery } from "@tanstack/react-query";
import { fetchCars } from "../util/http";
import { Link, useParams } from "react-router-dom";
import loader from "../img/loader.svg";
import { WishListContext } from "../util/context";
import { useContext } from "react";
export default function Details() {
  const wishListCtx = useContext(WishListContext);
  const params = useParams();
  const { id } = params;
  const { data, isPending, isError, error } = useQuery({
    queryFn: fetchCars,
    queryKey: ["individual-car"],
  });

  localStorage.setItem("wishList", JSON.stringify(wishListCtx.wishList));

  if (isError) {
    return (
      <h1 className="mt-16 text-red-500 font-bold">
        {error.info ? error.info : "Failed to fetch! Please try again."}
      </h1>
    );
  }

  if (isPending) {
    return (
      <div className="flex justify-center mt-16">
        <img src={loader} alt="Loading spinner..." />
      </div>
    );
  }

  if (data) {
    const selectedCar = data.filter((car) => {
      return car.id == id;
    })[0];
    console.log(selectedCar);
    return (
      <section className="text-white pt-24 h-screen w-screen">
        <Link
          to="/wishlist"
          className="absolute right-16 top-8 bg-pink-400 hover:bg-pink-600 transition duration-300 px-8 py-4 rounded-lg"
        >
          Wish List
        </Link>
        <div className="w-4/5 2xl:h-3/5 xl:h-3/5 lg:h-2/5 md:h-3/7 sm:h-3/7 mx-auto pt-16 2xl:flex gap-6">
          <img
            src={selectedCar.image}
            alt="Sample car"
            className="h-48 lg:ml-24 rounded-lg"
          />
          <div>
            <p>Vehicle's color is {selectedCar.color}</p>
            <p>Engine is {selectedCar.engine}</p>
            <p>
              Features like{" "}
              {selectedCar.features.map((feature) => {
                return `${feature}, `;
              })}
            </p>
            <p>Runs on {selectedCar.fuelType}</p>
            <p>{selectedCar.horsepower} hp</p>
            <p>Company : {selectedCar.make}</p>
            <p>Mileage : {selectedCar.mileage} kmpl</p>
            <p>Price : ${selectedCar.price}</p>
            <p>Model : ${selectedCar.year}</p>
          </div>
        </div>
        <div className="text-center">
          <button
            onClick={() => wishListCtx.addToWishList(selectedCar)}
            className="px-8 py-4 bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-700 transition-all duration-300"
          >
            Add to Wishlist
          </button>
          {wishListCtx.wishList.includes(selectedCar) && (
            <p className="pt-8 text-green-400">Added to wishlist</p>
          )}
        </div>
      </section>
    );
  }
}
