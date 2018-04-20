import React from 'react';

import NewsItem from './NewsItem.jsx';
import { connect } from 'react-redux';

let NewsFeedList = ( { news = [] , onNewsItemClick } ) => (
    <ul className="list-group">
        <li className="list-group-header">
            <input className="form-control" type="text" placeholder="Search for someone" />
        </li>
        { console.log('props : ' , news )}
        { news.map( newsItem => (
            <NewsItem
                key={ newsItem.id }
                { ...newsItem }
                onClick={ onNewsItemClick }
            />
        ) )}
    </ul>
);


const mapDispatchToProps = ( dispatch ) => (
    {
        onNewsItemClick: ( newsId ) => {
            dispatch({
                id : newsId,
                type: 'OPEN_NEWS_ITEM'
            });
        }
    }
);

NewsFeedList = connect(
    ( state ) => {
        const targetFeedId  = state.application.activeNewsFeed,
              targetFeed    = state.feeds.find( feed => feed.id === targetFeedId );

        return {
             news : targetFeed ? targetFeed.feedNews : []
        }
    },
    mapDispatchToProps
)(NewsFeedList);

export default NewsFeedList;
