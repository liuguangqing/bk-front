
// 判断ios系统--android系统--iphoneX
function getBlatFrom() {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    var iphoneX = /iphone/gi.test(navigator.userAgent) && (screen.height == 812 && screen.width == 375)
    // 返回1是android系统
    if (isAndroid) {
        return 1;
    }
    // 返回2是ios系统
    if (isiOS && !iphoneX) {
        return 2;
    }
    // 返回3是iphoneX
    if (iphoneX) {
        return 3;
    }
    return 0;
}
// 判断是否是大屏幕及以上的xs之类的
function isBiggerScreen() {
    var u = navigator.userAgent;
    // var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    // var iphoneXBig = /iphone/gi.test(navigator.userAgent) && (screen.height >= 812 && screen.width >= 375)
    var iphoneXBig = (screen.height >= 760 && screen.width >= 360)
    if (iphoneXBig) {
        return true
    } else {
        return false
    }
}


// 限制文字数量
function txtFix(s, len) {
    var char = 0;
    var rs = s;
    for (var i = 0; i < s.length; i++) {
        var str = s.charAt(i);
        if (char < len) {
            if (encodeURI(str).length > 2) {
                char += 2
            } else {
                char += 1
            }
        } else {
            rs = s.substring(0, i) + '...';
            break;
        }
    }
    return rs
}

// 埋点
function maidianFnNew(data, spread, otherData) {
    spread = spread || getUrl('spread') || null;

    var num = localStorage.getItem('randomNum');
    if (num === null) {
        var num1 = Math.floor(Math.random() * 100000) + '';
        var num2 = Math.floor(Math.random() * 100000) + '';
        var num3 = Math.floor(Math.random() * 100000) + '';
        var num4 = Math.floor(Math.random() * 100000) + '';
        num = num1 + num2 + num3 + num4;
        localStorage.setItem('randomNum', num);
    }
    //数据统计            // 推广埋点
    $.ajax({
        url: '/proxy/fanbei-web/postMaidianInfo',
        type: 'post',
        data: {
            maidianInfo: location.pathname + '?type=' + data,      //ext2     页面地址加上对应的页面事件描述
            maidianInfo1: otherData,                 //ext3      可选埋点数据
            maidianInfo2: spread,               //ext4       渠道
            maidianInfo3: num                   //随机数，作为uv
        },
        success: function (data) {
        }
    });
}
// 获取当前页面的URL 对其带的参数进行处理
function getInfo() {
    var url = decodeURIComponent(location.toString());
    var paraArr = url.toString().split("_appInfo=");

    if (paraArr.length > 1) {
        return eval('(' + paraArr[1] + ')');
    } else {
        return ''
    }

}

// 埋点--自主命名type
function maidianFnName(type, data, spread, otherData) {
    spread = spread || getUrl('spread') || null;

    var num = localStorage.getItem('randomNum');
    if (num === null) {
        var num1 = Math.floor(Math.random() * 100000) + '';
        var num2 = Math.floor(Math.random() * 100000) + '';
        var num3 = Math.floor(Math.random() * 100000) + '';
        var num4 = Math.floor(Math.random() * 100000) + '';
        num = num1 + num2 + num3 + num4;
        localStorage.setItem('randomNum', num);
    }
    //数据统计            // 推广埋点
    $.ajax({
        url: '/proxy/fanbei-web/postMaidianInfo',
        type: 'post',
        data: {
            maidianInfo: location.pathname + '?' + type + '=' + data,      //ext2     页面地址加上对应的页面事件描述
            maidianInfo1: otherData,                 //ext3      可选埋点数据
            maidianInfo2: spread,               //ext4       渠道
            maidianInfo3: num                   //随机数，作为uv
        },
        success: function (data) {

        }
    });
}

// 获取网站的域名
function domainName() {
    var protocol = window.location.protocol;
    var host = window.location.host;
    var domainName = protocol + '//' + host;
    return domainName;
}

// 跳转商品详情页
function toGoodDetail(id, lc) {
    return '/fanbei-web/opennative?name=GOODS_DETAIL_INFO&params={"privateGoodsId":"' + id + '","lc":"' + lc + '"}'
}

// 隐藏电话号码的中间四位
function formateTelNum(tel) {
    if (tel) {
        var telLength = tel.length;
        if (telLength < 11) {
            tel = tel;
        } else if (telLength >= 11) {
            var telNum = tel.substring(3, 7);
            tel = tel.replace(telNum, "****");
        }
        return tel;
    } else {
        return "";
    }
}

// 时间戳转换---2018/07/26(若为 - ios手机会报错)
function formatDate(now, type) {
    now = new Date(now);
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var str = year + "-" + month + "-" + date;
    month = month < 10 ? '0' + month : month;
    date = date < 10 ? '0' + date : date;
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;
    if (type == 'minute') {
        str = year + "-" + month + "-" + date + " " + hour + ":" + minute;
    } else if (type == "second") {
        str = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
    } else {
        str = year + "-" + month + "-" + date
    }
    return str;
}

//日期格式12月12日 18:24
function formatDate_noYearSecond(now) {
    now = new Date(parseInt(now));
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let str = month + "月" + date + "日";
    month = month < 10 ? '0' + month : month;
    date = date < 10 ? '0' + date : date;
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    str = month + "月" + date + "日" + " " + hour + ":" + minute;
    return str
}

//获取时间戳
function getStamp(date) {
    let stamp = new Date(date).getTime();
    return stamp
}

//计算时间
function countTime(diff, type) {
    var h, m, s, ms;
    if (diff > 0) {
        h = parseInt(diff / 1000 / 60 / 60);
        m = parseInt(diff / 1000 / 60 % 60);
        s = parseInt(diff / 1000 % 60);
        ms = parseInt(diff % 1000 / 10);
        if (ms < 10) {
            ms = "0" + ms;
        }
        if (s < 10) {
            s = "0" + s;
        }
        if (m < 10) {
            m = "0" + m;
        }
        if (h < 10) {
            h = "0" + h;
        }
    } else {
        ms = '00'; s = '00'; m = '00'; h = '00';
    }
    if (type == 'msObj') {
        let msObj = { h: h, m: m, s: s, ms: ms };
        return msObj
    } else {
        let sObj = { h: h, m: m, s: s };
        return sObj
    }
}

// 处理默认的保留二位小数
function toDecimal2(x) {
    var f = parseFloat(x);
    if (isNaN(f)) {
        return false;
    }
    var fM = Math.round(x * 100) / 100;
    var s = fM.toString();
    var rs = s.indexOf('.');
    if (rs < 0) {
        rs = s.length;
        s += '.';
    }
    while (s.length <= rs + 2) {
        s += '0';
    }
    return s;
}

// 获取cookie里面的参数
function getCookie(cookie_name) {
    var allcookies = document.cookie;
    var cookie_pos = allcookies.indexOf(cookie_name); //索引的长度

    // 如果找到了索引，就代表cookie存在，
    // 反之，就说明不存在。
    if (cookie_pos != -1) { // 把cookie_pos放在值的开始，只要给值加1即可。
        cookie_pos += cookie_name.length + 1; // 这里容易出问题，所以请大家参考的时候自己好好研究一下
        var cookie_end = allcookies.indexOf(";", cookie_pos);

        if (cookie_end == -1) {
            cookie_end = allcookies.length;
        }

        var value = unescape(allcookies.substring(cookie_pos, cookie_end)); //这里就可以得到你想要的cookie的值了。。。
    }
    return value;
};

function setRandom() {
    var num = localStorage.getItem('randomNum');
    if (num === null) {
        var num1 = Math.floor(Math.random() * 100000) + '';
        var num2 = Math.floor(Math.random() * 100000) + '';
        var num3 = Math.floor(Math.random() * 100000) + '';
        var num4 = Math.floor(Math.random() * 100000) + '';
        num = num1 + num2 + num3 + num4;
        localStorage.setItem('randomNum', num);
    }
    return num;
}

// 获取当前页面的URL 对其带的参数进行处理
function getUrl(para) {
    var paraArr = location.search.substring(1).split("&");
    for (var i = 0; i < paraArr.length; i++) {
        if (para == paraArr[i].split('=')[0]) {
            return paraArr[i].split('=')[1];
        }
    }
    return '';
}

//微信code
function wxUrl_userInfo() {
    let link = window.location.href.split('#')[0];
    link = link.split("&code")[0];
    let str = encodeURIComponent(link);
    switch (location.hostname) {
        case "h5.51fanbei.com":
            //return 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx583e90560d329683&redirect_uri=' + str + '&response_type=code&scope=snsapi_userinfo&state=1&connect_redirect=1#wechat_redirect';
            return 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx583e90560d329683&redirect_uri=' + str + '&response_type=code&scope=snsapi_userinfo&state=1&pay_secret=ISXomsB9ztP5xDwQCPwLlirQru5UGCIx&connect_redirect=1#wechat_redirect';
        case "yh5.51fanbei.com":
            // return 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx4e3ad83296bdb3ee&redirect_uri=' + str + '&response_type=code&scope=snsapi_userinfo&state=1&connect_redirect=1#wechat_redirect';
            return 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx583e90560d329683&redirect_uri=' + str + '&response_type=code&scope=snsapi_userinfo&state=1&pay_secret=ISXomsB9ztP5xDwQCPwLlirQru5UGCIx&connect_redirect=1#wechat_redirect';
        default:
            // return 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx89fd7c6650786c1a&redirect_uri=' + str + '&response_type=code&scope=snsapi_userinfo&state=1&pay_secret=ISXomsB9ztP5xDwQCPwLlirQru5UGCIx&connect_redirect=1#wechat_redirect';
            return 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx89fd7c6650786c1a&redirect_uri=' + str + '&response_type=code&scope=snsapi_userinfo&state=1&pay_secret=ISXomsB9ztP5xDwQCPwLlirQru5UGCIx&connect_redirect=1#wechat_redirect';
    }
}
function wxUrl_base() {
    let link = window.location.href.split('#')[0];
    link = link.split("&code")[0];
    let str = encodeURIComponent(link);

    // wx4e3ad83296bdb3ee
    switch (location.hostname) {
        case "h5.51fanbei.com":
            return 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx583e90560d329683&redirect_uri=' + str + '&response_type=code&scope=snsapi_userinfo&state=1&connect_redirect=1#wechat_redirect';
        case "yh5.51fanbei.com":
            return 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx583e90560d329683&redirect_uri=' + str + '&response_type=code&scope=snsapi_userinfo&state=1&connect_redirect=1#wechat_redirect';
        default:
            return 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx38fd96c99147979d&redirect_uri=' + str + '&response_type=code&scope=snsapi_userinfo&state=1&connect_redirect=1#wechat_redirect';
    }
}
// token
function formatDateTime() {
    var date = new Date();
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    return y + m + d + h + minute + second;
};
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
};

//判断是否有此app 有 直接打开;否 打开appStore
function bombBox(type) {
    var loadDateTime = new Date();
    //爱上街
    if (type == 'asj') {
        if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
            window.location.href = "com.91ala.www://home://";
            window.setTimeout(function () {
                var timeOutDateTime = new Date();
                if (timeOutDateTime - loadDateTime < 5000 && location.href.indexOf('com.91ala.www://home//') == -1) {
                    window.location = "http://a.app.qq.com/o/simple.jsp?pkgname=com.alfl.www";
                } else {
                    window.close();
                }
            }, 2000);
        } else if (navigator.userAgent.match(/android/i)) {
            window.location.href = "myapp://jp.app/openwith?isBrowser=1";
            setTimeout(function () {
                var timeOutDateTime = new Date();
                if (timeOutDateTime - loadDateTime < 5000) {
                    window.location = "http://a.app.qq.com/o/simple.jsp?pkgname=com.alfl.www";
                }
            }, 2000);
        }
    }
    //冒泡
    if (type == 'maoPao') {
        window.location.href = "maopp://mapgo.app?Source=Web&Act=100";
        setTimeout(function () {
            var timeOutDateTime = new Date();
            if (timeOutDateTime - loadDateTime < 5000) {
                window.location = "https://market.maopp.cn/mp_install";
            }
        }, 2000);
    }
    //爱上头条
    if (type == 'touTiao') {//爱上头条
        window.location = "https://a.app.qq.com/o/simple.jsp?pkgname=com.aladdin.asttnews&ios_scheme=aldnews://news&android_schema=aldnews://news";
    }
};

//是否在微信打开页面
function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger' || ua.match(/_SQ_/i) == '_sq_') {
        return true;
    } else {
        return false;
    }
}

// 埋点-统一---->2018-11-19
function mdFn(version, dataInfo) {
    dataInfo.reqTime = formatDate(new Date().getTime(), 'second');
    $.ajax({
        url: '/proxy/fanbei/web-maidian',
        type: 'post',
        dataType: 'json',
        data: {
            dataVersion: version,                   // 埋点数据对应的版本信息
            dataInfo: JSON.stringify(dataInfo)      // 埋点数据信息（Json格式字符串）       
        },
        success: function (data) {
        }
    });
}

export { //很关键
    getBlatFrom,//判断机型
    txtFix,//限制文字数量
    maidianFnNew,//埋点
    maidianFnName,//埋点---type可自定义maidianFnName（'name','click'）name=click
    domainName,//获取网站的域名
    toGoodDetail,//跳转商品详情页
    formateTelNum,//隐藏电话号码的中间四位
    formatDate,//时间戳转换
    toDecimal2,//处理默认的保留二位小数
    getCookie,//获取cookie里面的参数
    getUrl,// 获取当前页面的URL 对其带的参数进行处理
    getInfo,// 获取当前页面的URL 对其带的参数进行处理
    wxUrl_userInfo,
    wxUrl_base,
    formatDateTime,
    getStamp,
    countTime,
    mdFn,  // 2018-11-19 埋点需求
    bombBox,
    isWeiXin,
    isBiggerScreen,     //是否比ipx屏幕大
    formatDate_noYearSecond
}
