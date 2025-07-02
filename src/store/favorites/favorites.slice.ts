import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const LS_KEY = "favorites";

export const getFavoritesFromLacalStorage = () => {
  const favorites = localStorage.getItem(LS_KEY);
  if (!favorites) return [];
  try {
    return JSON.parse(favorites);
  } catch (error) {
    console.error("Error localStore", error);
    return [];
  }
};

const saveFavoritesLocalStore = (favorites: string[]) => {
  localStorage.setItem(LS_KEY, JSON.stringify(favorites));
};

interface IFavoritesState {
  favorites: string[];
}

const initialState: IFavoritesState = {
  favorites: getFavoritesFromLacalStorage(),
};

const favoritesSlice = createSlice({
  name: LS_KEY,
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload);
        saveFavoritesLocalStore(state.favorites);
      }
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter((id) => id !== action.payload);
    },
    clearFavorites: (state) => {
      state.favorites = [];
      localStorage.removeItem(LS_KEY);
    },
  },
});

export const { addFavorite, removeFavorite, clearFavorites } =
  favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
