var clickNum = 0;

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
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
if (param == "erp") {
    window.location.href = "https://b36a-163-125-211-180.ngrok-free.app"
}
if (param == "diancan") {
    window.location.href = "https://254a-163-125-211-180.ngrok-free.app"
}

//点击链接的提示
function unuse() {
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

//判断客户端类型
//方法一
function isPc() {
    var userAgentInfo = navigator.userAgent;
    var agentsArr = ["Android", "iPhone", "SymbianOS", "Window Phone", "iPad", "iPod"]
    var isPc = true;
    for (var i = 0; i < agentsArr.length; i++) {
        if(userAgentInfo.indexOf(agentsArr[i]) > 0){
            isPc = false;
        }
    }
    return isPc;
}
//方法二
function isPc2(){
    var system = {};
    var p = navigator.platform;
    system.win = p.indexOf("Win") == 0;
    system.mac = p.indexOf("mac") == 0;
    console.log(system)
    if(system.win || system.mac) return true;
    return false;
}
//方法三
function isPc3(){
    var isMobile =  /(iPhone|iPad|iPod|iOS|Android|Linux armv8l|Linux armv7l|Linux aarch64)/i.test(navigator.platform);
    //var isPc = /(Win32|Win16|WinCE|Mac68k|MacIntel|MacPPC|Linux mips64)/i.test(navigator.platform);
    if(!isMobile) return true;
    return true;
}

//if(isPc() && isPc2() && isPc3()){alert("pc");}
if(!isPc() || !isPc2() || !isPc3()){
    //alert("mobile");
    console.log(document.getElementById("background"));
    document.getElementById("background").style.backgroundImage = "url(img/kelishu.png)";
}
