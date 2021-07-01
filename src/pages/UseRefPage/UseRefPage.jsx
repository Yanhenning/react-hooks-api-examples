import React, { useRef } from 'react'

const UseRefPage = () => {
    const inputRef = useRef(null)

    const onClick = () => {
        inputRef.current.focus()
        inputRef.current.value = inputRef.current.value + 1
    }

    return (
        <div className="container">
            <input style={{marginBottom: '10px'}} ref={inputRef} type="text"/>
            <button onClick={onClick}>
                Clique em mim!
            </button>
        </div>
    )
}

export default UseRefPage
