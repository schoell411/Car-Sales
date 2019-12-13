const REMOVE_FEATURE = 'REMOVE_FEATURE';
const removeFeature = i => {
    return { type: REMOVE_FEATURE, payload: i };
};

const ADD_FEATURE = 'ADD_FEATURE';
const addFeature = i => {
    return { type: ADD_FEATURE, payload: i };
};

export { REMOVE_FEATURE };
export { removeFeature };
export { ADD_FEATURE };
export { addFeature };