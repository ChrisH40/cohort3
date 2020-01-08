import React from 'react';
import { AppContext } from '../app-context.js';
import './settings.css';

const ChangeSettingsDisplay = () => {

    return (      
        <AppContext.Consumer>
            {({state, theme, handleSettingsChange}) => (
                <div className="settings-wrapper" style={{ backgroundColor: theme[state.themeValue].background, color: theme[state.themeValue].color}}>
                    <div className="settings-dropdown-wrapper">
                        <label className="settings-background-text">Change Theme:</label>
                        <select
                            className="settings-backround-dropdown"
                            onChange={(event) => handleSettingsChange(event)}
                            value={state.themeValue}
                        >
                            <option value="default">Default</option>
                            <option value="dark">Dark</option>
                        </select>
                    </div>
                </div>
            )}
        </AppContext.Consumer>
    )
}

export default ChangeSettingsDisplay;