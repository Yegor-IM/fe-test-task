import React from 'react';
import { hot } from 'react-hot-loader';

const App: React.FC = () => {
  return <div>Write your code here...</div>;
};

declare const module: Record<string, unknown>;

export default hot(module)(App);
