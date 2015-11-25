(function(win){

	var DataJson = {

		create:{
			"result": true
		},
		delete:{
			"result": true
		},
		deleteRelease:{
			"result": true
		},
		examine:{
			"results":[
					  	{
					      "id":"88765f76-6c31-48d3-8e38-6997126432ac",
					  	  "mobile":"15223465456",
						  "uniqueCode":"qweqwe",
						  "title":"标题标题标题111sss1111",
						  "product":"管辖同资人借款",
						  "amount":2000000,
						  "minAmount":"100",
						  "maxAmount":"50000",
						  "annualRate":"24.0%",
						  "stepAmount":999,
						  "status":"未处理"
					  	},{
					  	  "id":"6c31-48d3-8e38-6997126432ac",
					  	  "mobile":"15223465456",
						  "uniqueCode":"kghjkgh",
						  "title":"标题标题标题22222",
						  "product":"管辖同资人借款",
						  "amount":2000000,
						  "minAmount":"100",
						  "maxAmount":"50000",
						  "annualRate":"24.0%",
						  "stepAmount":999,
						  "status":"未处理"
					  	},{
					  	  "id":"48d3-8e38-6997126432ac",
					  	  "mobile":"15223465456",
						  "uniqueCode":"76474646",
						  "title":"标题标题标题3333333",
						  "product":"管辖同资人借款",
						  "amount":2000000,
						  "minAmount":"100",
						  "maxAmount":"50000",
						  "annualRate":"24.0%",
						  "stepAmount":999,
						  "status":"未处理"
					  	},{
					  	  "id":"8e38-6997126432ac",
					  	  "mobile":"15223465456",
						  "uniqueCode":"hjjkgjhk",
						  "title":"标题标题标题444444",
						  "product":"管辖同资人借款",
						  "amount":2000000,
						  "minAmount":"100",
						  "maxAmount":"50000",
						  "annualRate":"24.0%",
						  "stepAmount":999,
						  "status":"未处理"
					  	}
		           ]
		},
		examineItem:{
			"id":"88765f76-6c31-48d3-8e38-6997126432ac",
			"uniqueCode":"abcdefg",
			"corporation":"aaaa",
			"guarantyStyle":"4",
			"product":"33",
			"title":"9876543210",
			"usage":"55",
			"type":"400",
			"amount":"1234567890",
			"minAmount":"100",
			"maxAmount":"100000000",
			"stepAmount":"100",
			"yearsMonthsDays":"60",
			"annualRate":"24.0",
			"mortgaged":"1000",
			"paymentMethod":"111",
			"loanGuaranteeFee":"0.5",
			"loanServiceFee":"0.4",
			"loanRiskFee":"0.3",
			"loanManageFee":"0.2",
			"loanInterestFee":"0.1",
			"investInterestFee":"99.00",
			"description":"贷款说明",
			"guaranteeInfo":"担保信息",
			"mortgageInfo":"抵押信息",
			"riskInfo":"风险措施"
		},
		login:{
			"result": true
		},
		logout:{
			"result": true
		},
		past:{
			"result": true
		},
		queryUser:{
			"result": true,
		
		  "allowNoPwdRepay" : true,
		  "hasUserCredit" : 1,
		  "hasAccount" : true,
		  "user" : {
			    "borrower" : true,
			    "plainPassword" : null,
			    "id" : "88765f76-6c31-48d3-8e38-6997126432ac",
			    "channel" : null,
			    "clientcode" : "JXJR",
			    "email" : null,
			    "employeeid" : null,
			    "enabled" : true,
			    "enterprise" : false,
			    "groupid" : null,
			    "idnumber" : "513401198411116911",
			    "lastlogindate" : 1447658457000,
			    "lastmodifiedby" : null,
			    "loginname" : "13811891613",
			    "mobile" : "13111111114",
			    "name" : "解小娟",
			    "needchangepassword" : false,
			    "passphrase" : "92d17e9294108b35f9675aa28c8358d751ab48cd",
			    "referralrewarded" : null,
			    "registerdate" : 1436179266000,
			    "registryrewarded" : null,
			    "salt" : "UzVlMXAzIDQxMDIxLDEgOTI4MDQxMTUxIDE0MTo2MjkwMSAxUE0=",
			    "source" : "2323",
			    "referralId" : null,
			    "referralRealm" : null,
			    "inviteCode" : "K17REP",
			    "inviteByCodeId" : null,
			    "appMarket" : null,
			    "appVesion" : null,
			    "imei" : null
		  }
		},
		radioData:{
			"corporation":[
						{"text":"无","value":""},
						{"text":"第一个测试企业","value":"aaaa"}
				],
				"guarantyStyle":[
			    		{"text":"无","value":""},
			    		{"text":"保证","value":"1"},
			    		{"text":"抵押","value":"2"},
			    		{"text":"质押","value":"3"},
			    		{"text":"留置","value":"4"},
			    		{"text":"定金","value":"5"}
				],
				"product":[
				    	{"text":"无","value":""},
				    	{"text":"管辖基金出资人借款","value":"11"},
				    	{"text":"已投企业借款","value":"22"},
				    	{"text":"上市公司股东借款","value":"33"}
			    ],
				"usage":[
				    	{"text":"无","value":""},
				    	{"text":"短期周转","value":"11"},
				    	{"text":"个人信贷","value":"22"},
				    	{"text":"投资创业","value":"33"},
				    	{"text":"车辆融资","value":"44"},
				    	{"text":"房产融资","value":"55"},
				    	{"text":"企业融资","value":"66"},
				    	{"text":"其它借款","value":"77"}
			    ],
				"type":[
				    	{"text":"无","value":""},
				    	{"text":"普通标","value":"100"},
				    	{"text":"信用标","value":"200"},
				    	{"text":"担保标","value":"300"},
				    	{"text":"新手标","value":"400"}
			    ],
				"mortgaged":[
				    	{"text":"无","value":""},
				    	{"text":"无抵押-信用借款","value":"1000"},
				    	{"text":"房产-抵押","value":"2000"},
				    	{"text":"土地(包括山林渔牧)-抵押","value":"3000"},
				    	{"text":"厂房库房-抵押","value":"4000"},
				    	{"text":"商品库存-抵押","value":"5000"}
			    ],
				"paymentMethod":[
				    	{"text":"无","value":""},
				    	{"text":"是，一次性还本付息","value":"111"},
				    	{"text":"否，一次性还本付息","value":"222"}
			    ]
		},
		release:{
			"results":[{
		    "id":"88765f76-6c31-48d3-8e38-6997126432ac",
		    "title":"账单邮件发送111111111111",
			"usage":"55",
			"amount":"1234567890",
			"paymentMethod":"111",
			"annualRate":"24.0",
			"yearsMonthsDays":"60"
			},{
		    "id":"88765f76-6c31-48d3-8e38-6997126432ac",
		    "title":"账单邮件发送2222222",
			"usage":"55",
			"amount":"1234567890",
			"paymentMethod":"111",
			"annualRate":"24.0",
			"yearsMonthsDays":"60"
			},{
		    "id":"88765f76-6c31-48d3-8e38-6997126432ac",
		    "title":"账单邮件发送3333333333",
			"usage":"55",
			"amount":"1234567890",
			"paymentMethod":"111",
			"annualRate":"24.0",
			"yearsMonthsDays":"60"
			},{
		    "id":"88765f76-6c31-48d3-8e38-6997126432ac",
		    "title":"账单邮件发送44444444",
			"usage":"55",
			"amount":"1234567890",
			"paymentMethod":"111",
			"annualRate":"24.0",
			"yearsMonthsDays":"60"
			},{
		    "id":"88765f76-6c31-48d3-8e38-6997126432ac",
		    "title":"账单邮件发送55555555555",
			"usage":"55",
			"amount":"1234567890",
			"paymentMethod":"111",
			"annualRate":"24.0",
			"yearsMonthsDays":"60"
			}]
		},
		startRelease:{
			"result": true
		},
		timingRelease:{
			"result": true
		}	

	};

	var Api = {
			login:'login',  //登陆
			logout:'logout', //退出

			//建标页面
			queryUser:'queryUser', //查询用户
			create:'create', //创建新标 提交申请

			examine:'examine', //创建新标 提交申请
			examineItem:'examineItem', //审批
			radioData:'radioData',//所有选择框表单数据

			past:'past',//审批通过
			delete:'delete',//删除审批

			release:'release',//发标管理列表 startRelease timingRelease
			deleteRelease:'deleteRelease', //删除发标
			startRelease:'startRelease', //立即发标
			timingRelease:'timingRelease', //定时发标
	}
	
	win.Api = Api;

	win.DataJson = DataJson;

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
				var data = DataJson[obj.url];
				obj.callback(data);
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