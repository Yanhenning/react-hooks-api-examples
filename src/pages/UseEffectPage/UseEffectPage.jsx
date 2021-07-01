import React, { useState, useEffect } from 'react'

const UseEffectPage = () => {
    const fontSize = '16px'

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log(`%c useEffect 1: ${counter}`, `font-weight: bold; font-size: ${fontSize};color: #f26f99;`)
    }, [counter])

    useEffect(() => {
        console.log(`%c useEffect 2: ${counter}`, `font-weight: bold; font-size: ${fontSize};color: #8190e6;`)
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

//
// class UseEffectPage extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             counter: 0
//         }
//         this.increase = this.increase.bind(this)
//     }
//
//     increase() {
//         this.setState({ counter: this.state.counter + 1 })
//     }
//
//     render() {
//         return (
//             <div className="container">
//                 <div className="display">
//                     {this.state.counter}
//                 </div>
//                 <button onClick={this.increase}>Incrementar</button>
//             </div>
//         )
//     }
// }

export default UseEffectPage
