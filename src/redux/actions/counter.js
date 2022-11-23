import * as constants from '../constants/index';

export const setIncrement = () => {
  // console.log('setIncrement action');
  return {
    type: constants.INCREMENT,
  };
};

export const setDecrement = () => {
  // console.log('setDecrement action');
  return {
    type: constants.DECREMENT,
  };
};

export const setWithPayload = payload => {
  // console.log('setWithPayload action');
  return {
    type: constants.WITH_PAYLOAD,
    payload,
  };
};
