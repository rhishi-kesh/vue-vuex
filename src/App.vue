<template>
  <div id="app">
      <compBookListOne></compBookListOne>
      <compBookListTwo></compBookListTwo>
  </div>
</template>

<script>
  import compBookListOne from "./components/BookListOne"
  import compBookListTwo from "./components/BookListTwo"
  export default {
    components:{
      compBookListOne,
      compBookListTwo
    }
  }
</script>
