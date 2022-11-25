import endpoints from '../api/endpoints';
import {get, post} from './service';

export const getAllProducts = async () => {
  let responseObj = await get(endpoints.products);
  // let {data, status, success} = await get(endpoints.products);

  return responseObj;
  // return {data, status, success};
};

// export const getAllCategories = async () => {
//   let responseObj = await get(endpoints.categories);

//   return responseObj;
// };

// export const getAllFavorites = async () => {
//   let responseObj = await get(endpoints.favorites);

//   return responseObj;
// };
