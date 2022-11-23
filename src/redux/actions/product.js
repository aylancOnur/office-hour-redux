import * as constants from '../constants/index';
import * as products from '../../api/products';

// export const getProducts = () => async dispatch => {
//   let products = [];

//   try {
//     let data = await fetch('https://dummyjson.com/products');

//     products = await data.json();
//     // console.log('PRODUCTS =>', products);
//   } catch (error) {
//     console.log(error);
//   }

//   dispatch({
//     type: constants.GET_PRODUCTS,
//     payload: {products},
//   });
// };

export const requestAllProducts = () => async (dispatch, getState) => {
  const {data, status, success} = await products.getAllProducts();

  if (success) {
    dispatch({
      type: constants.REQUEST_GET_ALL_PRODUCTS,
      payload: {products: data},
    });
  } else {
  }
};
