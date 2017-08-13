$(function() {
    var qitemBtnClick = function() {
        $('.verbs').on('click', function() {
            $(this).toggleClass('active');
            console.log('active');
        });
    }

    var btnClear = function() {
        $('.clear').on('click', function() {
            var $questionElem = $(this).parent('.question');

            $questionElem.find('.verbs').removeClass('active');
        });
    }
    
    var init = function() {
        qitemBtnClick();
        btnClear();
        console.log('init');
    }
    
    init();
});
