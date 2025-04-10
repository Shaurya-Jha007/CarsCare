import { WishListContext } from "../util/context";
import { useContext } from "react";
export default function WishList() {
  const wishListCtx = useContext(WishListContext);
  return (
    <section className="min-h-screen w-screen px-8">
      <div className="flex flex-wrap gap-16">
        {wishListCtx.wishList.map((car) => {
          return (
            <article
              className="2xl:w-1/5 lg:w-1/4 md:w-2/5 sm:w-1/2 w-full h-1/2 p-2 text-black bg-white mt-8 flex flex-col gap-2 transition-transform transform hover:shadow-xl rounded-lg"
              key={car.id}
            >
              <img
                src={car.image}
                alt="Model image"
                className="h-50 rounded-lg"
              />
              <p>
                Made by <span className="font-bold">{car.make}</span>
              </p>
              <p>Mileage : {car.mileage} kmpl</p>
              <p>On-road : ${car.price}</p>
              <p>Color : {car.color}</p>
              <button
                onClick={() => {
                  wishListCtx.removeFromWishList(car);
                  localStorage.setItem(
                    "wishList",
                    JSON.stringify(wishListCtx.wishList)
                  );
                }}
                className="px-6 py-3 bg-red-400 hover:bg-red-600 duration-300 rounded-md cursor-pointer"
              >
                Remove
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
