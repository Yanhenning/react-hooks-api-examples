import React, { useState } from 'react'

const RenderExample = () => {
    const [counter, setCounter] = useState(0)
    const [outroEstado, setOutroEstado] = useState('')

    const adicionarMultiplo = quantidade => {
        for(let i = 0; i<quantidade;i++) {
            setCounter(prevState => (prevState + 1))
        }
    }

    const onClick = async () => {
        adicionarMultiplo(2)
        adicionarMultiplo(2)
        adicionarMultiplo(2)
        adicionarMultiplo(2)
        setOutroEstado('outro estado')
        adicionarMultiplo(2)

        await new Promise(r => setTimeout(r, 2000));

        adicionarMultiplo(2)
    }

    console.log(`%c Renderizou: ${counter}`, 'font-weight: bold; font-size: 16px;color: #89e8b4;')
    return (
        <div className="container">
            <div className="display">
                {counter}
            </div>
            <button onClick={() => onClick()}>
                Clique aqui!
            </button>
        </div>
    )
}

export default RenderExample
