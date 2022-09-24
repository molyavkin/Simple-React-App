import React from 'react';
import './Main.css';
import articles from '../Data/articles.json'

function Main(props) {
    return (
        <div className='Main'>
            {articles.map(item=>
            <section className='TextColor'>
            <h2 className='TextHeader'>{item.title}</h2>
            <div className='TextBody'>{item.body}</div>
            </section>)}
        </div>
    );
}

export default Main;