import { useReducer, useState } from 'react';
import ActionButton from './components/ActionButton';

import './App.css';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'addTwo':
      return state + 2;
    case 'subTwo':
      return state - 2;
    case 'byValue':
      return parseInt(state) + parseInt(action.payload.step);
    default:
      throw Error('Unknown Action: ' + action.type);
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, 0);
  const [step, setStep] = useState(0);

  function handleChange(e) {
    setStep(e.target.value);
  }

  return (
    <>
      <h1>{count}</h1>
      <ActionButton dispatch={dispatch} type={'subTwo'}>
        Minus 2
      </ActionButton>
      <ActionButton dispatch={dispatch} type={'decrement'}>
        Decrement
      </ActionButton>
      <ActionButton dispatch={dispatch} type={'increment'}>
        Increment
      </ActionButton>
      <ActionButton dispatch={dispatch} type={'addTwo'}>
        Increment plus 2
      </ActionButton>
      <br />
      <input type='number' onChange={handleChange} />
      <ActionButton
        dispatch={dispatch}
        type={'byValue'}
        payload={{ step: step }}
      >
        Change By Value
      </ActionButton>
    </>
  );
}

export default App;
