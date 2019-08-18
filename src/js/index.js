var timer, //时钟id
    // 时钟索引，有的函数需要一秒执行一次，有的需要两秒
    timerIndex = -1,
    // 存放主时钟的回调函数
    timerFnArray = [];
// 页面加载完成的事件
$(function() {
    // 绑定搜索按钮的初始化事件
    $('#btnSrch').on('tap', function(e) {
        // 获取搜索文本框的文本
        var txt = $('#srchTxt').val() || '默认搜索内容';
        // 页面跳转到搜索页面，并把参数传递给搜索页面
        window.location.href = './srch.html?kw=' + txt;
    });


    // 初始化轮播图
    initBannerSwiper();

    // 注册时钟的回调函数
    timerFnArray.push(updateMSTimer);

    // 初始化页面主时钟并启动
    timer = setInterval(function() {
        timerIndex += 1;
        timerIndex = timerIndex % 100;
        // 执行页面中所有需要注册时钟执行的函数
        for (var i = 0; i < timerFnArray.length; i++) {
            timerFnArray[i]();
            // 调用数组中的每个回调函数执行
        }
    }, 200);
});

// 页面卸载之前清除时钟
window.onunload = function() {
    clearInterval(timer);
};

// 更新当前时间与秒杀结束时间差的span标签，数字
function updateMSTimer() {
    // 每秒更新秒杀页面中的时间
    if (timerIndex % 5 != 0) {
        return;
    }
    // 满一秒钟
    // 计算时间差，并更新到秒杀中的span中去
    var endDate = new Date(loadData.ms.endTime);
    // ['2','2','1','1','0','9']
    var strArr = getHoursMinutesSecondsByMS(endDate - Date.now());

    // 把时钟变换字符串更新到span标签
    $('#msTimerBox').find('.timer-num').each(function(index, item) {
        $(item).text(strArr[index]);
    });
}

// 初始化轮播图
function initBannerSwiper() {
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 水平切换选项
        loop: true, // 循环模式选项
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },

        // 如果需要滚动条
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    })
}