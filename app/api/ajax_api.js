(function(win){

	var path = 'http://www.jdgl.com/jdgl/index.php/Home/Index/';
	var Api = {
			login:path+'login',  //登陆
			logout:path+'logout', //退出

			//建标页面
			queryUser:path+'queryUser', //查询用户
			create:path+'create', //创建新标 提交申请

			examine:path+'examine', //创建新标 提交申请
			examineItem:path+'examineItem', //审批
			radioData:path+'radioData',//所有选择框表单数据

			past:path+'past',//审批通过
			delete:path+'delete',//删除审批

			release:path+'release',//发标管理列表 startRelease timingRelease
			deleteRelease:path+'deleteRelease', //删除发标
			startRelease:path+'startRelease', //立即发标
			timingRelease:path+'timingRelease', //定时发标
	}
	
	win.Api = Api;
})(window)