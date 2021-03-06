import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment1":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement1":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function CounterReducer() {
  const [count, dispach] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>カウント1：{count.firstCounter}</h1>
      <h1>カウント2：{count.secondCounter}</h1>
      <button onClick={() => dispach({ type: "increment1", value: 1 })}>
        increment1
      </button>
      <button onClick={() => dispach({ type: "decrement1", value: 1 })}>
        decrement1
      </button>
      <button onClick={() => dispach({ type: "increment2", value: 10 })}>
        increment2
      </button>
      <button onClick={() => dispach({ type: "decrement2", value: 10 })}>
        decrement2
      </button>
      <button onClick={() => dispach({type:"reset"})}>Reset</button>
    </div>
  );
}

export default CounterReducer;
