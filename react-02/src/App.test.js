import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Game from "./components/tic-tac-toe/MyGame.js";
import Accounts from "./components/accounts/MyAccounts.js";
import Cities from "./components/cities/MyCities.js";
import LinkedListDisplay from "./components/linked-list/MyLinkedList.js";

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Tic-Tac-Toe renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Game />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Accounts renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Accounts />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Cities renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cities />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('LinkedList renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LinkedListDisplay />, div);
  ReactDOM.unmountComponentAtNode(div);
});

