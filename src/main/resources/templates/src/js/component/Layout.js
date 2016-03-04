/**
 * Created by parkjihong on 16. 3. 4..
 */
import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

class Layout extends React.Component{
    constructor(){
        super();
        this.state = {value : 'first'};
    }

    render(){
        setTimeout(()=> {
            this.setState({value : 'second'});
        }, 2000)
        const name = "JiHong Park";
        return (
            <div>
                {this.state.value}
                <Header/>
                <h1>content</h1>
                <Footer/>
            </div>
        );
    }
}

export default Layout;