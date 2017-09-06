$(function() {
    var qitemBtnClick = function() {
        $('.verbs').on('click', function() {
            var $thisComfirm = $(this).parents('.question').find('.comfirm');
            var hasDisabled = $thisComfirm.attr('disabled');
            
            if(hasDisabled) {
                $(this).parents('.question').find('.verbs').removeClass('green red');
                $thisComfirm.attr('disabled', false);
            }
            
            $(this).toggleClass('active');
        });
    }

    var btnClear = function() {
        $('.clear').on('click', function() {
            var $questionElem = $(this).parents('.question');
            var $thisTranslate = $questionElem.parents('li').find('.item-click');

            $questionElem.find('.verbs').removeClass('active green red');
            $questionElem.find('.icon-sign').removeClass('icon-crrect icon-error');
            $(this).parents('.check-block').find('.comfirm').attr('disabled', false);
            $thisTranslate.removeClass('active');
        });
    }

    var itemClick = function() {
        $('.item-click .btn').on('click', function() {
            $(this).parents('.item-click').toggleClass('active');
        });
    }

    var btnComfirm = function(data) {

        $('.comfirm').on('click', function() {

            var $questionElem = $(this).parents('.question');
            var hasAnswer = $questionElem.find('.active').length > 0;
            var $allVerbs = $questionElem.find('.verbs');
            var qquestionIndex = $(this).val() - 1;
            var $iconSign = $questionElem.find('.icon-sign');
            var $thisTranslate = $questionElem.parents('li').find('.item-click');

            if(hasAnswer) {

                var thisAnswer = data[qquestionIndex].answer;
                
                $.each(thisAnswer, function(index, value) {
                    $allVerbs.eq(value - 1).toggleClass('green');
                });
                var hasErrorLen = $questionElem.find('.green').not('.active').length;
                var activeLen = $questionElem.find('.active').length;
                var greenLen = $questionElem.find('.green').length;

                if(hasErrorLen > 0 || activeLen > greenLen) {
                    $questionElem.find('.active').not('.green').addClass('red');  
                    
                    document.getElementById('error').play();
                    $iconSign.removeClass('icon-crrect icon-error');
                    $iconSign.addClass('icon-error');
                    $(this).attr('disabled', true);  
                    $thisTranslate.removeClass('active');  
                } else if(hasErrorLen == 0) {
                    
                    document.getElementById('crrect').play();
                    $iconSign.removeClass('icon-crrect icon-error');
                    $iconSign.addClass('icon-crrect');
                    $(this).attr('disabled', true); 
                    $thisTranslate.addClass('active');
                }

                
            }
            
        });
        
    }
    
    var init = function() {
        var data = [{"answer": [2, 6, 8]},{"answer": [2, 4, 6, 11]},{"answer": [1, 5, 8]},{"answer": [2, 6, 8, 11]}];
        qitemBtnClick();
        btnClear();
        itemClick();
        btnComfirm(data);
    }
    
    init();
});
