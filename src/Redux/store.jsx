import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "../Redux/ProductsSlice";
import CategorySlice from "../Redux/CategorySlice";
import BrandsSlice from "../Redux/BrandsSlice";
import ProductDetailsSlice from "../Redux/ProductDetailsSlice";
import CartSlice from "../Redux/CartSlice";
import WishlistSlice from "../Redux/WishlistSlice";
import LoginSlice from "../Redux/loginUser";
import RegisterSlice from "../Redux/registerUser";
import GetCartSlice from "../Redux/ShowCartSlice";
import FavoritesSlice from "../Redux/FetchFavorites";
import CartQuantitySlice from "../Redux/CartQuantitySlice";
import filtersSlice from "../Redux/FilterSlice";

export const store = configureStore({
  reducer: {
    products: ProductsSlice,
    category: CategorySlice,
    brands: BrandsSlice,
    productDetails: ProductDetailsSlice,
    cart: CartSlice,
    wishlist: WishlistSlice,
    login: LoginSlice,
    register: RegisterSlice,
    getCart: GetCartSlice,
    getFav: FavoritesSlice,
    cartQuantity: CartQuantitySlice,
    filters: filtersSlice,
  },
});
