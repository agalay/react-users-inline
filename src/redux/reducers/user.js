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
      case 'USER:REMOVE_ITEM':
        return {
          ...state,
          items: state.items.filter(item => item.id !== payload),
        };
      default:
        return state;
    }
  };