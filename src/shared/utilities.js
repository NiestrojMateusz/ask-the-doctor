import _ from "lodash"

export const getData = (collection, key, id) => {
  let searchedObj = {}
  searchedObj[key] = id
  let data = _.find(collection, searchedObj);
  return data ? data : null
}

export const generateRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const handleQueryParams = (query) => {
  const queryParams = {};

  for (let param of query.entries()) {
    queryParams[param[0]] = param[1]
  }
  return queryParams;
}