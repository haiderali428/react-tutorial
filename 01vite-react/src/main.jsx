import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

  const anotherUser = "Mustafa";
const reactElement= React.createElement(
  'a',
  {href: 'http://google.com', target: '_blank'},
  'click me to open google',

  // after making tree then come all injected variables
  anotherUser


);

const headerP =React.createElement(
  'p',
  {
    className: 'header', 
    style: {
      fontSize: '50px', 
      fontWeight: '600', 
      color: 'red',
      }, 
  },
  'This is a header'
)

createRoot(document.getElementById('root')).render(
  // <App/>
  // reactElement
  headerP
  );
  createRoot(document.getElementById('second-para')).render(
    // <App/>
    reactElement
    // headerP
    );