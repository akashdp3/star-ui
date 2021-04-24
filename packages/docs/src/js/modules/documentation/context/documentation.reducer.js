const TYPES = {
  DUMMY_TYPE: "DUMMY_TYPE"
};

const documentationReducer = (state = {}, action) => {
  switch (action.type) {
    case TYPES.DUMMY_TYPE:
      return {
        ...state,
        dummyData: action.data
      };

    default:
      return state;
  }
};

export { TYPES, documentationReducer };
