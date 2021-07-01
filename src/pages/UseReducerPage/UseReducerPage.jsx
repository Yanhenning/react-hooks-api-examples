import React, { useReducer } from 'react'

const initializeState = () => ({
  counter: 10
})

const initialState = { counter: 15 }

const reducer = (state, action) => {
  switch (action) {
    case 'aumentar':
      return { counter: state.counter + 1 }
    case 'diminuir':
      return { counter: state.counter - 1 }
    default:
      throw new Error("Ocorreu um erro" )
  }
}

const reducerTwo = (state, newState) => ({
    ...state,
    counter: newState.counter
})

const UseReducerPage = () => {
    const [state, dispatch] = useReducer(reducer, initialState, initializeState)
    const [stateTwo, setState] = useReducer(reducerTwo, initialState, initializeState)
    const buttonsClasses = {marginRight: '5px', width: '80px'}

    return (
        <div className="container">
            <div className="display">
                {state.counter}
                {/*{stateTwo.counter}*/}
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <button style={buttonsClasses} onClick={() => dispatch('aumentar')}>+1</button>
                <button style={buttonsClasses} onClick={() => dispatch('diminuir')}>-1</button>
                {/*<button style={buttonsClasses} onClick={() => setState({counter: stateTwo.counter + 1})}>+1</button>*/}
                {/*<button style={buttonsClasses} onClick={() => setState({counter: stateTwo.counter - 1})}>-1</button>*/}
            </div>
        </div>
    )
}

export default UseReducerPage
