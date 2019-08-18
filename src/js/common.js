/**
 *获取url地址参数的方法
 *
 * @param {string} key 参数名
 * @returns {string} 匹配的结果
 */

function getUrlParam(key) {
    var reg = new RegExp(key + '=([^&]*)');
    var results = location.href.match(reg);
    return results ? results[1] : null;
}


/**
 *根据时间差毫秒数，返回具体的小时、分钟、秒的时间差
 *
 * @param {number} ms 相隔的毫秒数
 * @returns {array} 返回时间间隔的数组：['2','2','1','1','3','3']
 */
function getHoursMinutesSecondsByMS(ms) {
    ms = +ms;
    if (ms < 0) {
        return;
    }

    // 处理小时
    var hours = parseInt(ms / (1000 * 60 * 60)) % 24;
    var minutes = parseInt(ms / (1000 * 60)) % 60;
    var seconds = parseInt(ms / 1000) % 60;

    var hourStr = '0' + hours;
    hourStr = hourStr.slice(-2);
    var minuteStr = '0' + minutes;
    minuteStr = minuteStr.slice(-2);
    var secondStr = '0' + seconds;
    secondStr = secondStr.slice(-2);

    // 221309
    var str = hourStr + minuteStr + secondStr;
    return str.split('');

}