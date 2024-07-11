import { UserType } from '@/types/common/UserType';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: UserType = {
  name: '',
  authority: 'ROLE_STUDENT',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserType>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setUserData } = userSlice.actions;
export default userSlice
