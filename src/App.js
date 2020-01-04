import React from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import Menu from './components/menu/Menu';
import NavBar from './components/navBar/NavBar.jsx';
import HomePage from './components/homePage/HomePage.jsx';
import Footer from './components/footer/Footer';
import {Route} from "react-router-dom";
import BlogsContainer from "./components/blogs/BlogsContainer";
import CasesContainer from "./components/cases/CasesContainer";
import ProfilePageContainer from './components/profilePage/profilePageContainer';
import HeaderContainer from "./components/header/HeaderContainer";

const App = () => {

    return (
        <div className='body'>
            <HeaderContainer/>
            <Menu/>
            <div className='navBar'>
                <NavBar/>
            </div>
            <article className='appContent'>
                <div>
                    <Route path='/homepage' render={ () => <HomePage/>}/>
                    <Route  path='/blog' render={ () => <BlogsContainer />}/>
                    <Route  path='/cases' render={ () => <CasesContainer />}/>
                    <Route  path='/profile/:userId?' render={ () => <ProfilePageContainer />}/>
                </div>
            </article>
            <Footer/>
        </div>
            );
}

export default App;
