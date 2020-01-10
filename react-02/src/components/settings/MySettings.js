import React from 'react';
import { AppContext } from '../app-context.js';
import './settings.css';

const ChangeSettingsDisplay = () => {
    const context = React.useContext(AppContext);

    return (
        <div className="settings-wrapper" style={{ backgroundColor: context.theme[context.state.themeValue].background, color: context.theme[context.state.themeValue].color }}>
            <div className="settings-dropdown-wrapper">
                <label className="settings-background-text">Change Theme:</label>
                <select
                    className="settings-backround-dropdown"
                    onChange={(event) => context.handleOnChange(event)}
                    name="themeValue"
                    value={context.state.themeValue}
                >
                    <option value="default">Default</option>
                    <option value="dark">Dark</option>
                </select>
            </div>
        </div>

    )
}

export default ChangeSettingsDisplay;