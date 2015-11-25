/*公共样式*/
import './style/normalize.css'; 
import './style/global.css'; 

/*外部引用脚本*/
import React from 'react';
import ReactDOM from 'react-dom';
import './js/zepto.js'; 
// import './js/utils.js'; //单机调试时注销

/*api接口脚本*/
// import './api/rewrite_api.js'; //单机调试时注销
// import './api/ajax_api.js';    //单机调试时注销
import './api/dataJson.js'; //单机调试时开启

/*载入组件*/
import Head_compon from './compon/head_compon/head_compon.js'; 
import Menu_compon from './compon/menu_compon/menu_compon.js'; 

/*载入主要页面*/
import Login from './pages/login/login.js'; 

/*登录状态*/
var Home,isLogin;
if(localStorage.isLogin){
    Home = require('./pages/'+localStorage.page+'/'+localStorage.page+'.js');  
  	isLogin = true;
}else{
  	Home = Login;
  	isLogin = false;
}

var Wrap = React.createClass({
  getInitialState: function() {
        return {
                    head_config:{
                        name:"借贷管理",
                        butText:'退出',
                        isLogin:isLogin
                    }
                };
    },
    render: function() {
        return (
            <div className="g_page g_box g_boxV">
             		<Head_compon data={this.state.head_config} />
             		<Menu_compon isShow={isLogin} active={localStorage.page} />
             		<div className="g_flex1" id="mainCon">
             			  <Home />
             		</div>
            </div>
        );
    }
});


ReactDOM.render(
    <Wrap />,
    document.getElementById('mainBody')
);





