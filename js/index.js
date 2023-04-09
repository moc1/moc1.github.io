var clickNum = 0;
function getQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return unescape(r[2]); return null;
}

function getRequest() {
    var url = location.search; //获取url中"?"符后的字串
    if (url.indexOf("?") != -1) {    //判断是否有参数
        var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
        strs = str.split("=");   //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
        //alert(strs[0]);          //直接弹出第一个参数 （如果有多个参数 还要进行循环的）
        return strs[0];
    }
}
//根据type的值跳转URL
//var type = getQueryString("type");

//获取url后面的参数
let param = getRequest();
if(param == "erp"){
    window.location.href="https://b36a-163-125-211-180.ngrok-free.app"
}
if(param == "diancan"){
    window.location.href="https://254a-163-125-211-180.ngrok-free.app"
}
function unuse(){
    switch (clickNum) {
        case 0:
            alert("暂时不能跳转，因为本来也没打算做详情页。");
            break;
        case 1:
            alert("不能跳转哦！");
            break;
        case 2:
            alert("都说了不能跳转，咋不死心呢！");
            break;
        case 3:
            alert("还点呀！都说了没有东西了，放弃吧！");
            break;
        case 4:
            alert("看样子，你就是不死心，那也没办法了。");
            break;
        default:
            alert("不能跳转哦！");
            break;
    }

    clickNum++;
}
