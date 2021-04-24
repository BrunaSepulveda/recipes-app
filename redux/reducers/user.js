import { USER_UPDATE } from '../action';

const initialState = {
  firstName: "",
  lastName:"",
};

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case USER_UPDATE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
