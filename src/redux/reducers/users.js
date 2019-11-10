const initialState = {
    items: null,
  };

  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case 'USER:SET_DATA':
        return {
          ...state,
          items: payload,
        };
      default:
        return state;
    }
  };