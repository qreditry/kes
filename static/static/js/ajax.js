$(function () {
  var $form = $('#feedbackForm');
  var $name = $('#feedbackName');
  var $email = $('#feedbackEmail');
  var $thanks = $('.popup-request__thanks');
  var $submit = $('#feedbackSubmit');

  $($form).submit(function (e) {
    $submit.prop('disabled', true);
    e.preventDefault();
    var data = $(this).serialize();
    $.ajax({
      type: 'POST',
      url: '/ajax/',
      data: data,
      cache: false,
      success: function (data) {
        if (data === 'ok') {
          $($form).remove();
          $($thanks).removeClass('hidden');
        }
        else if (data === 'name_error') {
          $($name).val('');
          $($name).attr('placeholder', 'Введите корректное имя');
          $submit.prop('disabled', false);
        }
        else if (data === 'email_error') {
          $($email).val('');
          $($email).attr('placeholder', 'Введите корректный email');
          $submit.prop('disabled', false);
        }
      }
    })
  })
});