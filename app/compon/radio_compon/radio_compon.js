import React from 'react';
import ReactDOM from 'react-dom';
import But from '../but_compon/but_compon.js'; 
require('./radio_compon.css');

/*
var obj = {
    button:[{
        text:'确定',
        callback:function(){
            Radio.del(); 
        }
    },{
        text:'取消',
        callback:function(){
            Radio.del();
        }
    }],
    content:[
              {text:'无',value:''},
              {text:'第一个测试企业',value:'aaaa'}
            ]
}

Radio.result  //获取选中的文本
Radio.value   //获取选中的值
Radio.del     //删除
 
Radio.init(obj); //初始化开启
*/

var Radio = React.createClass({
  changeRadio:function(event){
      $(event.target).addClass('active').siblings('li').removeClass('active');
  },
  componentDidMount:function(){
    if(Utils.android){
        $('.'+Radio.tipDom+'_content').on('touchstart',this.changeRadio);
    }
  },
  render: function() {
    var t = this;
  	var obj     = this.props.data,
        content = obj.id+'_content',
        buttonCon = [],
        con = [];
    if(obj.button && obj.button.length > 0){
        var but = obj.id+'_but';
        buttonCon.push(<div key="0" className="g_mt5">
                        <But class={but} data={obj.button} />
                     </div>);
    }else{
        alert('radio组件，必需传入button配置');
    }
    if(obj.content){
        obj.content.forEach(function(item,key){
              con.push(<li key={key} dir={item.value} onTouchStart={!Utils.android && t.changeRadio}>{item.text}</li>);
        });
    }else{
      alert('radio组件，必需传入content配置为数组');
    }
    return (
      <div className="tip_compon g_posF g_box g_boxV g_mr20 g_ml20">
          <div className="g_flex1"></div>
       		<div className={obj.id} >
              <ul className={content}>{con}</ul>
          </div>
          {buttonCon}
          <div className="g_flex1"></div>
      </div>
    );

  }
});

Radio.init = function(obj){
    Radio.tipDom = obj.id = obj.id ? obj.id : 'radioBox';
    $('body').append("<div id='"+obj.id+"' class='g_posF g_bgOpacity'></div>");
    ReactDOM.render(
        <Radio data={obj}/>,
        document.getElementById(obj.id)
    );

   // $('.'+obj.id+'_content').append(obj.content);
    /*if(!obj.button || !obj.button.length){
        $("#"+obj.id).one('touchstart',function(){
            Radio.del();
        })
    }*/
}

Radio.result = function(){
  return $('.'+Radio.tipDom+' .active').html();
}
Radio.value = function(){
  return $('.'+Radio.tipDom+' .active').attr('dir');
}

Radio.del = function(){
    $('#'+Radio.tipDom).remove();
}

module.exports  = Radio;