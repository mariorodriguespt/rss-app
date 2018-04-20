import React from 'react';
import Feed from './Feed.jsx';

const FeedList = ( { feeds , onFeedClick } ) => (
    <nav className="nav-group">
        <h5 className="nav-group-title">RSS Feeds</h5>

        { feeds.map( feed =>
            <Feed
                key={ feed.id }
                {...feed}
                onClick={ onFeedClick.bind( this , feed.id ) }
            />
        )}
    </nav>
);

export default FeedList;
