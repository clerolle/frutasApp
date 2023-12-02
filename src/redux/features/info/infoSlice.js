import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pokemons: [],
}

export const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    getInfo: (state, action) => {
      state.pokemons  = action.payload;
    },
    searchInfo: (state, action) => {
      state.pokemons  = action.payload;
    },
  },
})

export const { getInfo, searchInfo } = infoSlice.actions

export default infoSlice.reducer