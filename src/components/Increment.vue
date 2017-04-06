<template>
  <div class="increment">
    <h1>Increment</h1>
    <button type="button" class="increment__button" @click="increment">Increment</button>
  </div>
</template>

<script>
  // import store
  import Store from '../store/store';
  // import action
  import { increment } from '../store/actions';

  // store
  export default {
    // store
    store: Store,

    // vuex, call action, action dispatch, store has something, then do it
    vuex: {
      actions: {
        increment: increment
      }
    }
  }
</script>
