export enum IAppActionTypes {
  SET_LOADING = 'APP/SET_LOADING',
}

export type IAppState = {
  isLoading: boolean;
};

export interface ISetLoadingAction {
  type: typeof IAppActionTypes.SET_LOADING;
  payload: boolean;
}

export type IAppActionCreator = ISetLoadingAction;
