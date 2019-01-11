
$(function(){
    /* 全选按钮 */
        $('.all-check input').click(function(){
            var thisChecked = $(this).prop('checked');
            if (thisChecked == true){
                $(this).parents('thead').siblings('.body-table').find('input').prop('checked',true);
            }
            else{
                $(this).parents('thead').siblings('.body-table').find('input').prop('checked',false);
            }
        });
    /* 复选框子元素全选*/
        $('.body-table').find('input').click(function () {
            var sum = $(this).parents('.body-table').find('input').length;
            var num = $(this).parents('.body-table').find('input:checked').length;
            if(num == sum){
                $(this).parents('.body-table').siblings('thead').find('.all-check input').prop('checked',true);
            }else{
                $(this).parents('.body-table').siblings('thead').find('.all-check input').prop('checked', false);
            }
        });

   $('.button-cancel').click(function(){
      $('.ibox-content').find('form').find('input').val('');
       $('.ibox-content').find('form').find('textarea').val('');
   })

});
