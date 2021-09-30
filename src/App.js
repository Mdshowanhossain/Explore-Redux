import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './Actions/Action';
import store from './store';




const App = () => {

  const myState = useSelector((state) => state.changeTheNumber);


  const dispatch = useDispatch();


  return (
    <>
      <div className="wrapper">
        <div>
          <button onClick={() => dispatch((decrement()))} className="btn-1"> - </button>
        </div>
        <div >
          <input className="value" type="text" value={myState} />
        </div>
        <div><button onClick={() => dispatch(increment())} className="btn-1"> + </button></div>
      </div>
    </>
  );
};

export default App;