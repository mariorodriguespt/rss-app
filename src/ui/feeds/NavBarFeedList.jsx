import FeedList from './FeedsList';
import { SELECT_NEWS_FEED } from '../../actions/feed.js';

import { connect } from 'react-redux';

const mapDispatchToProps = ( dispatch ) => (
    {
        onFeedClick: ( feedId ) => {
            dispatch({
                type: SELECT_NEWS_FEED,
                payload : {
                    feedId
                }
            })
        }
    }
);

const NavBarFeedList = connect(
    ( state ) => ({ feeds : state.feeds }),
    mapDispatchToProps
)(FeedList);

export default NavBarFeedList;
