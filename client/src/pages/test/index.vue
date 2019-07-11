<template>
  <div>
    测试require.context();<button @click="getRequire">获取依赖</button>
    <p ref="context">
    </p>
  </div>
</template>

<style>
</style>

<script>
import modules from './files';
export default {
    data: function() {
        return {
            
        }
    },
    methods: {
      getRequire() {
        let Afun = modules[1].default;
        this.$refs.context.innerHTML = Afun();

      } 
    }
}
</script>
