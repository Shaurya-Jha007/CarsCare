import tesla from "../img/tesla.png";
import Filter from "../components/Filter";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="h-screen w-screen">
      {/* <Link
        to="/wishlist"
        className="absolute right-16 top-8 bg-pink-400 hover:bg-pink-600 transition duration-300 px-8 py-4 rounded-lg"
      >
        Wish List
      </Link> */}
      <div className="w-4/5 mx-auto pt-25 text-center">
        <p className="2xl:text-lg lg:text-md md:text-md mb-8">
          Finding cars for purchase made such a breeze
        </p>
        <h1 className="2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold">
          Find Your Dream Car
        </h1>
        <Filter />
        <div className="">
          <img src={tesla} alt="Dummy Car" className="mt-8 mx-auto" />
        </div>
      </div>
    </main>
  );
}
