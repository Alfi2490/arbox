import {createSlice} from '@reduxjs/toolkit';

export const initState = {
    userImage: '',
    userName: '',
    userBio: '',
    userBirthDate: '',
    editPersonalDetails: false,
    editUserImage: false
};

const slice = createSlice({
    name:'user',
    initialState:initState,
    reducers:{
        setUserName: (state, {payload}) => {
            state.userName = payload;
        },
        setUserBio: (state, {payload}) => {
            state.userBio = payload;
        },
        setUserBirthDate: (state, {payload}) => {
            state.userBirthDate = payload;
        },
        setUserImage: (state, {payload}) => {
            state.userImage = payload;
        },
        changeEditPersonalDetails: state => {
            state.editPersonalDetails = !state.editPersonalDetails;
        },
        changeEditUserImage: state => {
            state.editUserImage = !state.editUserImage;
        }
    }       
});

export default slice.reducer;

export const {
   setUserName,
   setUserBio,
   setUserBirthDate,
   changeEditPersonalDetails,
   setUserImage,
   changeEditUserImage
} = slice.actions;

export const userSelector = state => state.user
