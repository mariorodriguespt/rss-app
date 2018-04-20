import React from 'react';

const Feed = ({ icon , name , onClick , isLoading }) => (
    <span className="nav-group-item" onClick={ onClick }>
        <span className="icon icon-folder"/>
        { name }
        { isLoading && <span className="icon icon-right icon-arrows-ccw" /> }
    </span>
);

export default Feed;
