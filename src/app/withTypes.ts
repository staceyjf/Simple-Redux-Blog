import { createAsyncThunk } from '@reduxjs/toolkit'

import type { RootState, AppDispatch } from './store'

// typing createAsyncThunk

// RTK provides a predefined version that has the correct
// dispatch and getstate types built in 
export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState
  dispatch: AppDispatch
}>()
