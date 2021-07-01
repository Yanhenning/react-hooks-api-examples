import React, { createContext, useContext, useState } from 'react'

export const FilterContext = createContext({})

const initial = { nome: '', idade: 0, caes: 0 }

export const FilterContextProvider = (props) => {
    const [filter, setFilters] = useState(initial)

    const setNome = (nome) => {
        setFilters(prevState => ({...prevState, nome}))
    }

    const setIdade = idade => {
        setFilters(prevState => ({...prevState, idade}))
    }

    const setCaes = caes => {
        setFilters(prevState => ({...prevState, caes}))
    }

    return (
        <FilterContext.Provider value={{
            filter,
            setNome,
            setIdade,
            setCaes
        }}>
            {props.children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => useContext(FilterContext)
