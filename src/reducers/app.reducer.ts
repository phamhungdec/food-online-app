import { IAppActionTypes, IAppActionCreator, IAppState } from 'models/IAppState';

const initialState: IAppState = {
  isLoading: false,
};

const reducer = (state = initialState, { type, payload }: IAppActionCreator) => {
  switch (type) {
    case IAppActionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    default:
      return state;
  }
};

export default reducer;
