import React from 'react';
import Tip from '../../compon/tip_compon/tip_compon.js'; 

var Head = React.createClass({
  quit: function(){
      Utils.sendAjax({
          url:Api.logout,
          callback:function(data){
              if(data.result){
                  delete localStorage.isLogin;
                  delete localStorage.page;
                  location.reload();
              }else{
                 Tip.init({content:'退出失败'});
              }
          }
      });

  },
  componentDidMount:function(){
      $(this.refs.back).off();
      $(this.refs.back).on('touchstart',this.quit);
  },
  render: function() {
  	
  	var obj = this.props.data;

    return (
      <div className="head_compon g_box g_bgGray1 g_boxH g_boxC g_pl20 g_Gray1 g_lh45">
       		<div className="g_flex1 g_f2">
       			  {obj.name}
       		</div>
       		<div ref="back" className={obj.isLogin ? 'g_bgGray2 backBut g_pl10 g_pr10' : 'g_hide'} >
       			  {obj.butText}
       		</div>
      </div>
    );

  }
});

module.exports  = Head;