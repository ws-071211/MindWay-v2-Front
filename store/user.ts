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
    setAuthority: (state, action: PayloadAction<UserType>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setAuthority } = userSlice.actions;
export default userSlice
