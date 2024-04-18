import profileReducer, {createPost, deletePost} from "./profileReducer";

let state = {
    posts: [
        {
            postID: 2,
            name: 'Diana Fox',
            text: 'Hello',
            date: '23.03.2024',
            time: '15:32',
            likesCount: 96,
            commentsCount: 10
        },
        {
            postID: 1,
            name: 'Diana Fox',
            text: 'Hello',
            date: '23.03.2024',
            time: '15:32',
            likesCount: 96,
            commentsCount: 10
        }
    ]
}

it(`after add post length will increment`, () => {
    let action = createPost('text post');

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
})

it(`after add post first post id will highest`, () => {
    let action = createPost('text post');

    let newState = profileReducer(state, action);

    expect(newState.posts[0].postID).toBe(3);
})

it(`after add post text will be corrected`, () => {
    let action = createPost('text post');

    let newState = profileReducer(state, action);

    expect(newState.posts[0].text).toBe('text post');
})

it(`after delete post length will decrement`, () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(1);
})

it(`after delete and add new post post id will be correct`, () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);

    let action2 = createPost('text post');

    newState = profileReducer(state, action2)

    expect(newState.posts[0].postID).toBe(3);
})