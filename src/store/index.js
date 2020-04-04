import { createStore, combineReducers } from "redux";
import modelReducer from "./modelReducer";
import stateReducer from "./stateReducer";

export { 
  saveProduct, 
  saveSupplier, 
  deleteProduct, 
  deleteSupplier 
} from "./modelActionCreators";

export {
  startEditingProduct,
  startEditingSupplier,
  endEditing,
  startCreatingProduct,
  startCreatingSupplier
} from "./stateActions";

export default createStore(
  combineReducers({
    modelData: modelReducer,
    stateData: stateReducer
  })
);