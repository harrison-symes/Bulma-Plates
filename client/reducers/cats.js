const initialCats = [
  {name: 'Harrison'},
  {name: 'Ross'},
  {name: 'Sarrah'}
]

function reducer (state = initialCats, action) {
  console.log({action})
  switch (action.type) {
    case 'ADD_CAT':
      return [...state, action.cat]
    case 'DELETE_CAT':
      return state.filter(cat => cat.name != action.name)
    default:
      return state
  }
}

export default reducer
