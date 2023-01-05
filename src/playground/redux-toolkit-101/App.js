import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decremented, incrementByAmount, incremented } from "./redux/counter";


const App = () => {
  const { count } = useSelector((state) => state.myCounter)
  let dispatch = useDispatch()
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(() => dispatch(incremented()))}>Increase by One</button>
      <button onClick={() => dispatch(() => dispatch(decremented()))}>Decrease by One</button>
      <button onClick={() => dispatch(() => dispatch(incrementByAmount(100)))}>Increment 100</button>
    </div>
  )
}

export default App