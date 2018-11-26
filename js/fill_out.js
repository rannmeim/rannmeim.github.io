$('.nav_bg').height(screen.availHeight);

$('.icon_add').click(function(){
    $('.actor_row').append("<br/><br/><span class='title'></span> <input class='short_width' type='text' placeholder='演员名'>")
})

$('.cancel').click(function(){
    $('.selected_file').hide()
})

$(".upload").on("change","input[type='file']",function(){
    var filePath=$(this).val();
    if(filePath.indexOf("doc")!=-1 || filePath.indexOf("txt")!=-1){
        $(".file_name").removeClass('error')
        var arr=filePath.split('\\');
        var fileName=arr[arr.length-1];
        $(".file_name").html(fileName)
        $('.selected_file').show();
    }else{
        $(".file_name").addClass('error').html("您上传文件的类型有误！");
        $('.selected_file').show();
        return false 
    }
})
$('input[type="month"]').on('change', function(){
    if(this.value === ''){
        $(this).css('color', 'rgba(155,155,155,1)');
    }else{
        $(this).css('color', 'rgba(74,74,74,1)');
    }
})
$('.select_nation').on("change",function(){
    $('.nation_input').val($(this).val());
})
$('.select_theme').on("change",function(){
    $('.theme_input').val($(this).val());
})