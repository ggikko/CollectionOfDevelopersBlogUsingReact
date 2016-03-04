/**
 * Created by parkjihong on 16. 3. 4..
 */
import React from 'react';
import Title from './header/Title.js';

class Header extends React.Component{

    handle(data){
        var value = data.target.value;
        this.props.changeName(value);
    }

    render(){

        console.log(this.props);
        return (
            <div>
                <header></header>
                <Title name = {this.props.name}/>
                <input value = {this.props.name} onChange={this.handle.bind(this)}/>
            </div>
        );
    }
}

export default Header;