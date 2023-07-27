import React, {Suspense} from "react";
import {Routes, Route} from "react-router-dom"
import Home from "./components/Home";
// import About from "./components/About";

import { Navbar } from "./components/Navbar";
import { OrderSummary } from "./components/OrderSummary";
import { NoMatch } from "./components/NoMatch";
import { Products } from "./components/Products";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { NewProducts } from "./components/NewProducts";
import { Users } from "./components/Users";
import UserDetail from "./components/UserDetail";
import { Admin } from "./components/Admin";
import About from "./components/About";
import Profile from "./components/Profile";
// import LazyAbout = React.lazy(() => import('./components/About'));

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        {/* <Route path="about" element={
          <React.Suspense fallback='loading...'>
            <LazyAbout/>
          </React.Suspense>
          
        }/> */}
        <Route path="order-summary" element={<OrderSummary/>}/>
        <Route path="products" element={<Products/>}>
          <Route index element={<FeaturedProducts/>}/>
          <Route path="featured" element={<FeaturedProducts/>}/>
          <Route path="new" element={<NewProducts/>}/>  
        </Route>
        <Route path="users" element={<Users/>}>
          <Route path=":userId" element={<UserDetail/>}/>
          <Route path="admin" element={<Admin/>}></Route>
        </Route>
        <Route path="profile" element={<Profile/>}/>
        <Route path= "*" element={<NoMatch/>}/>
      </Routes>    
    </>
  );
}

export default App;
