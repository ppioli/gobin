import {getProperty, setProperty} from "./objectPropertyHelper";
import {aggregateError} from "./aggregateError";
import {createSelector} from "@reduxjs/toolkit";

const createFormAdapter = ( initialState, schema ) => {
    return {
        _state: {
            valid: true,
            errors: {},
            values: {...initialState}
        },
        update( state, action ) {
            const {path, value} = action.payload;
            setProperty(state.values, path, value);

            try {
                schema.validateSync(state.values, {abortEarly: false});
            } catch (e) {
                if (e.name === "ValidationError") {
                    state.errors = aggregateError(e.inner);
                    state.valid = false;
                }
                return;
            }

            state.errors = {};
            state.valid = true;
        },
        getInitialState() {
            return this._state;
        },
        getSelectors( stateSelector ) {
            const selectState = () => createSelector(
                // First, pass one or more "input selector" functions:
                state => stateSelector(state),
                // Then, an "output selector" that receives all the input results as arguments
                // and returns a final result value
                state => state
            )

            return {
                selectState,
                selectValue: (path) => createSelector(
                    // First, pass one or more "input selector" functions:
                    state => stateSelector(state).values,
                    // Then, an "output selector" that receives all the input results as arguments
                    // and returns a final result value
                    values => getProperty(values, path)
                ),
                selectValid: (path) => createSelector(
                    // First, pass one or more "input selector" functions:
                    state => stateSelector(state).errors,
                    // Then, an "output selector" that receives all the input results as arguments
                    // and returns a final result value
                    errors => errors[path] !== undefined
                ),
                selectError: (path) => createSelector(
                    // First, pass one or more "input selector" functions:
                    state => stateSelector(state).errors,
                    // Then, an "output selector" that receives all the input results as arguments
                    // and returns a final result value
                    errors => errors[path]
                )
            }
        }
    }
}

export { createFormAdapter }