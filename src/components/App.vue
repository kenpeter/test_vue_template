<template>
  <div class="app">
    <h1>test me</h1>
    <counter-component></counter-component>

    <increment-component></increment-component>
  </div>
</template>

<script>
  // that is how you define component in vue
  // have template and script
  // app has counter component and increment component

  // count stuff
  import CounterComponent from './Counter.vue'

  // increase stuff
  import IncrementComponent from './Increment.vue'

  // inject 2 comoponents
  export default {
    components: {
      CounterComponent,
      IncrementComponent
    }
  }
</script>
