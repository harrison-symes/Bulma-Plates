export default function birdsReducer (state = [], action) {
  switch(action.type) {
    case 'RECEIVE_BIRDS':
    console.log({action})
      return [...action.birds]
    case 'REMOVE_BIRD':
      return [...state].filter(bird => bird.id != action.id)
    default:
      return state
  }
}
