var now = new Date();

function createtime() {
    var grt = new Date("06/30/2024 23:00:00");
    now.setTime(now.getTime() + 250);
    var days = (now - grt) / 1e3 / 60 / 60 / 24,
        dnum = Math.floor(days),
        hours = (now - grt) / 1e3 / 60 / 60 - 24 * dnum,
        hnum = Math.floor(hours);
    hnum = hnum < 10 ? "0" + hnum : hnum;
    var minutes = (now - grt) / 1e3 / 60 - 1440 * dnum - 60 * hnum,
        mnum = Math.floor(minutes);
    mnum = mnum < 10 ? "0" + mnum : mnum;
    var seconds = (now - grt) / 1e3 - 86400 * dnum - 3600 * hnum - 60 * mnum,
        snum = Math.round(seconds);
    snum = snum < 10 ? "0" + snum : snum;

    let currentTimeHtml = `本站运行了 ${dnum} 天${hnum} 小时 ${mnum} 分${snum} 秒`;
    document.getElementById("workboard") && (document.getElementById("workboard").innerHTML = currentTimeHtml);
}

setInterval(() => {
    createtime();
}, 250);