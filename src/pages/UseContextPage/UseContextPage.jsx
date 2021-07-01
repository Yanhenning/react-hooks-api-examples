import React from 'react'
import { FilterContextProvider, useFilter } from '../../contexts/FilterContext'
import { useTheme } from '../../contexts/ThemeContext'

const InputNome = () => {
    const { filter, setNome } = useFilter()

    return (
        <>
            <input style={{maxWidth: '280px'}} value={filter.nome} onChange={e => setNome(e.target.value)}/>
        </>
    )
}

const InputIdade = () => {
    const { filter, setIdade } = useFilter()

    return (
        <>
            <input style={{maxWidth: '280px'}} value={filter.idade} onChange={e => setIdade(e.target.value)}/>
        </>
    )
}

const InputCaes = () => {
    const { filter, setCaes } = useFilter()

    return (
        <>
            <input style={{maxWidth: '280px'}} value={filter.caes} onChange={e => setCaes(e.target.value)}/>
        </>
    )
}

const Filtros = () => {
    const { filter } = useFilter()
    console.log('%c Fui renderizado', 'font-weight: bold; font-size: 16px;color: #8190e6;')

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '60vw'}}>
            <div className="display-text" style={{textAlign: 'left'}}>
                {`Nome: ${filter.nome}`}
                <br/>
                {`Idade: ${filter.idade}`}
                <br/>
                {`Cães: ${filter.caes}`}
            </div>
            <InputNome/>
            <br/>
            <InputIdade/>
            <br/>
            <InputCaes/>
        </div>
    )
}

const UseContextPage = () => {
    const { theme, changeTheme } = useTheme()
    return (
        <div style={{ background: theme.background }} className="container">
            <div style={{marginBottom: '20px'}}>
                <FilterContextProvider>
                    <Filtros/>
                </FilterContextProvider>
            </div>

            <button onClick={changeTheme}>
                Trocar o tema
            </button>
        </div>
    )
}

export default UseContextPage
