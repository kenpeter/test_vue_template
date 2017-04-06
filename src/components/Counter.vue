<template>
  <div class="counter">
    <h2>counter</h2>
    <div class="counter__value">{{ counter }}</div>
  </div>
</template>

<script>
  // import store, what is inside store??????
  // so we have store
  import Store from '../store/store';

  // getter, get a func
  import { getCount } from '../store/getters';

  // this component, exports default
  export default {
    // i have a store
    store: Store,

    // vuex, inside getters
    // get counter, counter is a func
    vuex: {
      getters: {
        counter: getCount
      }
    }
  }
</script>
