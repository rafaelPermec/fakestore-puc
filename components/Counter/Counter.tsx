import { useState } from "react";

interface CounterProps {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const Counter: React.FC<CounterProps> = ({quantity, setQuantity}) => {
  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  return (
    <div className="relative flex items-center max-w-[8rem]">
      <button
        type="button"
        id="decrement-button"
        data-input-counter-decrement="quantity-input"
        className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
        onClick={decrement}
      >
        <svg
          className="w-3 h-3 text-gray-400 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 2"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h16"
          />
        </svg>
      </button>
      <input
        type="text"
        id="quantity-input"
        data-input-counter
        aria-describedby="helper-text-explanation"
        className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-gray-500 focus:border-gray-500 block w-full py-2.5 border-t border-b border-l border-r rounded-none"
        placeholder="1"
        value={quantity}
        required
      />
      <button
        type="button"
        id="increment-button"
        data-input-counter-increment="quantity-input"
        className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
        onClick={increment}
      >
        <svg
          className="w-3 h-3 text-gray-400 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
      </button>
    </div>
  );
};

export default Counter;
