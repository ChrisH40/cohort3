import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Game from "./components/tic-tac-toe/MyGame.js";
import Accounts from "./components/accounts/MyAccounts.js";
import Cities from "./components/cities/MyCities.js";
import LinkedListDisplay from "./components/linked-list/MyLinkedList.js";
import FifoLifoListDisplay from "./components/fifo-lifo-list/MyFifoLifoList.js";
import ChangeSettingsDisplay from './components/settings/MySettings.js';
import { ContextProvider, AppContext } from './components/app-context.js';

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContextProvider><AppContext.Consumer><App /></AppContext.Consumer></ContextProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Tic-Tac-Toe renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContextProvider><AppContext.Consumer><Game /></AppContext.Consumer></ContextProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Accounts renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContextProvider><AppContext.Consumer><Accounts /></AppContext.Consumer></ContextProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Cities renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContextProvider><AppContext.Consumer><Cities /></AppContext.Consumer></ContextProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('LinkedList renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContextProvider><AppContext.Consumer><LinkedListDisplay /></AppContext.Consumer></ContextProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('FifoLifoList renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContextProvider><AppContext.Consumer><FifoLifoListDisplay /></AppContext.Consumer></ContextProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('ChangeSettingsDisplay renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContextProvider><AppContext.Consumer><ChangeSettingsDisplay /></AppContext.Consumer></ContextProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

