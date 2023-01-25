
import { legacy_createStore } from "redux" ;
import { saveState  } from "./Reducer";
import reducers from "./Reducer";

const store =legacy_createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_()) ;
store.subscribe(()=>{
    saveState(store.getState());
})

export default store ;