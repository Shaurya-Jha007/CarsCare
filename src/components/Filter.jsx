import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Filter() {
  const [warning, setWarning] = useState(false);
  const brandRef = useRef();
  const fuelRef = useRef();
  const modelRef = useRef();
  const navigate = useNavigate();

  function searchHandler() {
    const brandValue = brandRef.current.value;
    const fuelValue = fuelRef.current.value;
    const modelValue = modelRef.current.value;
    if (brandValue !== "" && fuelValue !== "" && modelValue !== "") {
      console.log(brandValue, fuelValue, modelValue);
      navigate(`/search/${brandValue}/${fuelValue}/${modelValue}`);
    } else {
      setWarning(true);
    }
  }

  if (warning) {
    alert("Please enter a valid set of values.");
  }

  return (
    <div className="w-2/3 mx-auto mt-10 h-20 bg-[#1d1d1d] rounded-full shadow-2xl flex justify-evenly items-center">
      <Link
        to="/wishlist"
        className="absolute right-16 top-12 bg-pink-400 hover:bg-pink-600 transition duration-300 px-8 py-4 rounded-lg"
      >
        Wish List
      </Link>
      <select
        name="brand"
        id="brand"
        className="w-1/4 cursor-pointer h-full bg-[#1d1d1d] outline-none"
        ref={brandRef}
        // aria-placeholder="Brand"
      >
        <option value="" disabled selected>
          Brand
        </option>
        <option value="Toyota">Toyota</option>
        <option value="Ford">Ford</option>
        <option value="Tesla">Tesla</option>
        <option value="Honda">Honda</option>
        <option value="Audi">Audi</option>
        <option value="Chevrolet">Chevrolet</option>
      </select>
      <select
        name="fuelType"
        id="fuelType"
        className=" w-1/4 cursor-pointer h-full bg-[#1d1d1d] outline-none"
        ref={fuelRef}
      >
        <option value="" disabled selected>
          Fuel
        </option>
        <option value="Gasoline">Gas</option>
        <option value="Diesel">Diesel</option>
        <option value="Electric">Electricity</option>
      </select>
      <select
        name="model"
        id="model"
        className="w-1/4 cursor-pointer h-full bg-[#1d1d1d] outline-none"
        ref={modelRef}
      >
        <option value="" disabled selected>
          Model
        </option>
        <option value="2025">2025</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </select>
      <div>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="cursor-pointer bg-blue-500 p-3 rounded-full"
          onClick={searchHandler}
        />
      </div>
    </div>
  );
}
