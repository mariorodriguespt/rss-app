import feed from './feed.js';
import { ADD_FEED , RSS_FEED_LOADED } from '../actions/feed';

const feeds = ( state = [] , action ) => {
    switch( action.type ){
        case ADD_FEED:
            console.log('action : ' , action );
            return [
                ...state,
                feed( null , action )
            ];


        case 'SHOW_FEED':
            console.log('Feed List reducer');
            return state;
        case RSS_FEED_LOADED:
            console.log('rss loaded state : ' , state );

            let newState = Object.assign( [] , state );

            console.log('newstate  ' , newState );

            newState = newState.map( feed => {
                if( feed.id !== action.payload.feedId ){
                    return feed;
                }
                else{
                    return Object.assign( {} , feed , {
                        feedNews : action.payload.feedNews
                    });
                }
            });

            return newState;

        default:
            return state;
    }
};

export { feeds };


