import { IAppActionTypes, ISetLoadingAction } from 'models/IAppState';

export const setLoading = (isLoading: boolean): ISetLoadingAction => ({
  type: IAppActionTypes.SET_LOADING,
  payload: isLoading,
});
