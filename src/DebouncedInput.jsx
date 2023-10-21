import React from 'react';
import * as Lodash from 'lodash';

const DebouncedInput = (props) => {
  const handleInput = (e) => {
    console.log('debounced input event firing...', e.target.value);
  };

  //  After the last key up, if there is a gap of specified delay, the event is fired
  //  Useful for sending search string to server
  //  https://stackoverflow.com/a/44755058/3969961
  //  250ms may be used as standard debounce delay
  const handleDebounced = Lodash.debounce(handleInput, 500);

  return (
    <>
      <div className='p-5'>
        <h4>Debounced Input</h4>
        <hr />
        <div className='mb-3'>
          <label htmlFor='emailAddress' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='emailAddress'
            onChange={handleDebounced}
          />
        </div>
      </div>
    </>
  );
};

export default DebouncedInput;
