import React, { useReducer, useContext, createContext } from 'react';

type IProps = {
  children: any;
};

type IContext = {
  modeTheme: string;
  isDrawer: boolean;
  language: string;
  setModeTheme: (mode: string) => void;
  setDrawer: (isShow: boolean) => void;
  setLanguage: (language: string) => void;
};

type IAction = {
  type: string;
  payload: any;
};

const initialState = {
  modeTheme: process.env.REACT_APP_THEME,
  language: process.env.REACT_APP_LANGUAGE,
  isDrawer: false,
  setModeTheme: () => {},
  setDrawer: () => {},
  setLanguage: () => {},
};

const GlobalContext = createContext<IContext>(initialState);

const reducer = (state: IContext, { type, payload }: IAction) => {
  switch (type) {
    case 'SET_MODE_THEME': {
      return {
        ...state,
        modeTheme: payload,
      };
    }
    case 'SET_DRAWER': {
      return {
        ...state,
        isDrawer: payload,
      };
    }
    case 'SET_LANGUAGE': {
      return {
        ...state,
        language: payload,
      };
    }
    default:
      return state;
  }
};

const GlobalProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const _handleSetModeTheme = (mode: string) => {
    dispatch({
      type: 'SET_MODE_THEME',
      payload: mode,
    });
  };

  const _handleSetDrawer = (isShow: boolean) => {
    dispatch({
      type: 'SET_DRAWER',
      payload: isShow,
    });
  };

  const _handleChangeLanguage = (language: string) => {
    dispatch({
      type: 'SET_LANGUAGE',
      payload: language,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        setModeTheme: _handleSetModeTheme,
        setDrawer: _handleSetDrawer,
        setLanguage: _handleChangeLanguage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalContext, GlobalProvider, useGlobalContext };
