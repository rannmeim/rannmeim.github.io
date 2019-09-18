var data = {
    "index": {
        "news": [
            54401900, 
            52427900, 
            "Null"
        ], 
        "baidu": [
            6166, 
            4989, 
            "Null"
        ], 
        "weixin": [
            746537, 
            709842, 
            "Null"
        ], 
        "weibo": [
            100593, 
            191507, 
            "Null"
        ], 
        "wanted": [
            70095, 
            "Null", 
            "Null"
        ]
    }, 
    "basic": {
        "出品时间": "2018年", 
        "剧情简介": "乾隆六年，少女魏璎珞为寻求长姐死亡真相，入紫禁城为宫女。璎珞经过调查，证实姐姐之死与荒唐王爷弘昼有关，立志要讨回公道。富察皇后（秦岚饰）娴于礼法，担心璎珞走上歧途，竭力给予她温暖与帮助。在皇后的悉心教导下，魏璎珞一步步成长为正直坚强的宫廷女官，并放下怨恨、认真生活。皇后不幸崩逝，令璎珞对乾隆误会重重，二人从互相敌视到最终彼此理解、互相扶持。璎珞凭勇往直前的勇气、机敏灵活的头脑、宽广博大的胸怀，化解宫廷上下的重重困难，最终成为襄助乾隆盛世的令贵妃。", 
        "上星平台": "浙江卫视", 
        "导演": "惠楷栋、温德光", 
        "集数": "70集", 
        "在线播放平台": "爱奇艺", 
        "拍摄地点": "横店", 
        "主演": "吴谨言，秦岚，聂远，佘诗曼，许凯，王媛可，谭卓，洪尧，王冠逸，练练，李春媛，姜梓新，潘时七，李若宁，张嘉倪", 
        "每集长度": "45分钟", 
        "语言平台": "普通话", 
        "制片人": "于正", 
        "播出平台": "翡翠台", 
        "英文名": "Story of Yanxi Palace", 
        "中文名": "延禧攻略", 
        "首播时间": '2018年7月', 
        "类型": "古装、宫廷", 
        "拍摄地区": "中国", 
        "编剧": "周末", 
        "出品公司": "东阳欢娱影视文化有限公司", 
        "发行公司": "东阳欢娱影视文化有限公司"
    }, 
    "performence": {
        "online": [
            20321, 
            25030, 
            15901
        ], 
        "tv": [
            5910
        ]
    }, 
    "comment": {
        "news": [
            78, 
            698
        ], 
        "douban": [
            8.1, 
            369
        ], 
        "weibo": [
            823, 
            4897
        ], 
        "zhiming": [
            7, 
            40
        ]
    }
}
var today_weibo=null;
var today_weixin=null;
var today_baidu=null;
var today_toutiao=null;
var wanted=null;
var all_weibo=null;
var all_weixin=null;
var all_baidu=null;
var all_toutiao=null;

$('#search_input').keydown(function(e){
    if(e.keyCode==13){
        getData(true);
    }
})
!function(){
    if($('.basic_attr input')[0].value != '---'){
        today_weibo=100593,today_weixin=746537,today_baidu=6166,today_toutiao=54401900,wanted=70095,all_weibo=1340552,all_weixin=4968896,all_baidu=34929,all_toutiao=366995300;
        enable_next();
    }
}()
function getData(flag){
    // test
    // if(true){
    if($('#search_input').val() == '延禧攻略'){
        today_weibo=100593,today_weixin=746537,today_baidu=6166,today_toutiao=54401900,wanted=70095,all_weibo=1340552,all_weixin=4968896,all_baidu=34929,all_toutiao=366995300;
        enable_next();
        // 基本属性
        var basic_data = $('.basic_attr input');
        for(var i = 0;i<basic_data.length;i++){
            var d = basic_data[i];
            $(d).val(data['basic'][d.name]);
        }

        //网络指数
        var index_data = $('.network_index input');
        for(var i=0;i < data['index']['weibo'].length;i++){
            d = data['index']['weibo'][i];
            if(d=='Null'){
                d='-';
            }
            $(index_data[5*i]).val(d);
        }
        for(var i=0;i < data['index']['weixin'].length;i++){
            d = data['index']['weixin'][i];
            if(d=='Null'){
                d='-';
            }
            $(index_data[5*i+1]).val(d);
        }
        for(var i=0;i < data['index']['baidu'].length;i++){
            d = data['index']['baidu'][i];
            if(d=='Null'){
                d='-';
            }
            $(index_data[5*i+2]).val(d);
        }
        for(var i=0;i < data['index']['news'].length;i++){
            d = data['index']['news'][i];
            if(d=='Null'){
                d='-';
            }
            $(index_data[5*i+3]).val(d);
        }
        for(var i=0;i < data['index']['wanted'].length;i++){
            d = data['index']['wanted'][i];
            if(d=='Null'){
                d='-';
            }
            $(index_data[5*i+4]).val(d);
        }

        //留言
        var comment_data = $('.comments input');
        for(var i=1;i <= comment_data.length;i++){
            d = comment_data[i-1];
            switch(i){
                case 1:
                    $(d).val(data['comment']['weibo'][0]);
                    break;
                case 2:
                    $(d).val(data['comment']['weibo'][1]);
                    break;
                case 3:
                    $(d).val(data['comment']['news'][0]);
                    break;
                case 4:
                    $(d).val(data['comment']['news'][1]);
                    break;
                case 5:
                    $(d).val(data['comment']['douban'][0]);
                    break;
                case 6:
                    $(d).val(data['comment']['douban'][1]);
                    break;
                case 7:
                    $(d).val(data['comment']['zhiming'][0]);
                    break;
                case 8:
                    $(d).val(data['comment']['zhiming'][1]);
                    break;            
            }
        }
        
        //历史表现
        var per_data = $('.performance input');
        for(var i=0;i < per_data.length;i++){
            d = per_data[i];
            if(i==3){
                $(d).val(data['performence']['tv']);
            }else{
                $(d).val(data['performence']['online'][i]);
            }
        }
    }else if(flag){
        alert('暂无此IP信息！')
    }
}
function set_select_all(){
    $('input').focus(function(){
    // $('.basic_attr input, .network_index input').focus(function(){
        this.select();
    });
}
function set_readonly(){
    $('input').attr('readonly', 'readonly').css('border-width','0px');
    $('#search_input').removeAttr('readonly');
}
function modify_basic_attr(){
    $('.basic_attr input').removeAttr('readonly').css('border-width','2px').focus(function(){
        this.select();
    });
    $('.basic .wrap_modify_btn').css('display', 'none');
    $('.basic .wrap_save_btn').css('display', 'inline-block');
}
function save_basic_attr(){
    $('.basic_attr input').attr('readonly', 'readonly').css('border-width','0px');
    $('.basic .wrap_modify_btn').css('display', 'inline-block');
    $('.basic .wrap_save_btn').css('display', 'none');
}
function modify_network_index(){
    $('.network_index input').removeAttr('readonly').css('border-width','2px').focus(function(){
        this.select();
    });
}
function nextpage(){
    var h = './3_show_results.html?today_weibo='+today_weibo+'&today_weixin='+today_weixin+'&today_baidu='+today_baidu+'&today_toutiao='+today_toutiao+'&wanted='+
    wanted+'&all_weibo='+all_weibo+'&all_weixin='+all_weixin+'&all_baidu='+all_baidu+'&all_toutiao='+all_toutiao;
    window.location.href=h; 
}
!function init(){
    set_select_all();
    set_readonly();
}()

function enable_next(){
    $('#next_page').removeAttr('disabled').css('cursor','pointer');
    $('#next_page').css('background','-webkit-linear-gradient(315deg,rgba(78,192,247,1) 0%,rgba(55,123,197,1) 100%)');
    $('#next_page').css('background','-o-linear-gradient(315deg,rgba(78,192,247,1) 0%,rgba(55,123,197,1) 100%)');
    $('#next_page').css('background','-moz-linear-gradient(315deg,rgba(78,192,247,1) 0%,rgba(55,123,197,1) 100%)');
    $('#next_page').css('background','linear-gradient(315deg,rgba(78,192,247,1) 0%,rgba(55,123,197,1) 100%)');
}

$('.network_index input').change(function(){
    if(today_weibo){
        if(/(^[1-9]\d*$)/.test(this.value)){
            if($(this).hasClass('today_weibo')){
                all_weibo=all_weibo-today_weibo+Number(this.value);
                today_weibo=this.value;
                $('.ave_weibo').val(parseInt(all_weibo/7));
            }
            if($(this).hasClass('today_weixin')){
                all_weixin=all_weixin-today_weixin+Number(this.value);
                today_weixin=this.value;
                $('.ave_weixin').val(parseInt(all_weixin/7));
            }
            if($(this).hasClass('today_baidu')){
                all_baidu=all_baidu-today_baidu+Number(this.value);
                today_baidu=this.value;
                $('.ave_baidu').val(parseInt(all_baidu/7));
            }
            if($(this).hasClass('today_toutiao')){
                all_toutiao=all_toutiao-today_toutiao+Number(this.value);
                today_toutiao=this.value;
                $('.ave_toutiao').val(parseInt(all_toutiao/7));
            }
            if($(this).hasClass('wanted')){
                wanted=this.value;
            }
            if($(this).hasClass('ave_weibo')){
                all_weibo=Number(this.value)*7;                
            }
            if($(this).hasClass('ave_weixin')){
                all_weixin=Number(this.value)*7;         
            }
            if($(this).hasClass('ave_baidu')){
                all_baidu=Number(this.value)*7;         
            }
            if($(this).hasClass('ave_toutiao')){
                all_toutiao=Number(this.value)*7;         
            }
        }
    }
})
