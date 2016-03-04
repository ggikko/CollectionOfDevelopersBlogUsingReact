/**
 * Created by parkjihong on 16. 3. 4..
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './component/Layout.js';

class App{
    static main(){
        ReactDOM.render(
            <Layout/>,
            document.getElementById('app')
        );
    }
}

App.main();