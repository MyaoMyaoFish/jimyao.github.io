Number.prototype.padStart =
    function (maxLength, fillString) {
        return this.toString().padStart(maxLength, fillString)
    }

addEventListener("DOMContentLoaded", function () {
    clock();
    time();
    /* koto: 在 DOMContentLoaded event 觸發時執行 time 函數.
     * 由於變量提升的關係, 並不需要在文件末尾執行
     */
})
var t = null;

function time() {
    var dateTime = new Date();
    var y = dateTime.getFullYear(),
        M = dateTime.getMonth() + 1,
        d = dateTime.getDate(),
        h = dateTime.getHours(),
        m = dateTime.getMinutes(),
        s = dateTime.getSeconds();

    // koto: 可以使用 String.prototype.padStart 來進行補齊長度
    M = M.padStart(2, "0");
    d = d.padStart(2, "0");
    h = h.padStart(2, "0");
    m = m.padStart(2, "0");
    s = s.padStart(2, "0");

    document.querySelector('.time_econd').innerHTML= h + ":" + m;
    document.querySelector('.time_moon').innerHTML= M + "月" + d + "日";
    t = setTimeout(time, 1000);
}

function clock() {
    var week;
    switch (new Date().getDay()) {
        case 1: week = "星期一"; break;
        case 2: week = "星期二"; break;
        case 3: week = "星期三"; break;
        case 4: week = "星期四"; break;
        case 5: week = "星期五"; break;
        case 6: week = "星期六"; break;
        default: week = "星期天";
    }
    document.getElementById("clock").innerHTML = week;
    setTimeout(clock, 10000);
}
