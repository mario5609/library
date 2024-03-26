import React, { createContext, useReducer } from 'react'

export const Context = createContext();

const InitialState = [
  {
    id: 1000,
    Title: "tttt",
    Subtitle: "dfghjk",
    Author: "fvm",
    Category: "fghj",
    Publisher: "sdfghjk"
  },
  {
    id: 1001,
    Title: "aocbuiuiuttoca",
    Subtitle: "dfghjk",
    Author: "fnm",
    Category: "fghj",
    Publisher: "sdfghjk"
  },
  {
    id: 1002,
    Title: "aocboca",
    Subtitle: "dfghjk",
    Author: "fvb",
    Category: "fghj",
    Publisher: "sdfghjk"
  }
]

export default function ContextProvider({ children }) {

  function reducer(state, action) {
    switch (action.type) {

      case "ADD":
        return [...state, ...[action.payload]]

      case "RESET":
        return state

      case "DELETE":
        const newState = state.filter(object => {
          return object.id !== action.payload;
        });

        return newState;

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, InitialState)
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}
