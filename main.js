$(function() {
    var qitemBtnClick = function() {
        $('.verbs').on('click', function() {
            $(this).toggleClass('active');
            console.log('active');
        });
    }

    var btnClear = function() {
        $('.clear').on('click', function() {
            var $questionElem = $(this).parents('.question');

            $questionElem.find('.verbs').removeClass('active');
        });
    }

    var itemClick = function() {
        $('.item-click').on('click', function() {
            $(this).toggleClass('active');
        });
    }
    
    var init = function() {
        qitemBtnClick();
        btnClear();
        itemClick();
        console.log('init');
    }
    
    init();
});
