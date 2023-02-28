import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type modalType = {
  showPopup: boolean;
  showLogOut: boolean;
  showNotification: boolean;
  showSidebar: boolean;
};
const initialState: modalType = {
  showPopup: false,
  showLogOut: false,
  showNotification: false,
  showSidebar: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<boolean>) => {
      state.showPopup = action.payload;
    },
    closeLogOut: (state, action: PayloadAction<boolean>) => {
      state.showLogOut = action.payload;
    },
    closeNotification: (state, action: PayloadAction<boolean>) => {
      state.showNotification = action.payload;
    },
    closeSidebar: (state, action: PayloadAction<boolean>) => {
      state.showSidebar = action.payload;
    },
  },
});

export const { showModal, closeLogOut, closeNotification, closeSidebar } =
  modalSlice.actions;
export default modalSlice.reducer;
