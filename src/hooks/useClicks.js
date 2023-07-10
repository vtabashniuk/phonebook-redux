import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from 'redux/clicksSlice';

export const useClicks = () => {
    const dispatch = useDispatch();
    const numbersOfClicks = useSelector(state => state.clicks.value);
    const handleIncrement = value => dispatch(increment(value));
    const handleDecrement = value => dispatch(decrement(value));
    const handleReset = () => dispatch(reset());
  
    return {
      increment: handleIncrement,
      decrement: handleDecrement,
      reset: handleReset,
      numbersOfClicks,
    };
  };