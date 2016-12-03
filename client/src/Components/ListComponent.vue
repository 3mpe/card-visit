<template>
  <div>
    <div class="page-heading">
      <h2 class="page-title"><i class="fa fa-id-card"></i> Kart Vizit Listesi</h2>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <div class="search">
        <i class="fa fa-search"></i>
        <input type="search" class="form-control" value="" required="required" title="">
      </div>
    </div>
    <div class="card-list">
      <gc-item v-for=" item in cardList " :carditem="item"></gc-item>
    </div>
  </div>
</template>
<script>

  import Vue from 'vue';
  import GCItem from './GCItem';

  export default {
    name: 'gc-list',
    components: {
      'gc-item': GCItem,
    },
    methods: {
      loadCardList: function loadCardList() {
        Vue.http.get('http://localhost:3000/card').then((response) => {
          this.cardList = response.body.data;
        }, (error) => {
          console.log('error', error);
        });
        /*
        this.cardList = [
          {
            updatedAt: '2016-12-02T13:01:15.351Z',
            createdAt: '2016-12-02T13:01:15.351Z',
            name: 'Emre',
            surname: 'Vatansever',
            email: 'vatanseveremre90@gaaraj.com',
            phone: '5374310952',
            company: 'Gaaraj A.Ş.',
            company_position: 'Front-end Developer',
          },
        ];*/
      },
    },
    created() {
      this.loadCardList();
    },
    data() {
      return {
        cardList: '',
      };
    },
  };
</script>
<style lang="less" scoped>
.card-list {
  padding: 15px 15px;
  .item {
    position: relative;
    border: 2px solid #e0e0e0;
    margin: 0 0 30px;
    padding: 12px;
    border-radius: 3px;
    &-image {
      float: left;
      width: 50px;
      height: 50px;
      padding: 10px 10px;
      border: 1px solid #bdbdbd;
      border-radius: 100%;
      margin-top: 29px;
      margin-left: 20px;
    }
    &-explanation {
      padding-left: 90px;
      &-name {
        margin: 0 0 6px;
        font-size: 20px;
        font-weight: 800;
      }
      &-phone {}
      &-email {
        padding-left: 2px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      &-companyName {}
    }
    &-select {
      border-color: #4ab3e2;
      background-color: #FDFDFD;
    }
  }
  .item:hover {
    border-color: #4ab3e2;
    background-color: #FDFDFD;
  }
}
</style>