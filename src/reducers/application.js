import { SELECT_NEWS_FEED , SET_SEARCH_TERMS , REMOVE_SEARCH_TERMS } from '../actions/feed';

const application = ( state  = {} , action ) => {
    switch ( action.type ){
        case SELECT_NEWS_FEED:
            return Object.assign( {} , state , {
                activeNewsFeed : action.payload.feedId
            });
        case SET_SEARCH_TERMS:
            return state;
        case REMOVE_SEARCH_TERMS:
            return state;
        default:
            return state
    }
};

export default application;