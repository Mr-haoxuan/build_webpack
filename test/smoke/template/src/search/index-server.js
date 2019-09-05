'use strict'

import React from 'react';
import './search.css';
import "../../common";
import image from './images/10.jpg';
import './search.less'
import largrNumber from 'webpack_syudy3.4'


class Search extends React.Component{

    constructor(){
        super(...arguments);

        this.state = {
            Text:null
        }
    }

    loadComponent(){
        import('./test.js').then((Text)=>{
            this.setState({
                Text:Text.default
            })
        })
    }

    render(){
        const { Text } = this.state;
        const addResult = largrNumber("999","1") 
        return <div className="search-text">
            {
                Text?<Text/>:null
            }
            {addResult}
            Search Text一二三五六七热更新，新新新
            <img src={ image } onClick = {this.loadComponent.bind(this)}></img>
        </div>;
    }
}

module.exports = Search;