import React from 'react';
import ReactDOM from 'react-dom';
import List from '../../compon/list_compon/list_compon.js';
import Tip from '../../compon/tip_compon/tip_compon.js';
import But from '../../compon/but_compon/but_compon.js';
import Row from '../../compon/row_compon/row_compon.js';
import './release.less';


var Timing = React.createClass({
	getInitialState:function(){
		return ({
			listData:[
				          	[
				          		{text:'开标时间：'},
				          		{text:'例 2015-01-01 01:00',id:'dataTime'}
				          	],
				          	[
				          		{text:'筹款周期：'},
				          		{text:'6',id:'hour'},
				          		{text:'小时'}
				          	],
				          	[
				          		{text:'错误信息',id:'error',noEditor:true}
				          	]
			          ]
		});
	},
	render:function(){
		var Rows     = [];
		this.state.listData.forEach(function(item,key){
		    Rows.push(<Row key={key}  data={item} />);
		});
		return (
				<div className="timing">
						{Rows}
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
					        text:"立即发布",
					        id:'list_compon-ljfb',
					        callback:function(event){
					            var id = $(event.target).parents('.list_compon').data('dir');
					            Utils.sendAjax({
						              url:Api.startRelease,
						              data:{id:id},
						              callback:function(data){ 
						              		    if(data.result){
							              				var obj = {
														    button:[{
														        text:'确定',
														        id:'good',
														        callback:function(){
														            Tip.del();
														            $('#release_page').html('').scrollTop(0);
											                  		ReactDOM.render(
																	    <Step1 />,
																	    document.getElementById('release_page')
																	);
														        }
														    }],
														    content:'发布成功！',
														    icon:'succeed' //可选。succeed failed
														}
											        	Tip.init(obj);
							              		}else{
							              			    Tip.init({content:'发布失败！'});
							              		}
						              }
					            });

					        }
					    },{
					    	text:"定时调度",
					    	id:'list_compon-timeDd',
					        callback:function(event){
					        	var id = $(event.target).parents('.list_compon').data('dir');
					        	//timingRelease
					        	var obj = {
								    button:[{
								        text:'发  布',
								        id:'fabu',
								        callback:function(){

											var Reg1 = /^(\d{4}-\d{2}-\d{2}) (\d{2}):(\d{2})$/,
											    time = $("#dataTime").val(),
											    hour = $("#hour").val();
											    
											if(!time || !Reg1.test(time)){
												$('#error').show().html('请按例子格式认真填写！');
											}else if(!hour || !/^\d{1,}$/.test(hour)){
												$('#error').show().html('筹款周期不能为空！');
											}else{

												//调度发送的数据
												var timeData = {
												    id         : id,
												    timeOpen   : time.split(' ')[0],
												    timeHour   : time.split(' ')[1].split(':')[0],
												    timeMinute : time.split(' ')[1].split(':')[1],
												    timeOut    : hour
												}

												//调度请求返回时执行该方法
												var resultCallback = function(text,succeedFun){
														$('#tipBox .but_compon').hide();
														$('#timing').html('<div>'+text+'</div><div class="g_mt20 g_f2 g_Gray2"><span id="num">5</span>秒</div>');
														
														var forEach = function(){
															var outTime = setTimeout(function(){
																	var num = $("#num").text() - 1;
																	if(!num){
																		clearTimeout(outTime);
																		Tip.del();
																		succeedFun && succeedFun();
																	}else{
																		$("#num").html(num);
																		forEach();
																	}
																	
															},1000);
														}
														forEach();
												}

												//发送请求
												Utils.sendAjax({
										              url:Api.timingRelease,
										              data:timeData,
										              callback:function(data){ 
										              		if(data.result){
										              				resultCallback('定时调度成功！',function(){
										              					$('#release_page').html('').scrollTop(0);
												                  		ReactDOM.render(
																		    <Step1 />,
																		    document.getElementById('release_page')
																		);
										              				});
										              		}else{
										              				resultCallback('定时调度失败！');
										              		}
										              }
									            });
												

											}
								        }
								    },{
								    	text:'取  消',
								    	id:'cancel',
								    	callback:function(){
								    		Tip.del();
								    	}
								    }],
								    content:'<div id="timing"></div>'
								}
					        	Tip.init(obj);

					        	$('#timing').html('');
		                  		ReactDOM.render(
								    <Timing />,
								    document.getElementById('timing')
								);

					        }
					    },{
					    	text:"删  除",
					    	id:'list_compon-deleted',
					        callback:function(event){
					        		var id = $(event.target).parents('.list_compon').data('dir');
					        		Utils.sendAjax({
							              url:Api.deleteRelease,
							              data:{id:id},
							              callback:function(data){ 
							              		if(data.result){
							              				var obj = {
														    button:[{
														        text:'确定',
														        id:'good',
														        callback:function(){
														            Tip.del();
														            $('#release_page').html('').scrollTop(0);
											                  		ReactDOM.render(
																	    <Step1 />,
																	    document.getElementById('release_page')
																	);
														        }
														    }],
														    content:'发标删除成功！',
														    icon:'succeed' //可选。succeed failed
														}
											        	Tip.init(obj);
							              		}else{
							              			    Tip.init({content:'发标删除失败！'});
							              		}
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
		                    text:"用途"
		              },{
		                    text:item.usage,
		                    id:'usage',
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
		                      text:'还款方式'
		                },{
		                      text:item.paymentMethod,
		                      id:'paymentMethod',
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
		                      text:'期限'
		                },{
		                      text:item.yearsMonthsDays,
		                      id:'yearsMonthsDays',
		                      noEditor:true
		              }]
	            ]
	    }
	},//componentDidMount
	componentWillMount:function(){
	    var that = this;
		Utils.sendAjax({
              url:Api.release,
              localSave:'release',
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

var Release = React.createClass({
  render: function() {
    return (
      <div className="release_page" id="release_page">
       		<Step1 />
      </div>
    );
  }
});

module.exports  = Release;