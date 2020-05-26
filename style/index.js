(function(){
    window.onload = function() {
        // 创建一个回到首页标志。
        var ele = document.createElement('a');
        document.body.appendChild(ele);
        ele.innerHTML = '🎈';
        //ele.style['font-size'] = '180%';
        ele.style['position'] = 'fixed';
        ele.style['right'] = '1.5%';
        ele.style['bottom'] = '45px';
        ele.style['display'] = 'none';
        // ele.href = 'javascript: window.scrollTo(0,0)';
        var tag_h1 =  document.getElementsByTagName('h1')[0];
        ele.href = '#' + tag_h1.id;
        document.title = tag_h1.innerText;

        // 滚动事件
        window.onscroll = function(e) {
            // scrollTop:    滚动位置距顶端距离
            // scrollHeight: 总高度
            // clientHeight: 可见区域高度
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
            var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
            var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
            var position = scrollTop / (scrollHeight - clientHeight);
            var isFirstPage = scrollTop < clientHeight;
            if (!isFirstPage) {
                ele.style['display'] = 'inline';
            } else {
                ele.style['display'] = 'none';
            }
            if (clientWidth < 500) {
                ele.style['font-size'] = '140%';
            } else {
                ele.style['font-size'] = '180%';
            }
        }

        // 去除空表头
        var theads = document.querySelectorAll('table thead');
        for(var i=0; i<theads.length; i++) {
            var thead = theads[i];
            if(0 === thead.innerText.trim().length) {
                thead.remove();
            }
        }
    };
})();