import React from 'react';
require('./but_compon.css');



/*but: [{
        text:"立即发布",
        callback:function(){}
    },{
        text:"定时发布",
        callback:function(){}
    },{
        text:"取消",
        callback:function(){}
}]



<But data={but} class="g_mt20" />
//data: 配置信息 必须
//class：改变组件样式 可选*/

var But = React.createClass({
  restructuring:{},
  componentDidMount:function(){
    var obj = this.restructuring;
    if(Utils.android){

            for(var key in obj){
                if(/list_compon/.test(key)){
                    var name = key.split('-')[0];
                    $('.'+name+' #'+key).off();
                    $('.'+name+' #'+key).on('touchstart',obj[key]);
                }else{
                    $('#'+key).off();
                    $('#'+key).on('touchstart',obj[key]);
                }
            }

    }
  },
  render: function() {
    var row = [],that = this;
    
    if(this.props.callbackData && this.props.keyCallback){
        tempData[this.props.keyCallback] = this.props.callbackData;
    }

    this.props.data.forEach(function(item,key){
        if(item.id && item.callback && Utils.android){
            that.restructuring[item.id] = item.callback;
        }
        row.push(<div key={key} id={item.id ? item.id : ''} className="g_flex1" onTouchStart={item.callback && !Utils.android ? item.callback : ''}>{item.text}</div>);
    });
    var name = this.props.class ? "but_compon g_box g_boxH g_boxC "+this.props.class : "but_compon g_box g_boxH g_boxC"
    return (
      <div className={name}>
           {row}
      </div>
    );
  }
});


module.exports  = But;