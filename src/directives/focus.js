const focus = {
  created(el) {
    console.log('created');
  },
  beforeMount(e) {
    console.log('beforeMount');
  },
  mounted(el, binding) {
    console.log('mounted');
    console.log('binding:', binding);
    el.focus();
  },
  beforeUpdate(el) {
    console.log('beforeUpdate');
  },
};

export default focus;
