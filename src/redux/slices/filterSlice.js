import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
  sort: {
    rusName: 'популярности',
    sortBy: 'rating',
  },
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload
    },
    setSortBy(state, action) {
      state.sort = action.payload
    },
  },
})

export const { setCategoryId, setSortBy } = filterSlice.actions

export default filterSlice.reducer
