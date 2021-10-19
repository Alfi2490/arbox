import {createSlice} from '@reduxjs/toolkit';

export const initState = {
    gymImage: '',
    gymTitle: '',
    gymDescription: '',
    gymPhone: '',
    gymMail: '',
    gymWww: '',
    bottomSelectorStatus: 'My Memberships',
    contactInputActive: ''
};

const slice = createSlice({
    name:'gym',
    initialState:initState,
    reducers:{
        setGymTitle: (state, {payload}) => {
            state.gymTitle = payload;
        },
        setGymDescription: (state, {payload}) => {
            state.gymDescription = payload;
        },
        setGymImage: (state,{payload}) => {
            state.gymImage = payload;
        },
        setBottomSelectorStatus: (state, {payload}) => {
            state.bottomSelectorStatus = payload;
        },
        setContactInputActive: (state, {payload}) => {
            state.contactInputActive = payload;
        },
        clearContactInputActive: state => {
            state.contactInputActive = '';
        },
        setGymPhone: (state, {payload}) => {
            state.gymPhone = payload;
        },
        setGymMail: (state, {payload}) => {
            state.gymMail = payload;
        },
        setGymWww: (state, {payload}) => {
            state.gymWww = payload;
        }
    }       
});

export default slice.reducer;

export const {
    setGymTitle,
    setGymDescription,
    setGymImage,
    setBottomSelectorStatus,
    setContactInputActive,
    clearContactInputActive,
    setGymPhone,
    setGymMail,
    setGymWww
} = slice.actions;

export const gymSelector = state => state.gym
