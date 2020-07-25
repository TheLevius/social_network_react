import React from 'react';
import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";

// 1. test data


let state = {
    postData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s, my first post', likesCount: 11},
        {id: 3, message: 'Hi, какой-то пост', likesCount: 15},
    ]
};

it('length of postData should be incremented', () => {
    // 2. action
    let action = addPostActionCreator('it-incubator')
    let newState = profileReducer(state, action);
    // 3. expectation
    expect (newState.postData.length).toBe(4);
});

it('message of postData[3] should be corrected', () => {
    // 2. action
    let action = addPostActionCreator('it-incubator')
    let newState = profileReducer(state, action);
    // 3. expectation
    expect (newState.postData[3].message).toBe('it-incubator');
});
it('after deleting length should be decremented', () => {
    // 2. action
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    // 3. expectation
    expect (newState.postData.length).toBe(2);
});

