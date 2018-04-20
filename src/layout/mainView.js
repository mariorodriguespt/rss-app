import React from 'react';

export default class MainView extends React.Component{
    render(){
        return(
            <div>
                <div className="window">
                    <header class="toolbar toolbar-header">
                        <h1 class="title">Header</h1>
                    </header>

                    <div className="window-content">
                        <div className="pane-group">
                            <div className="pane-sm sidebar">

                            </div>
                            <div className="pane">
                                ...
                            </div>
                            <div className="pane">...</div>
                        </div>
                    </div>
                    <footer class="toolbar toolbar-footer">
                        <h1 class="title">Footer</h1>
                    </footer>
                </div>
            </div>
        )
    }
}
