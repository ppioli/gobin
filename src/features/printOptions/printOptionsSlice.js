import {createSlice} from "@reduxjs/toolkit";
import * as yup from 'yup';
import {createFormAdapter} from "../../helpers/selectFormAdapter";

const schema = yup.object().shape({
    count: yup.number().required().min(0).max(1000),
    columns: yup.number().required().min(1).max(10),
})

const formAdapter = createFormAdapter( { count: 100, columns: 2 }, schema )

const printOptionsSlice = createSlice({
    name:'printOptions',
    initialState: formAdapter.getInitialState(),
    reducers: {
        updatePrintOption: formAdapter.update
    }
})

export default printOptionsSlice.reducer;

export const { updatePrintOption } = printOptionsSlice.actions;

export const {
    selectValue: selectPrintOptionValue,
    selectError: selectPrintOptionError,
    selectValid: selectPrintOptionsValid,
    selectState: selectPrintOptionsState
} = formAdapter.getSelectors( state => state.printOptions )