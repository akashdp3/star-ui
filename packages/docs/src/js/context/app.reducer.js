const TYPES = {
  PAGE_LOADER: 'PAGE_LOADER',
  ERROR_MODAL: 'ERROR_MODAL'
};

const appStateReducer = (state = {}, action) => {
  switch (action.type) {
    case TYPES.PAGE_LOADER:
      return {
        ...state,
        showPageLoader: action.data || null
      };

    case TYPES.ERROR_MODAL:
      return {
        ...state,
        showErrorModal: action.data || null
      };

    default:
      return state;
  }
};

const appReducer = ({ appState }, action) => ({
  appState: appStateReducer(appState, action)
});

export { TYPES, appReducer };
