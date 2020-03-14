import React from 'react';
import style from './App.module.css'
import {BrowserRouter, Route} from 'react-router-dom'


import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import ContentContainer from "./component/Content/ContantContainer";
import DialogsContainer from "./component/Dialogs/DialogsContainer";
import UsersContainer from "./component/Users/UsersContainer";
import HeaderContainer from "./component/Header/HeaderContainer";


const App = (props) => {
    return (
        <div className={style.wrap}>
            <HeaderContainer/>
            <Navbar/>
            <Route path='/profile/:userId?' render={ () =>
                <ContentContainer/>
            }/>
            <Route path='/dialog' render={ () =>
                <DialogsContainer/>
            }/>
            <Route path='/users' render={ () =>
                <UsersContainer/>
            }></Route>
            <Footer/>
        </div>
    );
}

export default App;
