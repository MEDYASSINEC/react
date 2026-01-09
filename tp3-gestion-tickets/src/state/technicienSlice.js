import { createSlice } from "@reduxjs/toolkit";
import { getTechnicienFromStorage, saveTechnicienToStorage } from "../data/getData";

const technicienSlice = createSlice({
    name: "techniciens",
    initialState: getTechnicienFromStorage(),
    reducers: {
        addTechnicien: (state, action) => {
            state.push(action.payload);
            saveTechnicienToStorage(state);
        },
        updateTechnicien: (state, action) => {
            const index = state.findIndex(technicien => technicien.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
                saveTechnicienToStorage(state);
            }
        },
        deleteTechnicien: (state, action) => {
            const index = state.findIndex(technicien => technicien.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
                saveTechnicienToStorage(state);
            }
        }
    }
});

export const { addTechnicien, updateTechnicien, deleteTechnicien } = technicienSlice.actions;

export default technicienSlice.reducer;