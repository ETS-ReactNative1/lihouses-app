import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import React from "react";

import HomeNavigation from "./navigations/HomeNavigation";

import houseReducer from "./store/reducers/houses";
import StackNavigation from "./navigations/StackNavigation";
import { HouseOverview } from "./screens/House/HouseOverView";

const rootReducer = combineReducers({
  Houses: houseReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StackNavigation />
        <StatusBar />
      </Provider>
    </NavigationContainer>
  );
}
