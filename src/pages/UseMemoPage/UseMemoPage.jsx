import React, { memo, useEffect, useMemo, useState } from 'react'

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

const UseMemoPage = () => {
    const [counter, setCounter] = useState(0)
    const [duzias, setDuzias] = useState(0)
    const onClick = () => setCounter(counter + 1)
    const calcularDuzias = useMemo(() => counter / 12, [duzias])

    useEffect(() => {
        const multiploDoze = counter % 12 === 0
        if (multiploDoze) {
            setDuzias(counter)
        }
    }, [counter])

    const obterDuzias = () => {
        return calcularDuzias
    }

    return (
        <div className="container">
            <Counter counter={counter} onClick={onClick}/>
            <InstrucoesMemoizada duzias={obterDuzias()}/>
        </div>
    )
}

export default UseMemoPage
