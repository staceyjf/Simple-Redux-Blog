import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/app/store'

interface AuthState {
  username: string | null
}

const initialState: AuthState = {
  // this is not a great example of auth
  // review to a more secure and complex auth state
  username: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoggedIn(state, action: PayloadAction<string>) {
      state.username = action.payload
    },
    userLoggedOut(state) {
      state.username = null
    },
  },
})

export const { userLoggedIn, userLoggedOut } = authSlice.actions

export default authSlice.reducer

// Selector functions for DRY code
// helper type code for functions that are repeatedly used
export const selectCurrentUsername = (state: RootState) => state.auth.username
