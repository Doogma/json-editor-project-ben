export const handleSaveFunction = (data, array, value) => {
  let newState = { ...data };
  let currentObject = newState;
  for (let i = 1; i < array.length; i++) {
    const key = array[i];
    if (i !== array.length - 1) {
      currentObject[key] = currentObject[key] instanceof Array ? [...currentObject[key]] : { ...currentObject[key] };
      currentObject = currentObject[key];
    } else {
      currentObject[key] = value;
    }
  }
  return newState;
};

export const handleDeleteFunction = (data, array) => {
  let newData = { ...data };
  let currentObject = newData;
  for (let i = 1; i < array.length; i++) {
    const key = array[i];
    if (i !== array.length - 1) {
      currentObject[key] = currentObject[key] instanceof Array ? [...currentObject[key]] : { ...currentObject[key] };
      currentObject = currentObject[key];
    } else {
      delete currentObject[key];
    }
  }
  return newData;
};

export const handleAddFunction = (data, payload) => {
  let newData = { ...data };
  let currentObject = newData;

  let array = payload.path;

  if (payload.type === 'OBJECT') {
    for (let i = 1; i < array.length; i++) {
      const key = array[i];
      if (i !== array.length - 1) {
        currentObject[key] = currentObject[key] instanceof Array ? [...currentObject[key]] : { ...currentObject[key] };
        currentObject = currentObject[key];
      } else {
        if (payload.newItemType === 'STRING') {
          currentObject[payload.name] = payload.value;
        }
        if (payload.newItemType === 'OBJECT') {
          currentObject[payload.name] = {};
        }
        if (payload.newItemType === 'ARRAY') {
          currentObject[payload.name] = [];
        }
      }
    }
  }

  if (payload.type === 'ARRAY') {
    let arrayName = array[array.length - 2];

    for (let i = 1; i < array.length - 1; i++) {
      const key = array[i];
      if (i !== array.length - 2) {
        currentObject[key] = currentObject[key] instanceof Array ? [...currentObject[key]] : { ...currentObject[key] };
        currentObject = currentObject[key];
      } else {
        if (payload.newItemType === 'STRING') {
          if (currentObject[arrayName].length === 0) {
            currentObject[arrayName] = [payload.value];
          } else {
            currentObject[arrayName] = [...currentObject[arrayName], payload.value];
          }
        }
        if (payload.newItemType === 'OBJECT') {
          currentObject[arrayName] = [...currentObject[arrayName], {}];
        }
        if (payload.newItemType === 'ARRAY') {
          currentObject[arrayName] = [...currentObject[arrayName], []];
        }
      }
    }
  }

  return newData;
};
