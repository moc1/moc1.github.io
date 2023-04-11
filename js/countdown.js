/*倒计时*/
//获取元素
var day = document.querySelector(".day");
var hour = document.querySelector(".hour");
var minute = document.querySelector(".minute");
var second = document.querySelector(".second");
//获取截止时间的时间戳（单位：毫秒）
var inputTime = +new Date("2024-01-01 00:00:00");
//先调用一次countDown(),避免打开界面没有涮新时间
countdown();
setInterval(countdown, 1000);

function countdown() {
    //获取当前时间戳
    var nowTime = +new Date();
    //计算剩余时间
    var remainderTime = (inputTime - nowTime) / 1000;
    //计算天数，转化为整数
    var d = parseInt(remainderTime / 60 / 60 / 24 % 365);
    day.innerHTML = d;
    //计算小时数，转化为整数
    var h = parseInt(remainderTime / 60 / 60 % 24);
    //如果小时数小于10要变成0+数字的形式赋值给span
    hour.innerHTML = h < 10 ? "0" + h : h;

    //计算分钟数，转化为整数
    var m = parseInt(remainderTime / 60 % 60);
    //如果小时数小于10要变成0+数字的形式赋值给span
    minute.innerHTML = m < 10 ? "0" + m : m;

    //计算秒数，转化为整数
    var s = parseInt(remainderTime % 60);
    //如果小时数小于10要变成0+数字的形式赋值给span
    second.innerHTML = s < 10 ? "0" + s : s;
}

/*倒计时end*/