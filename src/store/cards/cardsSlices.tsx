import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    colors: {
        primary: 'black',
        secondary: 'red'
    },
    prevColors: {
        primary: 'transparent',
        secondary: 'transparent'
    }
}

export const cardSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        setColors(state, {payload}) {
            state.colors = {
                ...state.colors,
                ...payload
            }
        },
        setPrevColors(state, {payload}) {
            state.prevColors = {
                ...state.prevColors,
                ...payload
            }
        },
        resetCardsSlice(state) {
            Object.assign(state, initialState);
        }
    }
})

export const { setColors, setPrevColors, resetCardsSlice } = cardSlice.actions;