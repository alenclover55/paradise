import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ModalsState {
  key: string;
  open: boolean;
}

const initialState: ModalsState = {
  key: "",
  open: false,
};

export const modalsSlice = createSlice({
  name: "modalsSlice",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalsState>) => {
      state.key = action.payload.key;
      state.open = action.payload.open;
    },
  },
});

export const { openModal } = modalsSlice.actions;

export default modalsSlice.reducer;
