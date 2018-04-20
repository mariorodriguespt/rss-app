import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './App';
import registerServiceWorker from './registerServiceWorker';
import MainView from "./layout/mainView";
import RssApp from './RssApp';


ReactDOM.render(<RssApp/>, document.getElementById('root'));
registerServiceWorker();
