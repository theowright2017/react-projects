import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './Components/NavBar.js';

import Header from './Components/Header.js';
import BlogPost from './Components/BlogPost.js'
import Pagination from './Components/Pagination.js';

import SearchWidget from './Components/SearchWidget.js';
import CategoriesWidget from './Components/CategoriesWidget.js';
import SideWidget from './Components/SideWidget.js';

import Footer from './Components/Footer.js';





class App extends Component {
  render() {
  return (
    <div className="App">


      <NavBar />


        <div className="container">

              <div className="row">

                    { /* Blog Entries Column */ }
                      <div className="col-md-8">
                        <Header />
                        <BlogPost />
                        <Pagination />
                      </div>

                    {  /* Sidebar Widgets Column */}
                      <div className="col-md-4">
                        <SearchWidget />
                        <CategoriesWidget />
                        <SideWidget />
                      </div>

                { /* end of row */ }
                </div>

        { /* end of container */ }
        </div>


        {  /* footer */}
        <Footer />

    </div>
  );
}
}

export default App;
