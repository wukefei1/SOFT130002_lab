# Lab8设计文档

### 第一题

设置一个全局变量currentPage记录当前页码，把翻页的动画封装成一个函数function setPage(pageNumber)，传入的参数pageNumber为要到达的页码，翻页的时候取消当前页码按钮"on"类型，并更改currentPage的值。向前和向后翻页按钮的onclick事件都调用该函数。其中还需要一个布尔型变量让用户不能在播放动画期间翻页。

### 第二题
设置一个是否需要自动翻页的布尔型变量（在图内时为false，否则为true），并设置一个计时器，每2秒判断一次是否需要翻页。

### 第三题
点击时调用setPage，并传入点击的数字来跳往该页。

### 第四题
点击时将td的contentEditable属性设置为true（可以编辑），然后选中单元格内所有内容，再collapseToStart()一下即可。
td失去焦点时将contentEditable属性重新设置为false。