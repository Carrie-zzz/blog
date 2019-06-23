# 下拉刷新 #
**（1）开启下拉刷新（json文件中）**

    "enablePullDownRefresh": true



**（2）在Js文件中加入如下代码**

    ` /**
       * 页面相关事件处理函数--监听用户下拉动作
       */
    onPullDownRefresh: function () {
        wx.showNavigationBarLoading();
        this.setData({
            pageNum: 1
        });
        this.xxx();
    },`

**（3）在xxx成功时加入如下代码**

    ` wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();`

# 上拉加载更多 #
**（1）js中加入如下代码**

    `/**
       * 页面上拉触底事件的处理函数
       */
    onReachBottom: function () {
        // 显示加载图标
        if (this.data.pageNum <this.data.last_page) {
            wx.showLoading({
                title: '玩命加载中',
            })
            // 页数+1
            this.setData({
                pageNum: this.data.pageNum + 1
            })

            this.xxx();
        }
    },`

**(2)在xxx函数中记得要（比如）**

     this.setData({
                rss_list: this.data.rss_list.concat(res.data.rss_list.data),
                last_page: res.data.rss_list.last_page
            })

# 左右翻页 #
**（1）在所要翻页容器中加入**

    <view bindtouchstart="touchStart" bindtouchmove="touchMove" bindtouchend="touchEnd"></view>

**(2)在全局中定义**

    `var startDot = {X: 0,Y: 0};
	var touchDot = {X: 0,Y: 0};
	var time = 0; //触屏时间var number; //定时器ID`

**(3)写对应的函数（左滑右滑中间的逻辑可换）**

    `/**
     * 触屏开始计时和获取坐标
     */
    touchStart: function(event) {
        startDot.X = event.touches[0].pageX;
        startDot.Y = event.touches[0].pageY;
        number = setInterval(function() {
            time++;
        }, 100);
    },
    /**
     * 判断滑动距离和时间是否需要切换页面
     */
    touchMove: function(event) {
        console.log("滑动");
        touchDot.X = event.touches[0].pageX;
        touchDot.Y = event.touches[0].pageY;
        //向左滑处理
        if ((startDot.X - touchDot.X) > 200 && (startDot.Y - touchDot.Y) < 150 && time < 5 && time > 0.1) {
            if (this.data.pageNum < this.data.last_page) {
                wx.showLoading({
                    title: '玩命加载中',
                });
                // 页数+1
                this.setData({
                    pageNum: this.data.pageNum + 1
                })

                this.rec_rss();
            }
            clearInterval(number);
            time = 0;
        }
        //向右滑处理
        if ((touchDot.X - startDot.X) > 200 && (touchDot.Y - startDot.Y) < 150 && time < 5 && time > 0.1) {

            if (this.data.pageNum > 1) {
                wx.showLoading({
                    title: '玩命加载中',
                })

                // 页数-1
                this.setData({
                    pageNum: this.data.pageNum - 1
                })

                this.rec_rss(); 
            }
            clearInterval(number);
            time = 0;
        }
    },
    /**
     * 结束触屏重置计时
     */
    touchEnd: function(event) {
        clearInterval(number);
        time = 0;
    },`

# 计算到某一天有多少天 #
    /**
     * 计算天数
     */
    calc_days:function(){
        var offsetTime = Math.abs(Date.now() - (new Date(2019,5-1,20)).getTime());
        this.setData({
            remain_days: Math.floor(offsetTime / (3600 * 24 * 1e3))
        })
    },

# 计算啥时候发布（刚刚，分钟，小时，天，周，月，年）（注意时间戳是以毫秒还是秒） #
     getDateDiff: function (dateTimeStamp){
        var result;
        var minute = 60;
        var hour = minute * 60;
        var day = hour * 24;
        var halfamonth = day * 15;
        var month = day * 30;
        //毫秒时间戳转为秒时间戳
        var now = Date.parse(new Date())/1000;
        console.log(now);//1558139482 1558000908
        var diffValue = now - dateTimeStamp;
        if (diffValue < 0) {
            return;
        }
        var monthC = diffValue / month;
        var weekC = diffValue / (7 * day);
        var dayC = diffValue / day;
        var hourC = diffValue / hour;
        var minC = diffValue / minute;
        if (monthC >= 1) {
            if (monthC <= 12)
                result = "" + parseInt(monthC) + "月前";
            else {
                result = "" + parseInt(monthC / 12) + "年前";
            }
        }
        else if (weekC >= 1) {
            result = "" + parseInt(weekC) + "周前";
        }
        else if (dayC >= 1) {
            result = "" + parseInt(dayC) + "天前";
        }
        else if (hourC >= 1) {
            result = "" + parseInt(hourC) + "小时前";
        }
        else if (minC >= 1) {
            result = "" + parseInt(minC) + "分钟前";
        } else {
            result = "刚刚";
        }

        return result;
    },