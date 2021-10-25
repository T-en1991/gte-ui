<template>
  <div class="home">
   home页面
    <button @click="toFrame">toFrame</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "index",
  methods:{
    toFrame(){
      (this as any ).$router.push("/frame/gtecard");
    }
  }
}
</script>
