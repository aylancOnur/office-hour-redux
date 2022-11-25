import endpoints, {baseurl} from './endpoints';

export const post = (endpoint, body) => {
  return new Promise((resolve, reject) => {
    const method = 'POST';
    const headers = {...getHeaders(endpoint)};
    const t1 = new Date().getTime();

    console.log(
      `Request.${method} start : ` + baseurl + endpoint,
      body,
      headers,
    );

    fetch(baseurl + endpoint, {method, body, headers})
      .then(convertJson)
      .then(res => resolve(processResponse(endpoint, res, t1, method), headers))
      .catch(e => {
        console.log(
          `Request.${method} error : ` + endpoint.replace(baseurl, ''),
          e,
        );
        reject(e);
      });
  });
};

export const get = endpoint => {
  //  endpoint = /products
  return new Promise((resolve, reject) => {
    const method = 'GET';
    const headers = {...getHeaders(endpoint)};
    // getHeaders(endpoint)
    // {...getHeaders(endpoint, ...abc(), ...efg())}
    // rest operator
    // spread operator
    const t1 = new Date().getTime();

    console.log(
      `Request.${method} start : ` + baseurl + endpoint.replace(baseurl, ''),
      headers,
    );

    fetch(baseurl + endpoint, {
      method,
      headers,
    })
      .then(convertJson)
      // .then((data) => convertJson(data))
      .then(res => resolve(processResponse(endpoint, res, t1, method), headers))
      .catch(e => {
        console.log(
          `Request.${method} error : ` + endpoint.replace(baseurl, ''),
          e,
        );
        reject(e);
      });
  });
};

const convertJson = async res => {
  const data = res.status === 200 ? await res.json() : null;
  return {data, status: res.status, success: res.status === 200}; // =>  /api/products responseObj => /actiona/products {data,status,success}
};

const processResponse = (endpoint, res, t1, method) => {
  const t2 = new Date().getTime();
  const status = res.status;
  const success = res.success;
  const data = res
    ? res.data
      ? res.data.data
        ? res.data.data
        : res.data
      : null
    : null;

  console.log(
    `Request.${method} finish : ` + endpoint.replace(baseurl, ''),
    `[${status}]`,
    `${t2 - t1}ms`,
    data,
  );
  return {status, success, data};
};

const getHeaders = endpoint => {
  // endpoint = /products
  switch (endpoint) {
    case endpoints.login:
      // = enpoints.login = /auth/login
      return {'Content-Type': 'application/json'};

    default:
      return {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${global.token}`,
        // token = Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZyIsImlhdCI6MTY2OTMxNDA5NSwiZXhwIjoxNjY5MzE3Njk1fQ.ml9aKhTU04Rpy1g_83P7LpDCka8i2iZGTr4jDHrW4Zc
      };
  }
};
