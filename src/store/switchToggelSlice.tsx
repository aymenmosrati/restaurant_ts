import { createSlice } from "@reduxjs/toolkit";

export type modalType = {
  switchT: boolean;
};
const initialState: modalType = {
  switchT: false,
};

const switchToggelSlice = createSlice({
  name: "switchToggel",
  initialState,
  reducers: {
    switchToggel: (state) => {
      state.switchT = !state.switchT;
    },
  },
});

export const { switchToggel } = switchToggelSlice.actions;
export default switchToggelSlice.reducer;
