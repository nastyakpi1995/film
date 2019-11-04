export const saveState = (stateToSave) => {
  localStorage.setItem('films', JSON.stringify(stateToSave));
};

export const loadState = () => {
  return JSON.parse(localStorage.getItem('films'));
};