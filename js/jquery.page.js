/**
 * @author james.xu 2015-01-21
 */
(function ($) {
	"use strict";
	
	$.fn.pageNavigater = function(options) {
		var settings = {
			pageNo : 1,
			pageSize : 5,
			paginationSize : 5,
			totalNum : 1,
			callback : function(pageNo) {

			}
		};
		$.extend(settings, options);
		var pageNo = Number(settings.pageNo);
		var pageSize = Number(settings.pageSize);
		var paginationSize = Number(settings.paginationSize);
		var totalNum = Number(settings.totalNum);

		var div_pagination = $(this);
		if (div_pagination.length <= 0) {
			console.log("need a container to initialize");
			return;
		}

		if (isNaN(pageNo)) {
			div_pagination.html("pageNo should be a number");
			return;
		}

		if (isNaN(pageSize)) {
			div_pagination.html("pageSize should be a number");
			return;
		}

		if (isNaN(paginationSize)) {
			div_pagination.html("paginationSize should be a number");
			return;
		}

		if (isNaN(totalNum)) {
			div_pagination.html("totalNum should be a number");
			return;
		}

		if (pageNo < 1)
			pageNo = 1;

		if (pageSize < 1)
			pageSize = 1;

		if (totalNum < 0)
			totalNum = 0;

		if (paginationSize < 1)
			paginationSize = 1;

		if (totalNum == 0) {
			div_pagination.html("");
			return;
		}

		div_pagination
				.append('<a class="firstPage btn_page" href="javascript:void(0);">首页</a>')
		if (pageNo != 1) {
			div_pagination
					.append('<a class="prevPage btn_page" href="javascript:void(0);">上一页</a>');
		}

		var lastPageNo = getLastPageNo(pageSize, totalNum);
		var halfPaginationSize = parseInt(paginationSize / 2);
		if (lastPageNo <= paginationSize) {
			for (var i = 1; i <= lastPageNo; i++) {
				if (i == pageNo) {
					div_pagination.append('<span class="current_page">' + i + '</span>');
				} else {
					div_pagination
							.append('<a class="btn_page" href="javascript:void(0);">'
									+ i + '</a>');
				}
			}
		} else {
			if (pageNo > (lastPageNo - halfPaginationSize)) {
				for (var i = lastPageNo - paginationSize + 1; i <= lastPageNo; i++) {
					if (i == pageNo) {
						div_pagination.append('<span class="current_page">' + i + '</span>');
					} else {
						div_pagination
								.append('<a class="btn_page" href="javascript:void(0);">'
										+ i + '</a>');
					}
				}
			} else {
				if ((paginationSize % 2) == 0) {
					if (pageNo > (halfPaginationSize)) {
						for (var i = pageNo - halfPaginationSize + 1; i <= pageNo
								+ halfPaginationSize; i++) {
							if (i == pageNo) {
								div_pagination.append('<span class="current_page">' + i
										+ '</span>');
							} else {
								div_pagination
										.append('<a class="btn_page" href="javascript:void(0);">'
												+ i + '</a>');
							}
						}
					} else {
						for (var i = 1; i <= paginationSize; i++) {
							if (i == pageNo) {
								div_pagination.append('<span class="current_page">' + i
										+ '</span>');
							} else {
								div_pagination
										.append('<a class="btn_page" href="javascript:void(0);">'
												+ i + '</a>');
							}
						}
					}
				} else {
					if (pageNo > (halfPaginationSize + 1)) {
						for (var i = pageNo - halfPaginationSize; i <= pageNo
								+ halfPaginationSize; i++) {
							if (i == pageNo) {
								div_pagination.append('<span class="current_page">' + i
										+ '</span>');
							} else {
								div_pagination
										.append('<a class="btn_page" href="javascript:void(0);">'
												+ i + '</a>');
							}
						}
					} else {
						for (var i = 1; i <= paginationSize; i++) {
							if (i == pageNo) {
								div_pagination.append('<span class="current_page">' + i
										+ '</span>');
							} else {
								div_pagination
										.append('<a class="btn_page" href="javascript:void(0);">'
												+ i + '</a>');
							}
						}
					}
				}

			}
		}
		if (pageNo != lastPageNo) {
			div_pagination
					.append('<a class="btn_page nextPage" href="javascript:void(0);">下一页</a>');
		}
		div_pagination
				.append('<a class="btn_page lastPage" href="javascript:void(0);">尾页</a>')
		$(".btn_page").click(function() {
			if ($(this).attr("class").indexOf("firstPage") >= 0) {
				settings.callback('1');
				return;
			} else if ($(this).attr("class").indexOf("prevPage") >= 0) {
				settings.callback(pageNo - 1);
				return;
			} else if ($(this).attr("class").indexOf("nextPage") >= 0) {
				settings.callback(pageNo + 1);
				return;
			} else if ($(this).attr("class").indexOf("lastPage") >= 0) {
				settings.callback(lastPageNo);
				return;
			} else {
				settings.callback($(this).text());
			}
		})
	}

	function getLastPageNo(pageSize, totalNum) {
		var lastPageNo = parseInt(totalNum / pageSize);
		if ((totalNum % pageSize) != 0) {
			lastPageNo++;
		}
		return lastPageNo;
	}
})(jQuery);


