import { useState, useRef } from "react";
import anime from "animejs";

interface CounterComponentProps {
  title?: string;
  subtitle?: string;
  initialCount?: number;
}

const sayHello = () => {
  return "Hello";
};

const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].join(" ").split("");

const jsonStringify = JSON.stringify({
  cars: ["Ford", "BMW", "Fiat"],
});

const CounterComponent = ({
  title = "Hola, soy el valor default",
  subtitle,
  initialCount = 0,
}: CounterComponentProps) => {

  const [count, setCount] = useState(initialCount);
  const roundLogEl = useRef(null);

  const animateCount = (newCount: number) => {
    anime({
      targets: roundLogEl.current,
      innerHTML: [count, newCount],
      easing: "linear",
      duration: 300,
      round: 1,
    });
    setCount(newCount);
  };

  const increment = () => {
    animateCount(count + 10);
  };

  const decrement = () => {
    animateCount(count - 10);
  };

  const reset = () => {
    animateCount(initialCount);
  };

  return (
    <>
      <section className="flex flex-col gap-8 p-6 bg-gray-200 rounded-md">
        <div className="flex justify-center">
          {/* Vincular el elemento al ref */}
          <h2 ref={roundLogEl} className="text-4xl font-extralight">
            {initialCount}
          </h2>
        </div>

        <div className="grid grid-cols-2 justify-center gap-4">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-md transition-transform duration-200 ease-in-out transform hover:scale-105 active:scale-95"
            onClick={decrement}
          >
            Decrement -10
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md transition-transform duration-200 ease-in-out transform hover:scale-105 active:scale-95"
            onClick={increment}
          >
            Increment +10
          </button>
          <button
            className="col-span-2 px-4 py-2 bg-gray-500 text-white rounded-md transition-transform duration-200 ease-in-out transform hover:scale-105 active:scale-95"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </section>

      <section className="flex flex-col gap-8 p-6 bg-gray-200 rounded-md">
        {numberArray}
      </section>

      <section className="flex flex-col gap-8 p-6 bg-gray-200 rounded-md">
        <code>{jsonStringify}</code>
      </section>

      <section className="flex flex-col gap-8 p-6 bg-gray-200 rounded-md">
        <code>Function: {sayHello()}</code>
      </section>
    </>
  );
};

export default CounterComponent;
