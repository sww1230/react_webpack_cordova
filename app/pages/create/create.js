import React from 'react';
import ReactDOM from 'react-dom';
import But from '../../compon/but_compon/but_compon.js';
import Tip from '../../compon/tip_compon/tip_compon.js';
import Row from '../../compon/row_compon/row_compon.js';
import Radio from '../../compon/radio_compon/radio_compon.js';
import Text from '../../compon/text_compon/text_compon.js';
import './create.less';


var Step4 = React.createClass({
	getInitialState: function() {  
	    return {
	    	but: [{
	              text:"上一步",
	              id:'createPrevStep4',
	              callback:function(){
	              		$('#create_page').html('').scrollTop(0);
	              		var data = tempData.step4;
                  		ReactDOM.render(
						    <Step3 data={data} keyCallback='step4' />,
						    document.getElementById('create_page')
						);
	              }
	          },{
	              text:"提交申请",
	              id:'createSubmit',
	              callback:function(){
		              	if($('#description').val()){

		              		tempData.step4.description   = $('#description').val();
					        tempData.step4.guaranteeInfo = $("#guaranteeInfo").val();
					        tempData.step4.mortgageInfo  = $("#mortgageInfo").val();
					        tempData.step4.riskInfo      = $("#riskInfo").val();

		              		Utils.sendAjax({
					              url:Api.create,
					              data:tempData.step4,
					              callback:function(data){
					                  if(data.result){
					                  		var obj = {
											    button:[{
											        text:'确定',
											        id:'good',
											        callback:function(){
											            Tip.del();
											            localStorage.page = 'examine';
											            location.reload();
											        }
											    }],
											    content:'提交申请成功！',
											    icon:'succeed' //可选。succeed failed
											}
					                  		Tip.init(obj);
					                  }else{
					                     	Tip.init({content:'提交申请失败！'});
					                  }
					              }
					           });
		              	}else{
		              			Tip.init({content:'请输入贷款说明！'});
		              	}
	              }
	        }],

	        text:[
	        		{name:'借款说明：',description:'请输入贷款说明',id:'description'},
	        		{name:'担保信息：',description:'请输入担保信息',id:'guaranteeInfo'},
	        		{name:'抵押信息：',description:'请输入抵押信息',id:'mortgageInfo'},
	        		{name:'风险措施：',description:'请输入风险措施',id:'riskInfo'}
	        	]
	    }
	},
    render: function() {
	    return (
		      <div className="step4">
		      		<Text data={this.state.text}/>
		      		<But data={this.state.but}  callbackData={this.props.data} keyCallback='step4' class="g_mt20" />
		      </div>
	    );
    }
});

var Step3 = React.createClass({
  getInitialState: function() {  
  		var RadioData = this.props.radioData;
	    return {
	    	list:[
			      [{
			            text:'借款唯一号'
			      },{
			            text:'输入唯一号',
			            id:'uniqueCode'
			      }],
			      [{
			              text:'担保公司'
			        },{
			              text:'无',
			              id:'corporation',
			              click:true,
			              newVal:'无',
			              callback:function(){
			              	    var obj = {
								    button:[{
								        text:'确定',
								        id:'good',
								        callback:function(){
								            Radio.result() && $('#corporation').html(Radio.result()).attr('dir',Radio.value());
								            Radio.del();
								        }
								    },{
								        text:'取消',
								        id:'cancel',
								        callback:function(){
								            Radio.del();
								        }
								    }],
								    content:RadioData.corporation
								}
								Radio.init(obj);
			              }
			      }],
			      [{
			              text:'担保方式'
			        },{
			              text:'无',
			              id:'guarantyStyle',
			              click:true,
			              newVal:'无',
			              callback:function(){
			              	    var obj = {
								    button:[{
								        text:'确定',
								        id:'good',
								        callback:function(){
								            Radio.result() && $('#guarantyStyle').html(Radio.result()).attr('dir',Radio.value());
								            Radio.del();
								        }
								    },{
								        text:'取消',
								        id:'cancel',
								        callback:function(){
								            Radio.del();
								        }
								    }],
								    content:RadioData.guarantyStyle
								}
								Radio.init(obj);
			              }
			      }],
			      [{
			              text:'产品归类'
			        },{
			              text:'无',
			              id:'product',
			              click:true,
			              callback:function(){
			              	    var obj = {
								    button:[{
								        text:'确定',
								        id:'good',
								        callback:function(){
								            Radio.result() && $('#product').html(Radio.result()).attr('dir',Radio.value());
								            Radio.del();
								        }
								    },{
								        text:'取消',
								        id:'cancel',
								        callback:function(){
								            Radio.del();
								        }
								    }],
								    content:RadioData.product
								}
								Radio.init(obj);
			              }
			      }],
			      [
			      	{text:'借款标题'},
			      	{text:'请输入借款标题',id:'title'}
			      ],
			      [
			      	{text:'借款用途'},
			      	{text:'短期周转',newVal:11,id:'usage',click:true,callback:function(){
			      		var obj = {
							    button:[{
							        text:'确定',
							        id:'good',
							        callback:function(){
							            Radio.result() && $('#usage').html(Radio.result()).attr('dir',Radio.value());
							            Radio.del();
							        }
							    },{
							        text:'取消',
							        id:'cancel',
							        callback:function(){
							            Radio.del();
							        }
							    }],
							    content:RadioData.usage
							}
							Radio.init(obj);
			      	}}
			      ],
			      [
			      	{text:'标的类型'},
			      	{text:'普通标',newVal:100,id:'type',click:true,callback:function(){
			      		var obj = {
							    button:[{
							        text:'确定',
							        id:'good',
							        callback:function(){
							            Radio.result() && $('#type').html(Radio.result()).attr('dir',Radio.value());
							            Radio.del();
							        }
							    },{
							        text:'取消',
							        id:'cancel',
							        callback:function(){
							            Radio.del();
							        }
							    }],
							    content:RadioData.type
							}
							Radio.init(obj);
			      	}}
			      ],
			      [
			      	{text:'借款金额'},
			      	{text:'1~100,000,000的整数',id:'amount'},
			      	{text:'元',id:'money'}
			      ],
			      [
			      	{text:'最小投资额'},
			      	{newVal:100,id:'minAmount'}
			      ],
			      [
			      	{text:'最大投资额'},
			      	{newVal:100000000,id:'maxAmount'}
			      ],
			      [
			      	{text:'投资增量'},
			      	{newVal:100,id:'stepAmount'}
			      ],
			      [
			      	{text:'借款期限'},
			      	{newVal:60,id:'yearsMonthsDays'},
			      	{text:'日',id:'money'}
			      ],
			      [
			      	{text:'年利率'},
			      	{newVal:'24.0',id:'annualRate'},
			      	{text:'% 范围:0-24',id:'range'}
			      ],
			      [
			      	{text:'抵押品'},
			      	{text:'无抵押-信用借款',
			      	  id:'mortgaged',
			      	  click:true,
			      	  newVal:1000,
			      	  callback:function(){
			      		var obj = {
						    button:[{
						        text:'确定',
						        id:'good',
						        callback:function(){
						            Radio.result() && $('#mortgaged').html(Radio.result()).attr('dir',Radio.value());
						            Radio.del();
						        }
						    },{
						        text:'取消',
						        id:'cancel',
						        callback:function(){
						            Radio.del();
						        }
						    }],
						    content:RadioData.mortgaged
						}
						Radio.init(obj);
			      	}}
			      ],
			      [{
			            text:'还款方式'
			      },{
			            text:'是，一次性还本付息',
			            id:'paymentMethod',
			            click:true,
			            newVal:'111',
			            callback:function(){
			            	var obj = {
						    button:[{
						        text:'确定',
						        id:'good',
						        callback:function(){
						            Radio.result() && $('#paymentMethod').html(Radio.result()).attr('dir',Radio.value());
						            Radio.del();
						        }
						    },{
						        text:'取消',
						        id:'cancel',
						        callback:function(){
						            Radio.del();
						        }
						    }],
						    content:RadioData.paymentMethod
						}
						Radio.init(obj);
			            }
			      }],

			      [
			      	{text:'服务费率设置：',id:'fwflsz',noEditor:true}
			      ],
			      [
			      	{text:'担保费率'},
			      	{id:'loanGuaranteeFee',newVal:'0.00'},
			      	{text:'%',id:'money'}
			      ],
			      [
			      	{text:'服务费率'},
			      	{id:'loanServiceFee',newVal:'0.00'},
			      	{text:'%',id:'money'}
			      ],
			      [
			      	{text:'风险管理费率'},
			      	{id:'loanRiskFee',newVal:'0.00'},
			      	{text:'%',id:'money'}
			      ],
			      [
			      	{text:'借款管理费率'},
			      	{id:'loanManageFee',newVal:'0.00'},
			      	{text:'%',id:'money'}
			      ],

			      [
			      	{text:'还款借款利息管理费率',id:'minFont'},
			      	{id:'loanInterestFee',newVal:'0.00'},
			      	{text:'%',id:'money'}
			      ],
			      [
			      	{text:'回款投资利息管理费率',id:'minFont'},
			      	{id:'investInterestFee',newVal:'0.00'},
			      	{text:'%',id:'money'}
			      ]
		    ],
	    	but: [{
	              text:"上一步",
	              id:'createPrevStep3',
	              callback:function(){
	              		$('#create_page').html('').scrollTop(0);
	              		var data = tempData.step2;
                  		ReactDOM.render(
						    <Step2 data={data} />,
						    document.getElementById('create_page')
						);
	              }
	          },{
	              text:"下一步",
	              id:'createNextStep3',
	              callback:function(){

	              		if(!$('#uniqueCode').val()){
	              			Tip.init({content:'请输入借款唯一号！'});
	              			return false;
	              		}else if(!$('#product').attr('dir')){
	              			Tip.init({content:'请选择产品类型！'});
	              			return false;
	              		}else if(!$('#title').val()){
	              			Tip.init({content:'请输入借款标题！'});
	              			return false;
	              		}else if(!$('#amount').val()){
	              			Tip.init({content:'请输入借款金额！'});
	              			return false;
	              		}else{
	              			var resultJson = {
	              				userId : tempData.step2.user.id,
	              				uniqueCode:$('#uniqueCode').val() || $('#uniqueCode').attr('dir'), 
								corporation:$('#corporation').attr('dir') == '无' ? '' : $('#corporation').attr('dir'),
								guarantyStyle:$('#guarantyStyle').attr('dir') == '无' ? '' : $('#guarantyStyle').attr('dir'),
								product:$('#product').val() || $('#product').attr('dir'),
								title:$('#title').val() || $('#title').attr('dir'),
								usage:$('#usage').val() || $('#usage').attr('dir'),
								type:$('#type').val() || $('#type').attr('dir'),
								amount:$('#amount').val() || $('#amount').attr('dir'),
								minAmount:$('#minAmount').val() || $('#minAmount').attr('dir'),
								maxAmount:$('#maxAmount').val() || $('#maxAmount').attr('dir'),
								stepAmount:$('#stepAmount').val() || $('#stepAmount').attr('dir'),
								yearsMonthsDays:$('#yearsMonthsDays').val() || $('#yearsMonthsDays').attr('dir'),
								annualRate:$('#annualRate').val() || $('#annualRate').attr('dir'),
								mortgaged:$('#mortgaged').val() || $('#mortgaged').attr('dir'),
								paymentMethod:$('#paymentMethod').val() || $('#paymentMethod').attr('dir'),
								loanGuaranteeFee:$('#loanGuaranteeFee').val() || $('#loanGuaranteeFee').attr('dir'),
								loanServiceFee:$('#loanServiceFee').val() || $('#loanServiceFee').attr('dir'),
								loanRiskFee:$('#loanRiskFee').val() || $('#loanRiskFee').attr('dir'),
								loanManageFee:$('#loanManageFee').val() || $('#loanManageFee').attr('dir'),
								loanInterestFee:$('#loanInterestFee').val() || $('#loanInterestFee').attr('dir'),
								investInterestFee:$('#investInterestFee').val() || $('#investInterestFee').attr('dir')
	              			};

		              		$('#create_page').html('').scrollTop(0);
	                  		ReactDOM.render(
							    <Step4 data={resultJson} />,
							    document.getElementById('create_page')
							);
						}
	              }
	          }]
	    }
  },
  render: function() {
  	var Rows     = [],
	    listData = this.state.list;

	

	var keyInfo = this.props.keyCallback;
	var dataInfo = this.props.data;

	if(keyInfo == 'step2'){
		listData.forEach(function(item,key){
		    Rows.push(<Row key={key}  data={item} />);
		});
	}else if(keyInfo == 'step4'){
		//判断是不是Step4回来的CallbackData
		listData.forEach(function(item,key){
			if(item.length > 1){
				item[1]['newVal'] = dataInfo[item[1]['id']];
			}
		    Rows.push(<Row key={key}  data={item} />);
		});
	}

    return (
       <div className="step3">
       		{Rows}
      		<But data={this.state.but}  keyCallback='step3' class="g_mt20" />
      </div>
    );
  }
});

var Step2 = React.createClass({
	getInitialState: function() {  
	    return {
	    	list:[
			      [{
			            text:'真实姓名'
			      },{
			            text:'',
			            id:'name',
			            noEditor:true
			      }],
			      [{
			              text:'身份证号'
			        },{
			              text:'',
			              id:'idnumber',
			              noEditor:true
			      }],
			      [{
			            text:'手机号码'
			      },{
			            text:'',
			            id:'mobile',
			            noEditor:true
			      }],
			      [{
			              text:'是否开户'
			        },{
			              text:'',
			              id:'hasAccount',
			              noEditor:true
			      }],
			      [{
			            text:'无密还款协议'
			      },{
			            text:'',
			            id:'allowNoPwdRepay',
			            noEditor:true
			      }],
			      [{
			              text:'是否借款人'
			        },{
			              text:'',
			              id:'borrower',
			              noEditor:true
			      }]
		    ],
	        but: [{
	              text:"上一步",
	              id:'createPrevStep2',
	              callback:function(){
	              		$('#create_page').html('').scrollTop(0);
                  		ReactDOM.render(
						    <Step1 />,
						    document.getElementById('create_page')
						);
	              }
	          },{
	                text:"下一步",
	                id:'createNextStep2',
	                callback:function(){
	                	if($('#hasAccount').val() == '未开户'){
	                		var obj = {
							    content:'您还没有开户！',
							    icon:'failed'
							}
							Tip.init(obj);
							return false;
	                	}else if($('#allowNoPwdRepay').val() == '未签订'){
	                		var obj = {
							    content:'您还没有签订无密还款协议！',
							    icon:'failed'
							}
							Tip.init(obj);
							return false;
	                	}else if($('#borrower').val() == '否'){
	                		var obj = {
							    content:'您还不是借款人！',
							    icon:'failed'
							}
							Tip.init(obj);
							return false;
	                	}else{

              				Utils.sendAjax({
					            url:Api.radioData,
					            callback:function(results){ //radioData
					            	$('#create_page').html('').scrollTop(0);
			                		var data = tempData.step2;
			                  		ReactDOM.render(
									    <Step3 data={data} keyCallback='step2' radioData={results} />,
									    document.getElementById('create_page')
									);
								}
							})

	                	}
	                }
	              }]
	    }
	},
	render: function() {
			var Rows     = [],
			    listData = this.state.list,
			    data     = this.props.data;
			//Step2.data = data;
			

			listData.forEach(function(item,key){
				if(item[1].id == 'allowNoPwdRepay'){
					item[1].text = data[item[1].id] ? '已签订' : '未签订';
				}else if(item[1].id == 'hasAccount'){
					item[1].text = data[item[1].id] ? '已开户' : '未开户';
				}else if(item[1].id == 'borrower'){
					item[1].text = data.user[item[1].id] ? '是' : '否';
				}else{
					item[1].text = data.user[item[1].id];
				}
			    Rows.push(<Row key={key}  data={item} />);
			});
			
		    return (
		      <div className="step2">
		      		{Rows}
		      		<But data={this.state.but} callbackData={data} keyCallback='step2' class="g_mt20" />
		      </div>
		    );
	}
});

var Step1 = React.createClass({
	getInitialState: function() {  
	    return {
	        form:[
	                [{
	                    text:'请输入注册用户手机或登录名',
	                    id:'mobile'
	                }]
	             ],
	        but: [{
	                text:"查询",
	                id:'query',
	                callback:function(){
	                	if($('#mobile').val()){
		                   	   Utils.sendAjax({
					              url:Api.queryUser,
					              data:{regedUserLoginName:$('#mobile').val()},
					              callback:function(data){
					                  if(data.result){

					                  		$('#create_page').html('').scrollTop(0);
					                  		ReactDOM.render(
											    <Step2 data={data}/>,
											    document.getElementById('create_page')
											);

					                  }else{
					                     	Tip.init({content:'请输入已注册过的用户或手机号！'});
					                  }
					              }
					           });
					    }else{
					    	Tip.init({content:'请输入已注册过的用户或手机号！'});
					    }
	                }
	              }]
	    }
	},
	render: function() {
		    return (
		      <div className="step1">
		      		<Row data={this.state.form[0]} />
		      		<But data={this.state.but} class="g_mt50" />
		      </div>
		    );
	}
});

var Create = React.createClass({
  render: function() {
    return (
      <div className="create_page" id="create_page">
      		<Step1 />
      </div>
    );
  }
});

module.exports  = Create;