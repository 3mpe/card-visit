angular.module('GaarajCardVisit').run(['$templateCache', function($templateCache) {$templateCache.put('index.html','<!DOCTYPE html>\r\n<html>\r\n\r\n<head>\r\n\r\n  <meta charset="utf-8">\r\n  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">\r\n  <title></title>\r\n  <link href="https://fonts.googleapis.com/css?family=Titillium+Web:300,400,600&amp;subset=latin-ext" rel="stylesheet">\r\n  <meta http-equiv="cache-control" content="max-age=0" />\r\n  <meta http-equiv="cache-control" content="no-cache" />\r\n  <meta http-equiv="expires" content="0" />\r\n  <meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" />\r\n  <meta http-equiv="pragma" content="no-cache" />\r\n  <meta name="fragment" content="!">\r\n  <meta name="google-site-verification" content="cDm87JXu2nZPdoWceS3QlW00SC1oRpiLGbmIjIt2Uck" />\r\n  <!-- inject:css -->\r\n\r\n  <!-- endinject -->\r\n</head>\r\n\r\n<body ng-app="GaarajCardVisit">\r\n  <ui-view></ui-view>\r\n  <!-- inject:js -->\r\n  \r\n  <!-- endinject -->\r\n</body>\r\n\r\n</html>\r\n');
$templateCache.put('pages/layout.html','<ui-view name="wrapper"></ui-view>\r\n');
$templateCache.put('pages/list/list.html','<div class="page-heading">\r\n  <h2 class="page-title"><i class="fa fa-id-card"></i> Kart Vizit Listesi</h2>\r\n</div>\r\n<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\r\n  <div class="search">\r\n    <i class="fa fa-search"></i>\r\n    <input type="text" class="form-control" placeholder="Kartvizit ara" ng-model="vm.query">\r\n  </div>\r\n  <div style="padding-left: 20px" ng-click="vm.addCard()"> <i class="fa fa-plus"></i>Yeni Kartvizit </div>\r\n</div>\r\n<div class="card-list">\r\n  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3" data-ng-repeat=" item in ( vm.card | filter: vm.query)">\r\n    <div class="item " ng-class=" vm.isSelect === item.id?\'item-select\':\'\' " ng-click="vm.isSelect = item.id;">\r\n      <img class="item-image" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSQ0OVnO8F1ApFM9fHi6SgKOUN_t8DmM1hQhdgwJvrwClC8_8yj0MjYYA" alt="profile image" />\r\n      <div class="item-explanation">\r\n        <div class="item-explanation-name"> {{item.name }} {{item.surname}}</div>\r\n        <div class="item-explanation-phone"> <i class=" fa fa-phone "></i> {{item.phone}} </div>\r\n        <div class="item-explanation-email"> <i class="fa fa-envelope-o"></i> {{item.email}}</div>\r\n        <div class="item-explanation-companyName"> {{item.company}} - {{item.company_position}}</div>\r\n      </div>\r\n      <div class="processor">\r\n        <div ng-click="vm.cardDelete(item.id)"> <i class="fa fa-delete"></i> Sil</div>\r\n        <div ng-click="vm.cardEdit(item.id)"> <i class="fa fa-edit"></i> D\xFCzenle</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n');
$templateCache.put('pages/newCard/newcard.html','<div class="container">\r\n  <div class="row">\r\n    <form ng-submit="vm.savecard(vm.cardForm)">\r\n      <div class="span12">\r\n        <label>Ad\u0131</label>\r\n        <div class="input-prepend">\r\n          <span class="add-on">\r\n\t\t\t\t\t<i class="icon-envelope"></i>\r\n\t\t\t\t</span>\r\n          <input type="text" ng-model="vm.cardForm.name">\r\n        </div>\r\n        <label>Soyad\u0131</label>\r\n        <div class="input-prepend">\r\n          <span class="add-on">\r\n\t\t\t\t\t<i class="icon-user"></i>\r\n\t\t\t\t</span>\r\n          <input type="text" ng-model="vm.cardForm.surname">\r\n        </div>\r\n        <label> Telefon Numaras\u0131</label>\r\n        <div class="input-prepend">\r\n          <span class="add-on">\r\n\t\t\t\t\t<i class="icon-globe"></i>\r\n\t\t\t\t</span>\r\n          <input type="text" ng-model="vm.cardForm.phone" maxlength="10">\r\n        </div>\r\n        <label> Eposta Adresi</label>\r\n        <div class="input-prepend">\r\n          <span class="add-on">\r\n\t\t\t\t\t<i class="icon-globe"></i>\r\n\t\t\t\t</span>\r\n          <input type="text" ng-model="vm.cardForm.email">\r\n        </div>\r\n        <label> Firma </label>\r\n        <div class="input-prepend">\r\n          <span class="add-on">\r\n\t\t\t\t\t<i class="icon-globe"></i>\r\n\t\t\t\t</span>\r\n          <input type="text" ng-model="vm.cardForm.company">\r\n        </div>\r\n        <label> Firmada Pozisyonu</label>\r\n        <div class="input-prepend">\r\n          <span class="add-on">\r\n\t\t\t\t\t<i class="icon-globe"></i>\r\n\t\t\t\t</span>\r\n          <input type="text" ng-model="vm.cardForm.company_position">\r\n        </div>\r\n        <button>Kaydet</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n');
$templateCache.put('pages/list/edit/editcard.html','<div class="container">\r\n  <div class="row">\r\n    <form ng-submit="vm.updateCard(vm.cardForm)">\r\n      <div class="span12">\r\n        <label>Ad\u0131</label>\r\n        <div class="input-prepend">\r\n          <span class="add-on">\r\n\t\t\t\t\t<i class="icon-envelope"></i>\r\n\t\t\t\t</span>\r\n          <input type="text" ng-model="vm.cardForm.name">\r\n        </div>\r\n        <label>Soyad\u0131</label>\r\n        <div class="input-prepend">\r\n          <span class="add-on">\r\n\t\t\t\t\t<i class="icon-user"></i>\r\n\t\t\t\t</span>\r\n          <input type="text" ng-model="vm.cardForm.surname">\r\n        </div>\r\n        <label> Telefon Numaras\u0131</label>\r\n        <div class="input-prepend">\r\n          <span class="add-on">\r\n\t\t\t\t\t<i class="icon-globe"></i>\r\n\t\t\t\t</span>\r\n          <input type="text" ng-model="vm.cardForm.phone" maxlength="10">\r\n        </div>\r\n        <label> Eposta Adresi</label>\r\n        <div class="input-prepend">\r\n          <span class="add-on">\r\n\t\t\t\t\t<i class="icon-globe"></i>\r\n\t\t\t\t</span>\r\n          <input type="text" ng-model="vm.cardForm.email">\r\n        </div>\r\n        <label> Firma </label>\r\n        <div class="input-prepend">\r\n          <span class="add-on">\r\n\t\t\t\t\t<i class="icon-globe"></i>\r\n\t\t\t\t</span>\r\n          <input type="text" ng-model="vm.cardForm.company">\r\n        </div>\r\n        <label> Firmada Pozisyonu</label>\r\n        <div class="input-prepend">\r\n          <span class="add-on">\r\n\t\t\t\t\t<i class="icon-globe"></i>\r\n\t\t\t\t</span>\r\n          <input type="text" ng-model="vm.cardForm.company_position">\r\n        </div>\r\n        <button>G\xFCncelle</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n');}]);