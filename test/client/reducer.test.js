import catsReducer, {initialCats} from '../../client/reducers/cats'

test('inital state of cats', () => {
  //Arrange
  const expected = initialCats
  //Act
  const actual = catsReducer(undefined, {})
  //Assert
  expect(actual).toEqual(expected)
})


test('add cat case', () => {
  //Arrange
  const fakeCat = {
    name: 'Kelly'
  }
  const action = {
    type: 'ADD_CAT',
    cat: fakeCat
  }
  const expected = [fakeCat]

  //Act
  const actual = catsReducer([], action)
  //Assert
  expect(actual).toEqual(expected)

})

test('add cat case', () => {
  //Arrange
  const fakeCat = {
    name: 'Kelly'
  }
  const action = {
    type: 'ADD_CAT',
    cat: fakeCat
  }

  const expected = [...initialCats, fakeCat]

  //Act
  const actual = catsReducer(undefined, action)
  //Assert
  expect(actual).toEqual(expected)

})

test('delete cat case', () => {
  //Arrange
  const action = {
    type: 'DELETE_CAT',
    name: 'Harrison'
  }

  const expected = initialCats.filter(cat => cat.name != action.name)
  //Act
  const actual = catsReducer(undefined, action)

  //Assert
  expect(actual).toEqual(expected)
})
