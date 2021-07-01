import React, { useState } from 'react'

const UseStatePage = () => {
    const [state, setState] = useState({'id': 1, 'value': 'inicial'})

    const onChangeErrado = e => {
        state.value = e.target.value
        setState(state)
    }

    const onChange = e => {
        setState(e.target.value)
    }

    const onChangeCorreto = e => {
        const novoState = {id: 1, value: e.target.value}
        setState(novoState)
    }

    const onChangePrevState = e => {
        setState({...state, value: e.target.value})
    }

    return (
        <div className="container">
            <pre className="display-text">
                { JSON.stringify(state) }
            </pre>
            <input
                type="text"
                value={state.value}
                onChange={e => setState({value: e.target.value})}
            />
        </div>
    )
}

export default UseStatePage
