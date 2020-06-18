export const WindowOrGlobal = (property) => () => {
  let func;
  if (window) func = window[property];
  else func = global[property];
  return func;
};

export const Notify = WindowOrGlobal('notify');
export const Storage = WindowOrGlobal('storage');
export const Persistor = WindowOrGlobal('persistor');
