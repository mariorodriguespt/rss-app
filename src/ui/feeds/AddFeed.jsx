import React from 'react';
import { connect } from 'react-redux';

import { addFeedActionCreator } from '../../actions/feed';

const addFeed = ({ dispatch }) => {
    let input;
    let url;

    return (
        <div>
            <input
                ref={ node => {
                    input = node;
                }}
                type="text"
                className="form-control"
                placeholder="Feed name"
            />
            <input
                ref={ node => {
                    url = node;
                }}
                type="text"
                className="form-control"
                placeholder="URL"
            />

            <button
                className="btn btn-default"
                onClick={ () => {
                    dispatch( addFeedActionCreator( input.value , url.value ) );
                    input.value = '';
                }}
            >Add Feed</button>
        </div>
    )
};

const AddFeed = connect()(addFeed);

export default AddFeed;
