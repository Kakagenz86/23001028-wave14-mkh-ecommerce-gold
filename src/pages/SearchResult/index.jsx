import React from 'react'
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SearchSection from '../../components/SearchSection';
import ListCar from '../../components/List Car';

const SearchResult = () => {
    return ( 
        <div>
            <Navigation/>
            <SearchSection/>
            {/* <ListCar/> */}
            <Footer/>
        </div>
    );
}

export default SearchResult;