
const initialState = {
  dataHome: 'dados default home'
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CLICK_UPDATE_VALUE':
        return {
          ...state,
          dataHome: action.data
        };
      default:
        return state;
    }
  };

  export default homeReducer;
