import { configureStore } from '@reduxjs/toolkit';
import ticketsReducer from './ticketsSlice';
import equipementReducer from './equipementSlice';
import technicienReducer from './technicienSlice';

const store = configureStore({
    reducer: {
        tickets: ticketsReducer,
        technicien: technicienReducer,
        equipements: equipementReducer
    }
});
export { store };