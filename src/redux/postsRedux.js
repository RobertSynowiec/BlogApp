
// slectors
export const getAllPosts = (state => state.posts);
export const getPostById = (state, id) => state.posts
    .filter(post => post.id === id);

// actions

// action creators

const postsReducer = (statePart = [], action) => {
    switch (action.type) {

        default:
            return statePart;
    }
}
export default postsReducer;