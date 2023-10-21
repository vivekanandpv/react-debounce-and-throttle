import React from 'react';
import DebouncedInput from './DebouncedInput';
import ThrottledInput from './ThrottledInput';

const App = (props) => {
  return (
    <>
      <div className='p-5'>
        <h2>React App</h2>
        <hr />
        <div className='row'>
          <div className='col'>
            <DebouncedInput />
            <ThrottledInput />
          </div>
          <div className='col'>
            <img src='diagram.png' alt='' width={600} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
