import React from 'react';
import './Sidebar.css';
import articles from '../Data/articles.json';

function Sidebar(props) {
    return (
        <div className='Sidebar'>
            <nav>
                <h2 className='TextColor'>ссылки:</h2>
                <ul>
                    {articles.map(item=>
                        <li>
                            <div className='LinksSpace'></div>
                            <a href={item.href}>{item.title}</a>
                            <div className='Space'></div>
                        </li>)}
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;