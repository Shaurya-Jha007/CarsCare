import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Details from "./pages/Details";
import { WishListContext } from "./util/context";
import { useEffect, useState } from "react";
import WishList from "./pages/WishList";
function App() {
  const [wishList, setWishList] = useState(
    JSON.parse(localStorage.getItem("wishList")) || []
  );

  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }, [wishList]);

  const value = {
    wishList,
    addToWishList(item) {
      if (wishList.some((car) => car.id === item.id)) {
        return;
      }
      setWishList((prevState) => {
        return [...prevState, item];
      });
    },
    removeFromWishList(item) {
      setWishList((prevState) => {
        return prevState.filter((car) => {
          return car.id !== item.id;
        });
      });
    },
  };
  return (
    <>
      <WishListContext.Provider value={value}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:brand/:fuelType/:model" element={<Search />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/wishlist" element={<WishList />} />
        </Routes>
      </WishListContext.Provider>
    </>
  );
}

export default App;
