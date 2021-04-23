import React, { useReducer } from "react";
import "./styles.css";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export default function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    // useContext and useReducer
    // <CountContext.Provider
    //   value={{ countState: count, countDispatch: dispatch }}
    // >
    //   <div className="App">
    //     Count {count}
    //     <ComponentA />
    //   </div>
    // </CountContext.Provider>

    //useMemo
    <div>
      <ComponentB />
    </div>
  );
}
