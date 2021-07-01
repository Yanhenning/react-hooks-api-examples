import React, { createContext, useContext, useState } from 'react'

export const ThemeContext = createContext({})

const ColorEnum = {
    white: '#FFF',
    black: '#282c34',
}

export const ThemeContextProvider = (props) => {
    const [theme, setTheme] = useState({background: ColorEnum.black})

    const changeTheme = () => {
        if (theme.background === ColorEnum.white) {
            setTheme({background: ColorEnum.black})
        } else {
            setTheme({background: ColorEnum.white})
        }
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            changeTheme
        }}>
            { props.children }
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)
