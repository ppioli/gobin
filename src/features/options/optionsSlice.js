import {createSlice} from "@reduxjs/toolkit";
import {createFormAdapter} from "../../helpers/selectFormAdapter";

import * as yup from 'yup';

let schema = yup.object().shape({
    rows: yup.number().required().min(1).max(20),
    columns: yup.number().required().min(1).max(20),
    bingoStyle: yup.object().shape({
        borderWidth: yup.number().required().min(0).max(20),
        borderStyle: yup.string().required(),
        borderRadius: yup.number().required().min(0).max(250),
        borderColor: yup.string().required(),
    })
});

const value = {
    rows: 2,
    columns: 2,
    bingoStyle: {
        borderColor: '#000000',
        borderRadius: 3,
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderWidth: 2,
        padding: 5,
    },
    bingoCellStyle: {
        borderColor: '#000000',
        backgroundColor: '#ffffff',
        borderRadius: 3,
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 5,
    }
}

const formAdapter = createFormAdapter( value, schema );
const initialState = formAdapter.getInitialState();

const optionsSlice = createSlice({
    name: 'options',
    initialState,
    reducers: {
        optionUpdate: formAdapter.update
    }
})

export default optionsSlice.reducer;

export const {optionUpdate} = optionsSlice.actions;

export const {
    selectError: selectOptionError,
    selectValid: selectOptionValid,
    selectValue: selectOptionValue
} = formAdapter.getSelectors( state => state.options )
