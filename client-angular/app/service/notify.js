angular
  .module('GaarajCardVisit')
  .service('Notify', function(SweetAlert, toasty) {
    return {
      success: function($message, $title) {
        var title = $title ? $title : 'Tebrikler!';
        toasty.success({ title: title, msg: $message, html: true });
      },
      error: function($message, $title) {
        var title = $title ? $title : 'Üzgünüz!';
        toasty.error({ title: title, msg: $message, html: true });
      },
      info: function($message, $title) {
        var title = $title ? $title : 'Bilgi!';
        toasty.info({ title: title, msg: $message, html: true });
      },
      warning: function($message, $title) {
        var title = $title ? $title : 'Dikkat!';
        toasty.warning({ title: title, msg: $message, html: true });
      },
      confirm: function($success, $error, $params) {
        var params = {
          title: "Emin misiniz?",
          text: "Bu kayıt silinecek!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Evet, Devam et!",
          cancelButtonText: 'Hayır, Devam etme!',
          closeOnConfirm: true,
          closeOnCancel: true
        };
        params = angular.extend(params, $params);
        SweetAlert.swal(params, function(isConfirm) {
          if (isConfirm) {
            if (typeof $success == 'function') {
              $success(isConfirm);
            }
          } else {
            if (typeof $error == 'function') {
              $error(isConfirm);
            }
          }
        });
      }
    };
  });
