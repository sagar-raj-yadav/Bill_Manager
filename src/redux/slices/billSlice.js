import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  bills: [
    { id: 1, description: "Dominoes", category: "FoodNDining", amount: 430, date: "01-02-2020" },
    { id: 2, description: "Car wash", category: "utility", amount: 500, date: "01-06-2020" },
    { id: 3, description: "Amazon", category: "shopping", amount: 2030, date: "01-07-2020" },
    { id: 4, description: "House rent", category: "Food & Dining", amount: 35900, date: "01-03-2020" },
    { id: 5, description: "Tuition", category: "education", amount: 2200, date: "01-12-2020" },
    { id: 6, description: "Laundry", category: "Personal Care", amount: 320, date: "01-14-2020" },
    { id: 7, description: "Vacation", category: "Travel", amount: 3430, date: "01-18-2020" }
  ],
  filteredBills: [
    { id: 1, description: "Dominoes", category: "FoodNDining", amount: 430, date: "01-02-2020" },
    { id: 2, description: "Car wash", category: "utility", amount: 500, date: "01-06-2020" },
    { id: 3, description: "Amazon", category: "shopping", amount: 2030, date: "01-07-2020" },
    { id: 4, description: "House rent", category: "Food & Dining", amount: 35900, date: "01-03-2020" },
    { id: 5, description: "Tuition", category: "education", amount: 2200, date: "01-12-2020" },
    { id: 6, description: "Laundry", category: "Personal Care", amount: 320, date: "01-14-2020" },
    { id: 7, description: "Vacation", category: "Travel", amount: 3430, date: "01-18-2020" }
  ]
};

const billSlice = createSlice({
  name: "bills",
  initialState,
  reducers: {
    addBill: (state, action) => {
      const newBill = { ...action.payload, id: uuidv4() };
      state.bills.push(newBill);
      state.filteredBills.push(newBill);
    },
    editBill: (state, action) => {
      state.bills = state.bills.map(bill => 
        bill.id === action.payload.id ? action.payload : bill
      );
      state.filteredBills = state.filteredBills.map(bill => 
        bill.id === action.payload.id ? action.payload : bill
      );
    },
    deleteBill: (state, action) => {
      state.bills = state.bills.filter(bill => bill.id !== action.payload);
      state.filteredBills = state.filteredBills.filter(bill => bill.id !== action.payload);
    },
    filterBills: (state, action) => {
      state.filteredBills = action.payload 
        ? state.bills.filter(bill => bill.category === action.payload)
        : state.bills;
    }
  }
});


export const { addBill, editBill, deleteBill, filterBills } = billSlice.actions;
export default billSlice.reducer;