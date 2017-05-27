
import React from "react"
import AppWithNavigationState from './app'
import {Provider} from 'react-redux'
import store  from './stores/config'

export default class Root extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <AppWithNavigationState />
                </Provider>
        );
    }
}