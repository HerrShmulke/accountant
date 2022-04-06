/** @type {Map<string, Set<(unknown[]) => unknown>>} */
const hooks = new Map();

function initHook(name) {
  if (!hooks.has(name)) {
    hooks.set(name, new Set());
  }
}

export function registerHook(name) {
  initHook(name);

  return function (...args) {
    hooks.get(name).forEach((cb) => cb(...args));
  };
}

export function setHook(name, cb) {
  initHook(name);

  hooks.get(name).add(cb);
}
