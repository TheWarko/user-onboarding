import React from 'react'


const stepReducer = (state, action) => {
    switch (action.type) {
      case 'next':
        return {step: state.step + 1};
      case 'prev':
        return {step: state.step - 1};
      default:
        throw new Error();
    }
}

export default stepReducer





// const initialStep = { 
//   step: 1
// }

// function stepReducer(state, action) {
//   switch (action.type) {
//     case 'next':
//       return {step: state.step + 1};
//     case 'prev':
//       return {step: state.step - 1};
//     default:
//       throw new Error();
//   }
// }

// function Step(initialStep) {
//   const [state, dispatch] = useReducer(stepReducer, initialStep);  return (
//     <>
//       Step: {state.step}
//       <button onClick={() => dispatch({type: 'next'})}>-</button>
//       <button onClick={() => dispatch({type: 'prev'})}>+</button>
//     </>
//   );
// }