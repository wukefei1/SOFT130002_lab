LAB 4 设计文档
-------------------
## 效果图展示

![示例1](/images/示例1.png)
![示例2](/images/示例2.png)
![示例3](/images/示例3.png)

## 布局介绍
-------------------
### 导航栏
借鉴了网上的代码，鼠标位于 我的账户 上时会显示下拉菜单。

### 轮播图
采用bootstrap中的carousel,设置自动切换时间为3秒，鼠标移入时停止切换。

```
<div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="3000" data-pause="hover" data-wrap="true">
```

### 图片展示
采用了table，设置了border-collapse使元素分离，并设置了阴影和圆角效果。
```
.box table {
    position: relative;
    right: -80px;
    border-style: solid none;
    border-width: 40px;
    border-color: rgb(250, 255, 255);
    border-collapse: separate;
    border-spacing: 40px 40px;
}
```

### 页脚
没有什么特别的，左边的文字，中间的图片。

### 工具栏
回到顶部按钮和刷新按钮，其中回到顶部按钮在下拉一定距离后才可见，在回到顶部的过程中有动画效果。