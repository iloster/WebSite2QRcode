function getCurrentTabUrl(callback)
{
	//获取当前标签的网址和标题
	chrome.tabs.getSelected(function(tab)
		{
			var tabUrl = tab.url;
			var tabTitle = tab.title;
			callback(tabUrl,tabTitle);
		});
}

//监听点击时间
document.addEventListener('DOMContentLoaded', function() {
	 getCurrentTabUrl(function(tabUrl,tabTitle)
	 	{
	 		 var website = document.getElementById('website');
	 		 var title = document.getElementById('title');
	 		 website.textContent = "网址: " + tabUrl;
	 		 title.textContent = "标题: " + tabTitle;
	 		 //生成二维码
    		jQuery('#QRcode').qrcode(tabUrl);
	 	});

});

// document.addEventListener('DOMContentLoaded', function() {
//   	 var imageResult = document.getElementById('status');	 
//   	  chrome.tabs.getSelected(function(tab) {
//         var url = tab.url;
//     	imageResult.textContent = url;
//     	jQuery('#output').qrcode(url);
// 	});

// });