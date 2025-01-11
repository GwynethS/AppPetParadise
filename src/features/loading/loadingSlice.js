import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    visible: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.visible = action.payload
    },
  },
});
export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
