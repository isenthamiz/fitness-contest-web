export const openDrawer = () => {
  return (dispatch) => {
    dispatch({
      type: "DRAWER_OPEN",
      payload: true,
    });
  };
};

export const closeDrawer = () => {
  return (dispatch) => {
    dispatch({
      type: "DRAWER_CLOSE",
      payload: false,
    });
  };
};
