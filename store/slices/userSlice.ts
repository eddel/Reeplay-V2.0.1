import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../app.store';
// import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface User {
  userInfo: {
    _id: string;
    fullname: string;
    email: string;
    password: string;
  };
}

// Define the initial state using that type
const initialState: User = {
  userInfo: {
    _id: '',
    fullname: '',
    email: '',
    password: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
    },
    setCredentialsEmail: (state, action) => {
      state.userInfo.email = action.payload;
    },
    logout: (state, action) => {
      state.userInfo = {
        _id: '',
        fullname: '',
        email: '',
        password: '',
      };
    },
  },
});

export const {setCredentials, setCredentialsEmail, logout} = userSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user.userInfo;

export default userSlice.reducer;
