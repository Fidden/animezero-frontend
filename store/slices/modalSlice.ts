import {TModal} from '@/types/TModal';
import {createSlice} from '@reduxjs/toolkit';

export interface ModalState {
    open: boolean;
    type: TModal;
}

const initialState: ModalState = {
    open: true,
    type: 'submit'
};

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state) => {
            state.open = true;
        },
        closeModal: (state) => {
            state.open = false;
        },
        setType(state, {payload}) {
            state.type = payload;
        }
    }
});

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;
