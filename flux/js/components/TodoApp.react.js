import React from 'react';
import Header from './Header.react';
import Footer from './Footer.react';
import MainSection from './MainSection.react';


var TodoApp = React.createClass({
    render: function(){
        return (
            <div>
            <Header />
            <MainSection />
            <Footer />
            </div>
        );
    } 
});

module.exports = TodoApp;
