import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      const idToRemove = action.payload;
      const indexToRemove = state.findIndex((user) => user.id === idToRemove);
      if (indexToRemove !== -1) {
        state.splice(indexToRemove, 1);
      }
    }
  },
});

console.log(userSlice.actions);

export default userSlice.reducer ;
export const {addUser, removeUser} = userSlice.actions;
