export function addItem(title) {
  return {
    type: 'ADD_ITEM',
    title
  }
}

export function removeItem(id) {
  return {
    type: 'REMOVE_ITEM',
    id
  }
}
