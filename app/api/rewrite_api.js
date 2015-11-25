(function(win){

	var path = '/app/ajax_json/'
	var Api = {
			login:path+'login.json',  //登陆
			logout:path+'logout.json', //退出

			//建标页面
			queryUser:path+'queryUser.json', //查询用户
			create:path+'create.json', //创建新标 提交申请

			examine:path+'examine.json', //创建新标 提交申请
			examineItem:path+'examineItem.json', //审批
			radioData:path+'radioData.json',//所有选择框表单数据

			past:path+'past.json',//审批通过
			delete:path+'delete.json',//删除审批

			release:path+'release.json',//发标管理列表 startRelease timingRelease
			deleteRelease:path+'deleteRelease.json', //删除发标
			startRelease:path+'startRelease.json', //立即发标
			timingRelease:path+'timingRelease.json', //定时发标
	}
	
	win.Api = Api;
})(window)