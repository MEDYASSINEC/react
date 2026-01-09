import { createSlice } from "@reduxjs/toolkit";

function getData() {
    const students = localStorage.getItem('students');
    return students ? JSON.parse(students) : [] ;
}

function setData(data){
    localStorage.setItem("students", JSON.stringify(data));
}

const studentSlice = createSlice({
    name: "students",
    initialState: getData(),
    reducers: {
        addStudent: (state, action) => {
            state.push(action.payload);
            setData(state)
        },
        updateStudent: (state, action) => {
            const index = state.findIndex(student => student.id === action.payload.id);
            if (index !== -1){
                state[index] = action.payload;
                setData(state);
            }
        },
        deleteStudent: (state, action) => {
            const index = state.findIndex(student => student.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
                setData(state);
            }
        }
    }
})

export const { addStudent, updateStudent, deleteStudent } = studentSlice.actions;

export default studentSlice.reducer;