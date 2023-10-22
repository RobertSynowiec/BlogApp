import { createSelector } from 'reselect';

// slectors
const selectCategories = state => state.categories;

export const getAllCategories = createSelector([selectCategories], categories => categories);


// actions
const createActionName = actionName => `app/categories/${actionName}`;
const INITIAL_STATE = createActionName('INITIAL_STATE');


// action creators
export const initialCategory = payload => ({ type: INITIAL_STATE, payload });

const postsCategories = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INITIAL_STATE:
            return {
                ...state,
                categories: action.payload,
            };

        default:
            return state;
    }
};
export default postsCategories;