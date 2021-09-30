import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './Actions/Action';
import { MultiplyNumber, DivideNumber } from './Actions/Action'

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const multAndDivide = useSelector((state) => state.multyAndDivide)

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


      <div className="wrapper">
        <div>
          <button onClick={(() => dispatch(DivideNumber()))} className="btn-1"> / </button>
        </div>
        <div >
          <input className="value" type="text" value={multAndDivide} />
        </div>
        <div><button onClick={(() => dispatch(MultiplyNumber()))} className="btn-1"> * </button></div>
      </div>
    </>
  );
};

export default App;