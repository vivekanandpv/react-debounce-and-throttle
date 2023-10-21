import React from 'react';
import * as Lodash from 'lodash';

const ThrottledInput = (props) => {
  const handleInput = (e) => {
    console.log('throttled input event firing...', e.target.value);
  };

  //  Event fires after delay if there is an input
  //  Useful for autosaving for documents
  //  (in case of a fatality, debouncing misses more data for a fast typist)
  const handleThrottled = Lodash.throttle(handleInput, 1000);

  return (
    <>
      <div className='p-5'>
        <h4>Throttled Input</h4>
        <hr />
        <div className='mb-3'>
          <label htmlFor='emailAddress' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='emailAddress'
            onChange={handleThrottled}
          />
        </div>
      </div>
    </>
  );
};

export default ThrottledInput;
