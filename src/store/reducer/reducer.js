const defaultState = {
  open: false,
};

const Reducer = (state = false, action) => {
  switch (action.type) {
    case "DRAWER_OPEN":
      state = true;
      return state;
    case "DRAWER_CLOSE":
      state = false;
      return state;
    default:
      return state;
  }
};

export default Reducer;
