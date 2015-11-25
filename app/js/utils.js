import Tip from '../compon/tip_compon/tip_compon.js'; 
(function(win){
	var Utils = {

			//android设为true时，为了兼容cordova失效的问题。false时，可为h5页及web页面浏览
			android : true,

			//正则验证
			validator:{
					mobile:function(){

					}
			},

			//发送请求
			sendAjax:function(obj){
				var localSave = obj.localSave || '';

				//如果本地有存储数据，则先进行渲染界面
				if(localSave && localStorage.getItem(localSave)){
						var data = Utils.localLoadJsonStorage(localSave);
						obj.callback(data);
				}

				$.ajax({
					  type: obj.method || 'get',
					  url: obj.url,
					  data: obj.data || {},
					  dataType: 'jsonp',
					  success: function(data){
					    	if (data.status == 200) {
					    			var results = data.data;
									//如果请求数据参数，有localSave 则进行保存到本地存储数据
							  		if(localSave){
						  					var str=JSON.stringify({val:results});

								  			//如果返回数据与本地存储数据一致时，不渲染界面
								  			if(str == localStorage.getItem(localSave)){
								  				return false;
								  			}

								  			Utils.localSaveJsonStorage(localSave,results);
							  		}
							    	obj.callback(results);

							} else{
								//本地有数据console,没有数据则进行交互
								if(localSave){
									console.log('返回数据状态不为200！');
								}else{
						            Tip.init({content:'返回数据状态不为200！'});
						        }
							}

					  },
					  error: function(xhr, type){
					  			//本地有数据console,没有数据则进行交互
					  			if(localSave){
									console.log('Ajax请求数据错误！');
								}else{
						            Tip.init({content:'Ajax请求数据错误！'});
						        }
					  }
				})
			},

			//本地存储 key,val
			localSaveJsonStorage:function(key,val){
				var data = {val:val};
			    var str=JSON.stringify(data);  
			    localStorage.setItem(key,str);
			},

			//提取本地存储数据
			localLoadJsonStorage:function (key){  
			    var str=localStorage.getItem(key);  
			    var data=JSON.parse(str);
			    return data.val;
		    }  

	}
	win.Utils = Utils;

	win.tempData = {}; // 临时数据
	
})(window)