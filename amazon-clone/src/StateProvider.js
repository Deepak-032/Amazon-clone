// setuo data layer
// we need this to track the basket

import React, { createContext, useContext, useReducer } from "react";

// emagine this is creating the data layer
export const StateContext = createContext();

// BUILD A PROVIDER and wrap our entire app in this provider which provides the access to the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// this is how we use data layer inside the component
export const useStateValue = () => useContext(StateContext)