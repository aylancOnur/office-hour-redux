import * as constants from '../constants';

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, actionObj) => {
  switch (actionObj.type) {
    case constants.INCREMENT: {
      // console.log('setIncrement reducer');

      return {...state, counter: state.counter + 1};
      // state.counter = state.counter + payload
    }

    case constants.DECREMENT: {
      return {...state, counter: state.counter - 1};
    }

    case constants.WITH_PAYLOAD: {
      return {...state, counter: state.counter + Number(actionObj.payload)};
    }

    default:
      return state;
  }
};

export {counterReducer};
