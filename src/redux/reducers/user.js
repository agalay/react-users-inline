const initialState = {
  items: null,
  data: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "USER:SET_USER":
      return {
        ...state,
        items: payload
      };
    case "USER:REMOVE_USER":
      return {
        ...state,
        items: state.items.filter(item => item.id !== payload)
      };
    case "USER:EDIT_USER":
      return {
        ...state,
        items: state.items.map(item =>
          item.id === payload.data.id ? payload.data : item
        )
      };
    default:
      return state;
  }
};
