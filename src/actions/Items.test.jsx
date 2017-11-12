import * as actions from './Items'
import * as types from '../constants/ActionTypes'

describe('actions', () => {

  it('should create an action to add an item', () => {
    const title = 'Finish docs'
    const expectedAction = {
      type: types.ADD_ITEM,
      title
    }
    expect(actions.addItem(title)).toEqual(expectedAction)
  })

  it('should create an action to remove an item', () => {
    const id = 123
    const expectedAction = {
      type: types.REMOVE_ITEM,
      id
    }
    expect(actions.removeItem(id)).toEqual(expectedAction)
  })

})
