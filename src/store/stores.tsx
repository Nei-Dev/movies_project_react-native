import { configureStore } from '@reduxjs/toolkit';
import { cardSlice } from './cards/cardsSlices';
// ...
const store = configureStore({
	reducer: {
        cards: cardSlice.reducer,
	},
});
export type RootState = ReturnType<typeof store.getState>;

export default store;