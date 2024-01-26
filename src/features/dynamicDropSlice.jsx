import { createSlice } from "@reduxjs/toolkit";

export const dynamicDropSlice = createSlice({
  name: "fields",
  initialState: {
    userType: "",
    realList: [],
    createList: [],
  },
  reducers: {
    setUserType: (state, action) => {
      state.userType = action.payload;
    },
    realField: (state, action) => {
      if (state.realList.length < 4) {
        state.realList.push(action.payload);
      }
    },
    createField: (state, action) => {
      state.createList.push(action.payload);
    },
  },
});

export const { setUserType, realField, createField } = dynamicDropSlice.actions;

export const selectUserType = (state) => state.fields.userType;
export const selectRealList = (state) => state.fields.realList;
export const selectCreateList = (state) => state.fields.createList;
export default dynamicDropSlice.reducer;
