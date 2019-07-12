import React from 'react';

import './App.css';
import AppBody from './AppBody';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';


class App extends React.Component {

    render() {
        return (
            <div className="App">
                <AppHeader />
                <AppBody />
                <AppFooter />
            </div>
        );
    }
}

export default App;
