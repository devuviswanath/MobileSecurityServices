import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import serviceService from "./servicesService";

export const getAllServices = createAsyncThunk(
  "service/getAllServices",
  async (query, thunkAPI) => {
    try {
      return await serviceService.getAllServices(query);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAService = createAsyncThunk(
  "service/getAService",
  async (id, thunkAPI) => {
    try {
      return await serviceService.getSingleService(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");

const serviceState = {
  service: "",
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const serviceSlice = createSlice({
  name: "service",
  initialState: serviceState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllServices.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllServices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.service = action.payload;
      })
      .addCase(getAllServices.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getAService.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singleservice = action.payload;
        state.message = "Service fetched";
      })
      .addCase(getAService.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});
export default serviceSlice.reducer;
