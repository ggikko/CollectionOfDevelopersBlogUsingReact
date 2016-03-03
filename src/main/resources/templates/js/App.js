/**
 * Created by parkjihong on 16. 3. 2..
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './component/Greeting.js';

class App{
    static main(){
        ReactDOM.render(
            <Greeting/>, document.getElementById('app')
        );
    }
}

App.main();