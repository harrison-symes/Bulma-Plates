import {addCatAction, deleteCatAction} from '../../client/actions/cats'

const fakeCat = {
  name: 'Ming'
}

test('add cat action does the right stuff', () => {
  //Arrange
  const expected = {
    type: 'ADD_CAT',
    cat: fakeCat
  }
  //Act
  const actual = addCatAction(fakeCat)
  //Assert
  expect(actual).toEqual(expected)
  expect(actual.cat).toBe(expected.cat)
})

test('delete cat action does the coolest damn thing', () => {
  //Arrange
  const expected = {
    type: 'DELETE_CAT',
    name: fakeCat.name
  }

  //Act
  const actual = deleteCatAction(fakeCat.name)

  //Assert
  expect(actual).toEqual(expected)
})
