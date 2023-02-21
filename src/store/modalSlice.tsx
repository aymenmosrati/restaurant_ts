import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type modalType = {
  showPopup: boolean;
};
const initialState: modalType = {
  showPopup: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<boolean>) => {
      state.showPopup = action.payload;
    },
  },
});

export const { showModal } = modalSlice.actions;
export default modalSlice.reducer;
