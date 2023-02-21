import { createSlice } from "@reduxjs/toolkit";

export type authType = {
  newPass: boolean;
  showPassLogin: boolean;
  showNewPass: boolean;
  showNewPassAgain: boolean;
};

const initialState = {
  newPass: false,
  showPassLogin: false,
  showNewPass: false,
  showNewPassAgain: false,
} as authType;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    showPassword: (state) => {
      state.showPassLogin = !state.showPassLogin;
    },
    showNewPassword: (state) => {
      state.showNewPass = !state.showNewPass;
    },
    showNewPasswordAgain: (state) => {
      state.showNewPassAgain = !state.showNewPassAgain;
    },
    newPassword: (state) => {
      state.newPass = !state.newPass;
    },
  },
});

export const {
  showPassword,
  showNewPassword,
  showNewPasswordAgain,
  newPassword,
} = authSlice.actions;
export default authSlice.reducer;
