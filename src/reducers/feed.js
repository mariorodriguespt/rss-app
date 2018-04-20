import { ADD_FEED , LOAD_RSS_FEED } from '../actions/feed.js';
import {RSS_FEED_LOADED, loadRssFeed, RSS_FEED_LOADING_FAILED} from "../actions/feed";

const feed = ( state = {} , action ) => {
    console.log('state from feed : ' , state );

    switch( action.type ){
        case ADD_FEED:
            return {

                id: action.id,
                name : action.name,
                icon : '',
                feedUrl : action.url,

                isFetching : true
            };
        case LOAD_RSS_FEED:
            console.log('LOAD_RSS_FEED called');
            return state;
        case RSS_FEED_LOADED:
            console.log('RSS_FEED_LOADED called with data ' , action );
            console.log('store state : ' , state );

            return state;
        case RSS_FEED_LOADING_FAILED:
            alert('RSS Feed failed');
            return state;
        default:
            return state;
    }
};


export default feed;
