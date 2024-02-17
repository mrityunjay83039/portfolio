// Using counter component with this HOC

import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";

const WithCounter = (OldComponent) => {
  return function EnhancedCounter(props) {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    console.log(count);

    return (
      <OldComponent
        {...props}
        count={count}
        incrementCount={() => dispatch(increment())}
        decrementCount={() => dispatch(decrement())}
      />
    );
  };
};

export default WithCounter;
