import './style.sass'
import './normalize.scss'
import React from 'react'
import { render} from 'react-dom'

import ItemList from './components/ItemList.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    let a = 123
    console.log(a)

    if (process.env.NODE_ENV !== 'production') {
     console.log('Looks like we are in development mode!');
    }
  }
  render() {
    return (
      <div>
        <ItemList />
      </div>
    );
  }
}

render( <App /> , document.getElementById('app'));
