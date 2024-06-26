import { SET_USERNAME } from './action'

const initialState = {
  username: '',
}

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      }
    default:
      return state
  }
}

export default rootReducer
