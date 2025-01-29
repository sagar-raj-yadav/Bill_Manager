import { configureStore } from "@reduxjs/toolkit";
import billSlicer from "./slices/billSlice";

const store = configureStore({
  reducer: {
    bills: billSlicer,
  },
});

export default store;