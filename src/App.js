import { useState, useEffect } from 'react';
import './App.css';
import { DateTime } from './DateTime';


function App() {

  const [title, setTitle] = useState('LOADING...');
  const [subTitle, setSubTitle] = useState('');

  useEffect(() => {
    const { location } = window;
    if (location) {
      const { host } = location;
      if (host.length > 1) {
        const [subdomain, ...hostname] = host.split('.');
        const [user] = subdomain.split('-');
        setTimeout(() => {
          setTitle(user);
        }, 2000)
        setTimeout(() => {
          setSubTitle(hostname.join('.'));
        }, 3000)
      }
    }
  })


  return (
    <div className="App">
      <header className="App-header">
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
        <DateTime date={new Date()} />
        <div className="circle"></div>
      </header>
    </div>
  );
}

export default App;
