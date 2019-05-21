import { createStore } from "redux";
import rootReducer from "./reducers";
import socket from "./services/socket";

socket.init();

const initialStore = {};
export default createStore(rootReducer, initialStore);
