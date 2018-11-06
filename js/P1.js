var data = {
    "index": {
        "news": [
            32719500, 
            52427900, 
            "Null"
        ], 
        "baidu": [
            4021, 
            4989.857142857143, 
            "Null"
        ], 
        "weixin": [
            625659, 
            709842.2857142857, 
            "Null"
        ], 
        "weibo": [
            109185, 
            191507.42857142858, 
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
        "中文名": "延禧宫略", 
        "首播时间": 43300, 
        "类型": "古装、宫廷", 
        "拍摄地区": "中国", 
        "编剧": "周末", 
        "出品公司": "东阳欢娱影视文化有限公司", 
        "发行公司": "东阳欢娱影视文化有限公司"
    }, 
    "performence": {
        "online": [
            20000, 
            20000, 
            15000
        ], 
        "tv": [
            5000
        ]
    }, 
    "comment": {
        "news": [
            500000, 
            100000
        ], 
        "douban": [
            8.1, 
            205939
        ], 
        "weibo": [
            823, 
            50000
        ], 
        "zhiming": [
            30, 
            40
        ]
    }
}

function getData(){
    if($('#search_input').val() == '延禧攻略'){
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
    }else{
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
}
function modify_network_index(){
    $('.network_index input').removeAttr('readonly').css('border-width','2px').focus(function(){
        this.select();
    });
}
function nextpage(){
    window.location.href='./3_show_results.html'
}
!function init(){
    set_select_all();
    set_readonly();
}()







// function load_data_from_excel(){

// }
function load_data_from_json(){
    // $.getJSON('../data/data.json',function(data){
    //     console.log(data);
    //     console.log(typeof data);
    // })

    // $.ajax({
    //     type:'get',
    //     dataType:'json',
    //     url: "data/data.txt",
    //     success: function (data) {
    //         console.log(data);
    //         console.log(typeof data);
    //         // ipAddress = data.ip;
    //     }
    // });

    console.log(data);
    console.log(typeof data);
}