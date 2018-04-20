import React from 'react';
import { createStore , combineReducers , applyMiddleware  } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import { feeds } from './reducers/feeds.js';
import application from './reducers/application.js';

import feed from './reducers/feed.js';

import AddTodo from './ui/feeds/AddFeed.jsx';
import NavBarFeedList from './ui/feeds/NavBarFeedList.jsx';

import NewsFeedList from './ui/feedNews/NewsFeed.jsx';

import mySaga from './actions/saga.js';

const appReducers = combineReducers({
    application,
    feeds
});

const sagaMiddleware = createSagaMiddleware();

const appStore = createStore( appReducers , applyMiddleware( sagaMiddleware , logger) );

sagaMiddleware.run( mySaga );

export default () => (
    <Provider store={ appStore }>
        <div>
            <div className="window">
                <header className="toolbar toolbar-header">
                    <h1 className="title">Header</h1>
                </header>

                <div className="window-content">
                    <div className="pane-group">
                        <div className="pane-sm sidebar">
                            <NavBarFeedList/>
                            <br/>
                            <hr/>
                            <br/>
                            <AddTodo/>
                        </div>
                        <div className="pane">
                            <NewsFeedList />
                        </div>
                        <div className="pane">...</div>
                    </div>
                </div>
                <footer className="toolbar toolbar-footer">
                    <h1 className="title">Footer</h1>
                </footer>
            </div>
        </div>
    </Provider>
);


