import React from 'react';

const NewsItem = ({ title , contentSnippet, onClick }) => (
    <li className="list-group-item" onClick={ onClick }>
            <div className="media-body">
                <strong>{ title }</strong>
                <p>{ contentSnippet }</p>
            </div>
    </li>
);

export default NewsItem;
