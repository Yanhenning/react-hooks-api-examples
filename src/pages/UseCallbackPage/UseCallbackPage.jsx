import React, { memo, useCallback, useEffect, useState } from 'react'

const Counter = ({ counter, onClick }) => {
    console.log('%c render: Counter', 'font-weight: bold; font-size: 16px;color: #8190e6;')
    return (
        <div className="container">
            <div className="display">
                {counter}
            </div>
            <pre style={{fontSize: '40px', marginBottom: '5px'}}> Clique no botão </pre>
            <button onClick={onClick}>Incrementar</button>
        </div>
    )
}

const Instrucoes = (props) => {
    console.log('%c render: Instruções', 'font-weight: bold; font-size: 16px;color: #f26f99;')
    console.log(`duzias ${props.duzias}`)
    return (
        <div>
            <p style={{fontSize: '40px'}}>Você tem {props.duzias} duzias</p>
        </div>
    )
}

export const InstrucoesMemoizada = memo(Instrucoes)


const UseCallbackPage = () => {
    const [counter, setCounter] = useState(0)
    const [duzias, setDuzias] = useState(0)
    const onClick = () => setCounter(counter + 1)

    useEffect(() => {
        const multiploDoze = counter % 12 === 0
        if (multiploDoze) {
            setDuzias(counter / 12)
        }
    }, [counter])

    const executaCallback = useCallback(() => {
        return duzias
    }, [duzias])


    return (
        <div className="container">
            <Counter counter={counter} onClick={onClick}/>
            <InstrucoesMemoizada duzias={executaCallback()}/>
        </div>
    )
}

export default UseCallbackPage
