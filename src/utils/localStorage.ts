export const saveLocalStorageItems = (
  id: string,
  items: unknown[] | unknown
) => {
  try {
    const serializedState = JSON.stringify(items);
    localStorage.setItem(id, serializedState);
  } catch (error) {
    console.error("Could not save state to localStorage", error);
  }
};

export const getLocalStorageItems = (id: string) => {
  try {
    const serializedState = localStorage.getItem(id);
    if (serializedState === null) {
      return null;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Could not load state from localStorage", error);
    return null;
  }
};
