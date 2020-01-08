import React from 'react';

import Icon from '../assets/icon.svg';

export default function App() {
  return <div className="app">
    <div className="header">
      <Icon />
      <h1 className="title">React App</h1>
    </div>
    <div className="content">
      <p>To get started, edit <code>src/views/App.js</code>.</p>
    </div>
  </div>;
}
