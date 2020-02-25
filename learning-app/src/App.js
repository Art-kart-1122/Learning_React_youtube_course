import React from 'react';
import style from './App.module.css'
import {BrowserRouter, Route} from 'react-router-dom'


import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import Content from "./component/Content/Content";
import Footer from "./component/Footer/Footer";
import Dialogs from "./component/Dialogs/Dialogs";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className={style.wrap}>
                <Header/>
                <Navbar/>
                <Route path = '/profile' render = { () => <Content store={props.store} addStore={props.addStore}/> } />
                <Route path = '/dialog' render = { () => <Dialogs store={props.store}/> }/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
