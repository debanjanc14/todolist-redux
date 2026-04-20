export const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("todos");
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (e) {
    console.log("could not load from localstorage", e);
    return [];
  }
};

export const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("todos", serializedState);
  } catch (e) {
    console.error("Could not save to local storage", e);
  }
};
