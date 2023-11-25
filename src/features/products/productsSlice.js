import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("products/fetchData", async () => {
  try {
    // Assuming data.json is in the public folder
    const response = await fetch("/data/data.json");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error.message);
  }
});

const initialState = {
  products: [],
  status: "idle",
  error: null,
  popUpOpen: false,
  changeProductId: 0,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateProductStatusSync: (state, action) => {
      const { productId, newStatus } = action.payload;
      const index = state.products.findIndex((p) => p.id === productId);
      if (index !== -1) {
        state.products[index].status = newStatus;
      }
    },
    openPopUp: (state, action) => {
      const { productId } = action.payload;
      state.popUpOpen = true;
      state.changeProductId = productId;
    },
    closePopUp: (state) => {
      state.popUpOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Action creators are generated for each case reducer function
export const { updateProductStatusSync, openPopUp, closePopUp } =
  productsSlice.actions;

export default productsSlice.reducer;
