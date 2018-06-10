const handleResponse = promise => (
  promise
    .then((res) => {
      const jsonPromise = res.json();
      if (res.ok) {
        return jsonPromise;
      }

      return jsonPromise.then(jsonResponse => Promise.reject(jsonResponse));
    })
    .then((res) => {
      const { errors = [] } = res;
      if (errors.length > 0) {
        return Promise.reject(res);
      }
      return Promise.resolve(res);
    })
);

export default handleResponse;
