<template>
  <div class="VueToNuxtLogo">
反反复复付付付付
  </div>
</template>
<script>
  export default {
    validate ({ params }) {
    // 必须是number类型
    return /^\d+$/.test(params.id)
    }
  }
</script>
