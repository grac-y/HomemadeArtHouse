import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from "./Layout";
import Home from "./pages/index";
import About from "./pages/about";
import Explore from "./pages/explore";
import Detail from "./pages/detail";
import Bookmark from "./pages/bookmark"
import { useState } from 'react';
import { useEffect } from 'react';
import products from './designs';

const App = () => {
  const [diy, setDiy] = useState([]);

  useEffect(() => {
    const storedDiy = JSON.parse(localStorage.getItem('diy'));
    if(storedDiy){
      setDiy(storedDiy);
    }
  },[]);
  useEffect(()=>{
    localStorage.setItem('diy', JSON.stringify((diy)));
  }, [diy]);


  const saveItem = (Id) => {
    let index = products.findIndex(x=>x.Id === Id)
    setDiy((old) => {
      return [...old,products[index]];
    })
  }
  const unSaveItem = (Id) => {
    let index = diy.findIndex(x=>x.Id === Id)
    products[index].save = "Save";
    setDiy((old) => {
        const updatedItems = [...old];
        updatedItems.splice(index, 1);
        return updatedItems;
    });
  }

  return (
    <>
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='explore' element={<Explore product = {products} bookmarked={saveItem} unBookmark={unSaveItem} localItems = {diy}/>} />
                <Route path='detail/:Id/:name' element={<Detail bookmarked={saveItem} unBookmark={unSaveItem} localItems = {diy} />} />
                <Route path='bookmark' element={<Bookmark item = {diy} bookmarked={saveItem} unBookmark={unSaveItem} localItems = {diy}/>} />
              </Route>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
