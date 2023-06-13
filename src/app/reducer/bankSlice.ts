import { createSlice } from "@reduxjs/toolkit";

interface IBankState {
    users:any[];
    username: string;
    cash: number;
}

const initialState: IBankState = {
    users: [],
    username: "nickname",
    cash:0,
}

export const bankSlice = createSlice({
    name: 'cash',
    initialState,
    reducers: {
        addCash: (state, action) => {
            state.cash += action.payload
        },
        getCash: (state, action) => {
            state.cash -= action.payload
        },
        addUser: (state, action) => {
            state.users = [...state.users,action.payload ] 
        },
        removeUser: (state, action) => {
            state.users = state.users.filter((user: string) => user !== action.payload)
        },
        changeNickname: (state, action) => {
            state.username = action.payload
        }
    }
})

export const { addCash, addUser, getCash, removeUser, changeNickname } = bankSlice.actions;
export default bankSlice.reducer