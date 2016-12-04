<template>
<div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
    <div class="item item-select">
      <img class="item-image" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSQ0OVnO8F1ApFM9fHi6SgKOUN_t8DmM1hQhdgwJvrwClC8_8yj0MjYYA" alt="" />
      <div class="item-explanation">
        <div class="item-explanation-name">{{ carditem.name }}</div>
        <div class="item-explanation-phone"> <i class=" fa fa-phone "></i> {{carditem.phone}} </div>
        <div class="item-explanation-email"> <i class="fa fa-envelope-o"></i> {{carditem.phone}} </div>
        <div class="item-explanation-companyName"> {{carditem.company}} - {{carditem.company_position}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'gc-item',
    props: ['carditem'],
  };
</script>