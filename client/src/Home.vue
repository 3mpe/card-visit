
<template>
  <div class="container">
    <h1>Layout</h1>
    <a href="/#/list">Listeye git! <icon name="repo" width="2"></icon></a>
  </div>
</template>

<script>
  import Icon from 'vue-awesome/components/Icon';
  import 'vue-awesome/icons';

  console.log('log', Icon);

  export default {
    name: 'home',
    components: { Icon },
  };
</script>

<style lang="less">
  body {
    font-family: 'Titillium Web', serif;
  }
  .page {
    &-heading {
      background-color: #F9A139;
      color: #fff;
      padding: 32px 0px;
    }
    &-title {
      text-align: center;
      margin: 0px;
    }
  }
  .search {
    position: relative;
    i {
      position: absolute;
      top: 3px;
      left: 20px;
    }
    i::before {
      font-size: 24px;
    }
    input {
      padding-left: 50px;
      margin-top: 10px;
      margin-bottom: 10px;
      font-size: 20px;
    }
  }
</style>