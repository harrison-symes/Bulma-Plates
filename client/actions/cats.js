export function addCatAction (cat) {
  return {
    type: 'ADD_CAT',
    cat
  }
}

export function deleteCatAction (name) {
  return {
    type: 'DELETE_CAT',
    name
  }
}


// const addCatAction = cat => ({
//   type: 'ADD_CAT',
//   cat
// })
//
// const deleteAllCats = () => ({
//   type: 'DELETE_ALL_CATS'
// })
