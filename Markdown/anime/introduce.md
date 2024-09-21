# 区域介绍

## 创造来源
+ 为了自我更好观看追番所建立的
+ 建立一个比较上档次的技术网站书签
+ 待定

## 北京时间
<script>
function showTime() {

  var date = new Date();

  var y = date.getFullYear();
  var m1 = date.getMonth() + 1;
  var d = date.getDate();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();

  m1 = m1 < 10 ? '0' + m1 : m1;

  d = d < 10 ? '0' + d : d;

  m = m < 10 ? '0' + m : m;

  s = s < 10 ? '0' + s : s;

  document.getElementById("time").innerHTML = "现在时间为 " + y + "年" + m1 + "月" + d + "日 " + h + "时" + m + "分" + s + "秒";
}

setInterval(showTime, 1000);
</script>
<span id="time"></span>

## 平台介绍
+ [![腾讯视频](/Pic/tencent.svg)](https://v.qq.com/channel/cartoon)
+ [![腾讯视频](/Pic/iqiyi.svg)](https://www.iqiyi.com/comic/)
+ [![优酷](/Pic/youku.svg)](https://youku.com/channel/webcomic)
+ [![bilibili](/Pic/bilibili.svg)](https://www.bilibili.com/anime/)
+ [![70看看](/Pic/70kankan.svg)](http://70kankan.com)

## 模板
```markdown
名字：
更新时间：
展示图片：
本月初最新集：
```
