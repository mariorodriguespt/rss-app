import { put } from 'redux-saga/effects';
const Parser = require('rss-parser');


export const ADD_FEED = 'ADD_FEED';
export const addFeedActionCreator = ( name , feedUrl ) => (
    {
        id: Math.ceil( Math.random() * 10000 ),
        type : 'ADD_FEED',
        name,
        feedUrl
    }
);

export function * addFeed( action ) {
    try{
        const feedData = yield loadRssFeed( action.feedUrl );

        yield put({
            type : RSS_FEED_LOADED,
            payload : {
                feedId : action.id,
                feedNews : feedData.items
            }
        });

    }
    catch (exception){

    }
}

export const LOAD_RSS_FEED = 'LOAD_RSS_FEED';
export const loadRssFeed = ( url ) => {
    let parser = new Parser();
    return parser.parseURL( `https://cors-anywhere.herokuapp.com/${ url }` );
};

export const RSS_FEED_LOADED = 'RSS_FEED_LOADED';
export const RSS_FEED_LOADING_FAILED = 'RSS_FEED_LOADING_FAILED';

export const SELECT_NEWS_FEED    = 'SELECT_NEWS_FEED';
export const SET_SEARCH_TERMS    = 'SET_SEARCH_TERMS';
export const REMOVE_SEARCH_TERMS = 'REMOVE_SEARCH_TERMS';

