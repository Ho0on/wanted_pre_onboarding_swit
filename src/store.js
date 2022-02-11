// import { createStore } from 'redux';

// const ADD = 'ADD';
// const DELETE = 'DELETE';

// const addChat = text => {
//   return {
//     type: ADD,
//     text,
//   };
// };

// const deleteChat = id => {
//   return {
//     type: DELETE,
//     id: parseInt(id),
//   };
// };

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD:
//       return [{ text: action.text, id: Date.now() }, ...state];
//     case DELETE:
//       return state.filter(chat => chat.id !== action.id);
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);

// export const actionCreators = {
//   addChat,
//   deleteChat,
// };

// export default store;

import { createStore } from 'redux';

const reducer = (state = {}, action) => {
  if (action.type === 'USER_LOGIN') {
    return {
      ...state,
      userId: action.userId,
      userName: action.userName,
      profileImg: action.profileImg,
    };
  }
  return state;
};

export const store = createStore(reducer);
