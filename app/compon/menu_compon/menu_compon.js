import React from 'react';
import ReactDOM from 'react-dom';

/*
menu_config:[
    {
      text:'建标',
      page:'create'
    },{
      text:'审标',
      page:'examine'
    },{
      text:'发标',
      page:'release'
    }
]

// isShow 是否显示
// data 配置信息
<Menu_compon isShow={isLogin} data={menu_config} />

*/

var Cloumn = React.createClass({
    changeRender:function(Page,name){
        localStorage.page = name;
        $('#'+name).addClass('g_active').siblings().removeClass('g_active');
        document.getElementById('mainCon').innerHTML = '';
        ReactDOM.render(
            <Page />,
            document.getElementById('mainCon')
        );
    },
    changePage:function(){
        // React.findDOMNode(this.refs.myTextInput).focus();
        // event.currentTarget.getAttribute('name');
        switch(this.props.data.page){
            case 'create':
              this.changeRender(require('../../pages/create/create.js'),'create');
              break;
            case 'examine':
              this.changeRender(require('../../pages/examine/examine.js'),'examine');
              break;
            case 'release':
              this.changeRender(require('../../pages/release/release.js'),'release');
              break;
        }
    },
    componentDidMount:function(){
      
      //专为cordova打包添加，h5可以删除 
      if(Utils.android){
          var that = this;
          $('#examine').off();
          $('#create').off();
          $('#release').off();
          $('#create').on('touchstart',function(){
              var page = require('../../pages/create/create.js');
              that.changeRender(page,'create');
          });
          $('#examine').on('touchstart',function(){
              var page = require('../../pages/examine/examine.js');
              that.changeRender(page,'examine');
          });
          $('#release').on('touchstart',function(){
              var page = require('../../pages/release/release.js');
              that.changeRender(page,'release');
          });
      }

    },
    render : function(){
        return (
            <div id={this.props.data.page} className={this.props.data.page == this.props.active ? "g_active g_flex1" : "g_flex1"} onTouchStart={!Utils.android ? this.changePage : ''}>{this.props.data.text}</div>
        );
    }
});

var Menu = React.createClass({
  getInitialState: function() {  
      return {
                menu_config:[
                      {
                        text:'建标',
                        page:'create'
                      },{
                        text:'审标',
                        page:'examine'
                      },{
                        text:'发标',
                        page:'release'
                      }
                ]
            }
    },
  render: function() {

      var rows = [],active = this.props.active;
      this.state.menu_config.forEach(function(item,key) {
          rows.push(<Cloumn key={key} data={item} active={active} />);
      });
      return (
        <div className={this.props.isShow ? "menu_compon g_box g_lh45 g_bgGray3 g_Gray2 g_f1 g_tac" : "g_hide"} >
         		{rows}
        </div>
      );
  }
});

module.exports  = Menu;