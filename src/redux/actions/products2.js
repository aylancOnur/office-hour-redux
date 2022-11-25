import * as constants from '../constants/index';
import * as products from '../../api/products';

export const requestAllProducts = () => async (dispatch, getState) => {
  const {data, status, success} = await products.getAllProducts();
  console.log('products action');
  if (success) {
    dispatch({
      type: constants.REQUEST_GET_ALL_PRODUCTS,
      payload: {products: data},
    });
  } else {
  }
};
