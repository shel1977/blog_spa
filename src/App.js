import React from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import Menu from './components/menu/Menu';
import NavBar from './components/navBar/NavBar.jsx';
import HomePage from './components/homePage/HomePage.jsx';
import Footer from './components/footer/Footer';
import Blogs from './components/blogs/Blogs.jsx';
import {Route} from "react-router-dom";


const App = (props) => {
    return (
        <div className='body'>
            <Header/>
            <Menu/>
            <div className='navBar'>
                <NavBar/>
            </div>
            <article className='appContent'>
                <div>
                    <Route path='/homepage' render={ () => <HomePage/>}/>
                    <Route  path='/blog' render={ () => <Blogs postPage={props.state.postPage}
                                                               dispatch={props.dispatch}/>}/>
                </div>
            </article>
            <Footer/>
        </div>
            );
}

export default App;
