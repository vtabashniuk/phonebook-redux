import { useClicks } from 'hooks/useClicks';

export const App = () => {
  const { increment, decrement, reset, numbersOfClicks } = useClicks();

  return (
    <dic className='container'>
      <button className="button" type="button" onClick={() => decrement(1)}>
        -
      </button>
      <p>{numbersOfClicks}</p>
      <button className="button" type="button" onClick={() => increment(1)}>
        +
      </button>
      <button className="button" type="button" onClick={() => reset()}>
        Reset
      </button>
    </dic>
  );
};
