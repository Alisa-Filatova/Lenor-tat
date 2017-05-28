/**
 * Created by Alisa on 28.05.17.
 */

var $form = $('form[name="appointment-form"]');
var $alertSuccess = $('.alert_success');
var $overlay = $('.modal-overlay');

$form.on('submit', function(event) {
    var formData = $form.serialize();
    var request = $.post('/enroll', formData);

    event.preventDefault();

    request.done(function() {
        $form.get(0).reset();
        $alertSuccess.addClass('alert_show');
        $overlay.addClass('modal-overlay_show');
    });
});

$alertSuccess.find('.alert__btn').on('click', function() {
    $alertSuccess.removeClass('alert_show');
    $overlay.removeClass('modal-overlay_show');
});
