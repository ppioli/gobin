import {createEntityAdapter, createSelector, createSlice} from '@reduxjs/toolkit'
import {testTokens} from "./testTokens";

let currentId = 1;

const tokensAdapter = createEntityAdapter();

let initialState = tokensAdapter.getInitialState();
// initialState = tokensAdapter.upsertMany(initialState, testTokens );
const tokensSlice = createSlice({
    name: 'tokens',
    initialState,
    reducers: {
        tokensAdded(state, action) {
            // add an id to new items
            const newSymbols = action.payload.map( item => {
                return {
                    id: currentId++,
                    ...item,
                }
            } )
            tokensAdapter.addMany( state, newSymbols )
        },
        tokenUpdate( state, action ) {
            const { id, label } = action.payload;
            state.entities[id].label = label;
        },
        tokenRemoved: tokensAdapter.removeOne,
        tokenAdded( state, action) {
            tokensAdapter.addOne( state, { id: currentId++, ...action.payload } )
        }
    }
})

export default tokensSlice.reducer;

export const { tokenAdded, tokensAdded, tokenRemoved, tokenUpdate  } = tokensSlice.actions

export const {
    selectAll: selectTokens,
    selectById: selectTokenById
} = tokensAdapter.getSelectors( state => state.tokens )

export const selectTokensIds = createSelector(
    // First, pass one or more "input selector" functions:
    selectTokens,
    // Then, an "output selector" that receives all the input results as arguments
    // and returns a final result value
    tokens => tokens.map( token => token.id )
)

export const selectTokensMap = createSelector(
    // First, pass one or more "input selector" functions:
    selectTokens,
    // Then, an "output selector" that receives all the input results as arguments
    // and returns a final result value
    tokens => tokens.reduce( ( acc, val ) => {
        acc[val.id] = val;
        return acc;
    }, {} )
)