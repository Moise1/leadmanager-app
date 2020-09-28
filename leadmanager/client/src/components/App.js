import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import Header from './Layouts/Header'
import { Provider as AlertProvider} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic';
import { Dashboard } from '../components/Leads/Dashboard'
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Alerts from './Layouts/Alerts';
import {alertOptions} from '../styled-components'


// Alert Options


class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Fragment>
                        <Header />
                        <Alerts/>
                        <div className="container">
                            <Dashboard />
                        </div>
                    </Fragment>
                </AlertProvider>
            </Provider>
        )
    }
}

ReactDom.render(<App />, document.getElementById('root'))