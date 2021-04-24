import { TYPES } from './app.reducer';

function showPageLoader(data) {
  return {
    type: TYPES.PAGE_LOADER,
    data
  };
}

function showErrorModal(data) {
  return {
    type: TYPES.ERROR_MODAL,
    data
  };
}

export { showPageLoader, showErrorModal };
