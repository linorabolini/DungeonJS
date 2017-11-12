import React from 'react'

class ItemList extends React.Component {
  constructor(props) {
    super(props)
    console.log("Item List Constructor Executed")
  }
  render() {
    return (
      <ul>
        <li>Demo Item</li>
      </ul>
    )
  }
}

export default ItemList
