import React from 'react';
import ReactDOM from 'react-dom';
import List from '../../compon/list_compon/list_compon.js';
import Tip from '../../compon/tip_compon/tip_compon.js';
import But from '../../compon/but_compon/but_compon.js';
import Row from '../../compon/row_compon/row_compon.js';
import Radio from '../../compon/radio_compon/radio_compon.js';
import Text from '../../compon/text_compon/text_compon.js';
import './examine.less';



var Step2 = React.createClass({
	getInitialState:function(){
		var RadioData = this.props.radioData,
		    otherId   = this.props.otherId;
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
		    text:[
	        		{name:'借款说明：',description:'请输入贷款说明',id:'description'},
	        		{name:'担保信息：',description:'请输入担保信息',id:'guaranteeInfo'},
	        		{name:'抵押信息：',description:'请输入抵押信息',id:'mortgageInfo'},
	        		{name:'风险措施：',description:'请输入风险措施',id:'riskInfo'}
	        	],
		    but: [
	    				{
					        text:"通  过",
					        id:'open',
					        callback:function(){

					        	var resultJson = {
		              				userId : otherId,
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
									investInterestFee:$('#investInterestFee').val() || $('#investInterestFee').attr('dir'),
									description   : $('#description').val(),
							        guaranteeInfo : $("#guaranteeInfo").val(),
							        mortgageInfo  : $("#mortgageInfo").val(),
							        riskInfo      : $("#riskInfo").val()
		              			};


					        	Utils.sendAjax({
						              url:Api.past,
						              data:resultJson,
						              callback:function(data){ 
						              		if(data.result){
						              				var obj = {
													    button:[{
													        text:'确定',
													        id:'good',
													        callback:function(){
													            Tip.del();
													            localStorage.page = 'release';
													            location.reload();
													        }
													    }],
													    content:'借款审请审批成功！',
													    icon:'succeed' //可选。succeed failed
													}
										        	Tip.init(obj);
						              		}else{
						              				Tip.init({content:'审批失败！'});
						              		}
						              }
					            });
					        	
					        }
					    },
					    {
					        text:"删  除",
					        id:'dele',
					        callback:function(){

					        	Utils.sendAjax({
						              url:Api.delete,
						              data:{id:otherId},
						              callback:function(data){ 
						              		if(data.result){
						              				var obj = {
													    button:[{
													        text:'确定',
													        id:'good',
													        callback:function(){
													            Tip.del();
													            $('#examine_page').html('').scrollTop(0);
										                  		ReactDOM.render(
																    <Step1 />,
																    document.getElementById('examine_page')
																);
													        }
													    }],
													    content:'借款审请删除成功！',
													    icon:'succeed' //可选。succeed failed
													}
										        	Tip.init(obj);
						              		}else{
						              			    Tip.init({content:'删除失败！'});
						              		}
						              }
					            });
					        	
					        }
					    },
					    {
					        text:"返  回",
					        id:'goBack',
					        callback:function(){
					        	$('#examine_page').html('').scrollTop(0);
		                  		ReactDOM.render(
								    <Step1 />,
								    document.getElementById('examine_page')
								);
					        }
					    }
				]
		}
	},
  render: function() {
  	var dataInfo     = this.props.data,
  	    radioData     = this.props.radioData,
  	    Rows     = [],
	    listData = this.state.list;

		listData.forEach(function(item,key){
			if(item.length > 1){
				var name = item[1]['id'];
				if(item[1].click){
					//选择框赋给显示的text
					radioData[name].some(function(o){
						if(o.value == dataInfo[name]){
							item[1].text = o.text;
							return true;
						}
					});
				}
				//输入框及选择框赋给value
				item[1]['newVal'] = dataInfo[name];
				
			}
		    Rows.push(<Row key={key}  data={item} />);
		});
		this.state.text.forEach(function(item){
				item['newVal'] = dataInfo[item.id];
		});

    return (
      <div className="step2">
      		{Rows}
      		<Text data={this.state.text} />
      		<But data={this.state.but} class="buttons" />
      </div>
    );
  }
});

var Step1 = React.createClass({
	getInitialState: function() {  
	    return {
	    		data:[],
	    		but: [
	    				{
					        text:"审  批",
					        id:'list_compon-sp',
					        callback:function(event){
					            var id = $(event.target).parents('.list_compon').data('dir');
					            
					            Utils.sendAjax({
						              url:Api.examineItem,
						              data:{id:id},
						              callback:function(data){ 
						              		var newData = data;
				              				Utils.sendAjax({
									            url:Api.radioData,
									            callback:function(results){ //radioData
								              		$('#examine_page').html('').scrollTop(0);
							                  		ReactDOM.render(
													    <Step2 data={data} otherId={id} radioData={results} />,
													    document.getElementById('examine_page')
													);
												}
											})
						              }
					            });

					        }
					    }
				]
	    }
	},
	oneList : function(item){
		return {
	          title:item.title,
	          id:item.id,
	          list:[
		              [{
		                    text:"唯一号"
		              },{
		                    text:item.uniqueCode,
		                    id:'uniqueCode',
		                    noEditor:true
		              }],
		              [{
		                      text:'产品'
		                },{
		                      text:item.product,
		                      id:'product',
		                      noEditor:true
		              }],
		              [{
		                      text:'借款人'
		                },{
		                      text:item.mobile,
		                      id:'mobile',
		                      noEditor:true
		              }],
		              [{
		                      text:'金额'
		                },{
		                      text:item.amount,
		                      id:'amount',
		                      noEditor:true
		              }],
		              [{
		                      text:'年化利率'
		                },{
		                      text:item.annualRate,
		                      id:'annualRate',
		                      noEditor:true
		              }],
		              [{
		                      text:'最小投资额'
		                },{
		                      text:item.minAmount,
		                      id:'minAmount',
		                      noEditor:true
		              }],
		              [{
		                      text:'最大投资额'
		                },{
		                      text:item.maxAmount,
		                      id:'maxAmount',
		                      noEditor:true
		              }],
		              [{
		                      text:'投资增量'
		                },{
		                      text:item.stepAmount,
		                      id:'stepAmount',
		                      noEditor:true
		              }],
		              [{
		                      text:'状态'
		                },{
		                      text:item.status,
		                      id:'status',
		                      noEditor:true
		              }]
	            ]
	    }
	},//componentDidMount
	componentWillMount:function(){
	    var that = this;
		Utils.sendAjax({
              url:Api.examine,
              localSave:'examine',
              callback:function(data){
              		if(data.results.length>0){
              				var content = [];
              				data.results.forEach(function(item){
          						content.push(that.oneList(item));
              				});
              				that.setState({data: content});
              		}else{
              				Tip.init({content:'暂无审标数据！'});
              		}
              }
        });
	},
	render: function() {
		    var rows = [],that = this;
		    this.state.data.forEach(function(item,key){
		    		rows.push(<List key={key} data={item} but={that.state.but}/>);
		    });
		    
		    return (
		      <div className="step1">
					{rows}
		      </div>
		    );
	}
});


var Examine = React.createClass({
  render: function() {
    return (
      <div className="examine_page" id="examine_page">
       		<Step1 />
      </div>
    );
  }
});

module.exports  = Examine;