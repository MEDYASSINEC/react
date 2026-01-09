import { configureStore } from "@reduxjs/toolkit";
// import studentsReducer from '../features/students/studentsSlice';
import studentsReducer from '../features/students/studentSlice-exJS';

const store = configureStore({
    reducer: {students: studentsReducer}
});

export { store };