import React from 'react';
import style from './App.module.css'
import {BrowserRouter, Route} from 'react-router-dom'


import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import ContentContainer from "./component/Content/ContantContainer";
import DialogsContainer from "./component/Dialogs/DialogsContainer";


const App = (props) => {
    return (
        <div className={style.wrap}>
            <Header/>
            <Navbar/>
            <Route path='/profile' render={ () =>
                <ContentContainer/>
            }/>
            <Route path='/dialog' render={ () =>
                <DialogsContainer/>
            }/>
            <Footer/>
        </div>
    );
}

export default App;
