import './style.sass'
import './normalize.scss'
import Header from './components/header/header.jsx'
import React from 'react'
import { render} from 'react-dom'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
      </div>
    );
  }
}

render( <App /> , document.getElementById('app'));