import React from 'react';
import Row from '../../compon/row_compon/row_compon.js'; 
import But from '../../compon/but_compon/but_compon.js'; 
import Tip from '../../compon/tip_compon/tip_compon.js'; 
import './login.css';

var Login = React.createClass({
  changeFun:function(){
      var mobileVal = $('#mobile').val(),
          passwrod  = $('#passwrod').val();
      if(mobileVal =='' || passwrod == ''){
          var obj = {
              button:[{
                  text:'确定',
                  id:'loginTipOne',
                  callback:function(){
                      Tip.del();
                  }
              }],
              content:'用户名或密码，不能为空！'
          }
          Tip.init(obj);
      }else{

          Utils.sendAjax({
              url:Api.login,
              data:{mobile:mobileVal,passwrod:passwrod},
              callback:function(data){
                  if(data.result){
                      localStorage.isLogin = true;
                      localStorage.page = 'create';
                      location.reload();
                  }else{
                     Tip.init({content:'用户名或密码错误！'});
                  }
              }
          });
          
      }
      
  },
  getInitialState: function() {  
    var that = this;
    return {
        form:[
                [{
                      text:'手机号码'
                },{
                      text:'请输入号码',
                      id:'mobile'
                }],
                [{
                        text:'输入密码'
                  },{
                        text:'请输入密码',
                        id:'passwrod',
                        callback:function(){}
                }]
              ],
          but:[{
                text:"登录",
                id:'loginBut',
                callback:function(){
                    that.changeFun();
                }
              }]
    }
  },
  render: function() {
  	var Rows     = [],
        formData = this.state.form;
        
  	formData.forEach(function(item,key){
  		  Rows.push(<Row class="login_h50" key={key}  data={item} />);
  	});

    return (
      	<div className="login_page">
       			{Rows}
       			<But class="login_but" data={this.state.but} />
      	</div>
    );

  }
});

module.exports  = Login;