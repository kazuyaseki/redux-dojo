import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { combineReducers } from 'redux';

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

//const { createStore } = Redux;

//Storeをスクラッチで作る
const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    
    //unsubscribe
    return () => {
      listeners = listeners.filter(l => l !== listener);
    }
  }

  //初期値
  dispatch({});

  return { getState, dispatch, subscribe };
}

const store = createStore(counter);

const Counter = ({
  value,
  onInclement,
  onDeclement
}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onInclement}>+</button>
    <button onClick={onDeclement}>-</button>
  </div>
);

const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onInclement={() =>
        store.dispatch({
          type: 'INCREMENT'
        })
      }
      onDeclement={() =>
        store.dispatch({
          type: 'DECREMENT'
        })
      }
    />,
    document.getElementById('root')
  );
};

store.subscribe(render); //subscribeで変更を検知するようになる
window.onload = () => {
  render();
}