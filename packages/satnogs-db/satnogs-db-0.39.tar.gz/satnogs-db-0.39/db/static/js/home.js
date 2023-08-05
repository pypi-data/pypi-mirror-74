$(document).ready(function() {
    'use strict';

    $('.satellite-group-item').each(function() {
        var img = $(this).data('image');
        $(this).find('.panel-heading').css('background-image', 'url(' + img + ')');
    });

    var items = [];
    $('div.satellite-group-item').each(function(i, obj) {
        items.push(obj);
    });

    var t = $('input');
    t.bind('propertychange keyup input paste', function() {
        var term = t.val().toLowerCase();
        if (term !== '') {
            $('.satellite-group-item').hide();
            var results = $.grep(items, function(e) {
                if ($(e).data('selector').indexOf(term) !== -1) {
                    return $(e);
                }
            });
            $(results).show();
        } else {
            $('.satellite-group-item').show();
        }
    });
});
