export const notification = (title, { type, body } = {}) => {
  let func;
  if (window) func = window.notify;
  else func = global.notify;
  func(title, { type, body });
};
