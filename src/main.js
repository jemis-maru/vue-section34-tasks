import Vue from 'vue';
import App from './App.vue';

Vue.directive('highlight', {
  bind(el, binding){
    // el.style.backgroundColor = 'grey';
    // el.style.backgroundColor = binding.value;
    // if(binding.arg == 'background'){
    //   el.style.backgroundColor = binding.value;
    // }
    // else{
    //   el.style.color = binding.value;
    // }

    let delay = 0;

    if(binding.modifiers['delay']){
      delay = 3000;
    }

    setTimeout(() => {
      if(binding.arg == 'background'){
        el.style.backgroundColor = binding.value;
      }
      else{
        el.style.color = binding.value;
      }
    }, delay);
  },
});

new Vue({
  el: '#app',
  render: h => h(App)
});