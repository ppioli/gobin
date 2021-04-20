import { configureStore } from '@reduxjs/toolkit'
import tokensReducer from "./features/tokens/tokensSlice";
import optionsReducer from "./features/options/optionsSlice";
import printOptionsReducer from './features/printOptions/printOptionsSlice';

const store = configureStore({
    reducer: {
        // Define a top-level state field named `todos`, handled by `todosReducer`
        tokens: tokensReducer,
        options: optionsReducer,
        printOptions: printOptionsReducer
    }
})

export default store