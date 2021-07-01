import React, { useState, useEffect, useLayoutEffect } from 'react'

const UseLayoutEffectPage = () => {
    const fontSize = '16px'
    const [counter, setCounter] = useState(0)

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    useEffect(() => {
        console.log(`%c useEffect 1: ${counter}`, `font-weight: bold; font-size: ${fontSize};color: #f26f99;`)
    }, [counter])

    useLayoutEffect(() => {
        console.log(`%c useLayoutEffect 2: ${counter}`, `font-weight: bold; font-size: ${fontSize};color: #8190e6;`)
    }, [counter])

    useEffect(() => {
        console.log(`%c useEffect 3: ${counter}`, `font-weight: bold; font-size: ${fontSize};color: #89e8b4;`)
    }, [counter])

    useEffect(() => {
        console.log(`%c ------------------------`, 'font-weight: bold; font-size: 16px')
    }, [counter])

    return (
        <div className="container">
            <div className="display">
                { counter }
            </div>
            <button onClick={() => setCounter(prevState => prevState + 1)}>Incrementar</button>
        </div>
    )
}

export default UseLayoutEffectPage
