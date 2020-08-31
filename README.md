## jquery.page

网上随便找的，改了下样式

针对极简单的分页资讯站做的

使用方法极其简单  基于jquery

样子如下：

![image](https://cloud-minapp-30668.cloud.ifanrusercontent.com/1kCcXUNmNcItsiwf.png)

使用方法：

```
    $(".pagination").pageNavigater({
		pageNo: '69',//代表当前页码，可以自行更改测试效果
		pageSize: '10', //每页展示多少数据
		paginationSize: 7,//分页导航栏的长度
		totalNum: '690', //总共有多少数据
		callback: function (pageNo) {	//回调函数
			alert("this is page" + pageNo);
		}
	});
```


样式修改也方便


```
.pagination {
    text-align: center;
}
.pagination .btn_page{
	margin: 0 5px;
	display: inline-block;
    padding: 4px 8px;
    background-color: #fbfbfb;
    border: 1px solid #e7e7e7;
    border-radius: 3px;
	color: #333333;
	font-size: 12px;
	text-decoration: none;
}

.pagination a:hover{
	color: #409eff;
}

.pagination .current_page {
	display: inline-block;
    padding: 5px 15px;
    background-color: #409eff;
    color: #fff;
    border: 1px solid #409eff;
	font-size: 12px;
    border-radius: 3px;
}
/* 做了些移动端的简单适配，只要上一页下一页 */
@media (max-width: 800px) { 
    .pagination {
        overflow: hidden;
    }
    .pagination .btn_page,.pagination .current_page {
        display: none;
    }
    .pagination .prevPage,.pagination .nextPage{
        display: block;
        margin: 0 15px;
    }
    .pagination .prevPage{
        float: left;
    }
    .pagination .nextPage{
        float: right;
    }
}
```
