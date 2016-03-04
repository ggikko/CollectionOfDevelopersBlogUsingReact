/**
 * Created by parkjihong on 16. 3. 4..
 */
import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

class Layout extends React.Component{

    constructor(){
        super();
        this.state = {name : "first"};
    }

    changeName(name){
        this.setState({name});
    }

    render(){
        //setTimeout(()=> {
        //    this.setState({value : 'second'});
        //}, 2000)

        //const title = "hello";
        return (
            <div>
                <Header changeName = {this.changeName.bind(this)} name = {this.state.name}/>
                <h1>content</h1>
                <Footer/>
            </div>
        );
    }
}

Layout.defaultProps = {name : "ggikko", title : "gogogogo"};


export default Layout;