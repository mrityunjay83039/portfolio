import WithCounter from "../hoc/WithCounter";

const Counter = ({ count, incrementCount, decrementCount }) => {
  return (
    <div>
      <p>Count: {count}</p>
      <button
        className="border p-2 bg-bgDefault text-white rounded mt-2"
        onClick={incrementCount}
      >
        increment
      </button>
      <button 
      className="border p-2 bg-bgDefault text-white rounded mt-2"
      aria-label="decrement button"
      onClick={decrementCount}
      >
        decrement
      </button>
    </div>
  );
};

export default WithCounter(Counter);
