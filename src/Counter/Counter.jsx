import React, { useState } from 'react';
import PropTypes from 'prop-types'

function Counter({count, setCount}) {
  // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(value || 0);
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=> setCount(count + 1)}> + </button>
        <button onClick={()=> setCount(count - 1)}> - </button>
    </div>
  );
}

Counter.propTypes = {
    count: PropTypes.number,
    setCount: PropTypes.func
}

export default Counter;