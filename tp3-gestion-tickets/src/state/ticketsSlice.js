import { createSlice } from "@reduxjs/toolkit";
import { getTicketFromStorage, saveTicketToStorage } from "../data/getData";

const ticketsSlice = createSlice({
    name: "tickets",
    initialState: getTicketFromStorage(),
    reducers: {
        addTicket: (state, action) => {
            state.push(action.payload);
            saveTicketToStorage(state);
        },
        updateTicket: (state, action) => {
            const index = state.findIndex(ticket => ticket.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
                saveTicketToStorage(state);
            }
        },
        deleteTicket: (state, action) => {
            const index = state.findIndex(ticket => ticket.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
                saveTicketToStorage(state);
            }
        }
    }
});

export const { addTicket, updateTicket, deleteTicket } = ticketsSlice.actions;

export default ticketsSlice.reducer;