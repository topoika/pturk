import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    user: null,
    session: false,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,

  reducers: {
    login: (state, action) => {
      state.user = {
        user: action.payload,
        session: true,
      };
    },
    logout: (state) => {
      state.user = {
        user: null,
        session: false,
      };
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
