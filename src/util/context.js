import { createContext } from "react";

export const WishListContext = createContext({
  wishList: [],
  addToWishList() {},
  removeFromWishList() {},
});
