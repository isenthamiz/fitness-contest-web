import { createStore } from "redux";
import Reducers from "./reducer/index";

const Store = createStore(Reducers, {});

export default Store;
