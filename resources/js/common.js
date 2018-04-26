
function changeImg(obj){
    var sp = $(obj).find("span");
    if(sp.hasClass("glyphicon-plus")){
        sp.addClass("glyphicon-minus");
        sp.removeClass("glyphicon-plus");
    }else{
        sp.addClass("glyphicon-plus");
        sp.removeClass("glyphicon-minus");
    }
}