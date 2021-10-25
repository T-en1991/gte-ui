<template>
  <div>
    <button @click="test">jsonp</button>
  </div>
</template>

<script>
export default {
  methods: {
    test() {
      const J = this.$gte.Jsonp;
      new J();
    }
  }
};
</script>
