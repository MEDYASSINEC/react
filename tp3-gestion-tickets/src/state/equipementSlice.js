import { createSlice } from "@reduxjs/toolkit";
import { getEquipementFromStorage, saveEquipementToStorage } from "../data/getData";

const equipementSlice = createSlice({
    name: "equipements",
    initialState: getEquipementFromStorage(),
    reducers: {
        addEquipement: (state, action) => {
            state.push(action.payload);
            saveEquipementToStorage(state);
        },
        updateEquipement: (state, action) => {
            const index = state.findIndex(equipement => equipement.id === action.payload.id);
            if (index !== -1){
                state[index] = action.payload;
                saveEquipementToStorage(state);
            }
        },
        deleteEquipement: (state, action) => {
            const index = state.findIndex(equipement => equipement.id === action.payload);
            if (index !== -1){
                state.splice(index, 1);
                saveEquipementToStorage(state);
            }
        }
    }
});

export const { addEquipement, updateEquipement, deleteEquipement } = equipementSlice.actions;

export default equipementSlice.reducer;