const REMOVE_FEATURE = 'REMOVE_FEATURE';
const removeFeature = item => {
  return  { type: REMOVE_FEATURE, payload : item }
}

const ADD_FEATURE = 'ADD_FEATURE';
const addFeature = item => {
  return { type: ADD_FEATURE, payload : item }
}

export { REMOVE_FEATURE };
export { removeFeature };
export { ADD_FEATURE };
export { addFeature };