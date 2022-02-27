import { createStore } from 'redux';
import rootReducer from './Reducers';
import "react-toastify/dist/ReactToastify.css";


const store = createStore(rootReducer)

export default store;