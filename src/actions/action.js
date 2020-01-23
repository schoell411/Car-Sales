const removeFeature = item => {
  return  { type: 'REMOVE_FEATURE', payload : item }
}
const addFeature = item => {
  return { type: 'ADD_FEATURE', payload : item }
}
export { removeFeature };
export { addFeature };