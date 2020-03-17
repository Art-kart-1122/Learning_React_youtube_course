import React from 'react';
import style from './App.module.css'
import {BrowserRouter, Route} from 'react-router-dom'


import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import ContentContainer from "./component/Content/ContentContainer";
import DialogsContainer from "./component/Dialogs/DialogsContainer";
import UsersContainer from "./component/Users/UsersContainer";
import HeaderContainer from "./component/Header/HeaderContainer";
import LoginContainer from "./component/Login/LoginContainer";


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
            <Route path='/login' render={ () =>
                <LoginContainer/>
            }></Route>
            <Footer/>
        </div>
    );
}

export default App;
