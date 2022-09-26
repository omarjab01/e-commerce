import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        nome: '',
        email: '',
        token: '',
    },
    reducers: {
        update: (state, action) => {
            state.nome = action.payload.nome
            state.email = action.payload.email
            state.token = action.payload.token
        }
    }
})

export const { update } = userSlice.actions;

export default userSlice.reducer;