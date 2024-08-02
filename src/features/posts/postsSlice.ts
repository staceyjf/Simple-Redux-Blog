import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Post {
  id: string
  title: string
  content: string
}

// Create an initial state value
const initialState: Post[] = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More interesting things about me' },
]

// Create the slice and pass in the initial state
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // Declare a "case reducer" named `postAdded`.
    // The type of `action.payload` will be a `Post` object.
    postAdded(state, action: PayloadAction<Post>) {
      state.push(action.payload)
    },
  },
})

// Export the auto-generated action creator with the same name
export const { postAdded } = postsSlice.actions

export default postsSlice.reducer
