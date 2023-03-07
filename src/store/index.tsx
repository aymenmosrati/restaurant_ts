import { configureStore } from "@reduxjs/toolkit";
import auth from "./authSlice";
import modal from "./modalSlice";
import switchToggel from "./switchToggelSlice";

const store = configureStore({
  reducer: {
    auth: auth,
    modal: modal,
    switchToggel: switchToggel,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
