import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Home from './Home/Home'
import UseCallbackPage from './UseCallbackPage/UseCallbackPage'
import UseContextPage from './UseContextPage/UseContextPage'
import UseEffectPage from './UseEffectPage/UseEffectPage'
import UseLayoutEffectPage from './UseLayoutEffectPage/UseLayoutEffectPage'
import UseMemoPage from './UseMemoPage/UseMemoPage'
import UseReducerPage from './UseReducerPage/UseReducerPage'
import UseRefPage from './UseRefPage/UseRefPage'
import UseStatePage from './UseStatePage/UseStatePage'

const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/use-effect">
                <UseEffectPage/>
            </Route>
            <Route exact path="/use-layout-effect">
                <UseLayoutEffectPage/>
            </Route>
            <Route exact path="/use-state">
                <UseStatePage/>
            </Route>
            <Route exact path="/use-context">
                <UseContextPage/>
            </Route>
            <Route exact path="/use-reducer">
                <UseReducerPage/>
            </Route>
            <Route exact path="/use-callback">
                <UseCallbackPage/>
            </Route>
            <Route exact path="/use-memo">
                <UseMemoPage/>
            </Route>
            <Route exact path="/use-ref">
                <UseRefPage/>
            </Route>
        </BrowserRouter>
    )
}

export default Routes
