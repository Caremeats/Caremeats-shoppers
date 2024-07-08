import React from 'react';
import Header from './Header-main-page/Header.jsx';
import Main from './Main-page/Main.jsx';
import Products from './Products-page/Products.jsx';
import {slides} from './data/slideshow.json'

function App () {

  return (
    <>

    <div> <Header/></div>

    <div> <Main data={slides}/> </div>

    <div> <Products/></div>


    </>

  );
};



export default App;
