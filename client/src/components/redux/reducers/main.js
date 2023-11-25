import { getProductsreducer } from "./productsreducer";
import { combineReducers } from "redux";

const rootreducers = combineReducers({
    getproductsdata: getProductsreducer
})

export default rootreducers;