/**Debounce */
function debounce(fn, ms) {
  let id;
  return (args) => {
    clearTimeout(id);
    id = setTimeout(() => {
      fn.call(this, args);
    }, ms);
  };
}

export { debounce };
