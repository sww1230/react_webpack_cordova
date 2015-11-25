import React from 'react';
require('./row_compon.css');
/*
listData:[{
              text:'号码'         //左侧显示文本; 当前对象可省略，只显示输入框
          },{
              text:'请输入号码',  //显示值
              id:'mobile',
              noEditor:true,      //文本框不可编辑;否，可编辑
              newVal:'111111111'  //赋新值时设置
              callback:function(){}  //无click时，失去焦点时触发; 否则，触发点击事件
              click:true
          }]

<Row data={listData[0]} />

var Rows     = [];
listData.forEach(function(item,key){
    Rows.push(<Row key={key}  data={item} />);
});
{Rows}



//单行调用
<Row data={this.state.form[0]} />
*/
var Row = React.createClass({
  restructuring:{},
  componentDidMount:function(){
    var obj = this.restructuring;
    if(Utils.android){

            // console.log(this.restructuring);
            
            for(var key in obj){
                $('#'+key).off();
                if(obj[key].length == 2){
                    $('#'+key).on('touchstart',obj[key][0]);
                }else if(obj[key].length == 1){
                    $('#'+key).on('blur',obj[key][0]);
                }

            }

    }
  },
  render: function() {
    var row = [],
        rowData = this.props.data,
        len     = rowData.length,
        even    = rowData.click ? 'on'+rowData.click : 'onBlur',
        that = this;

    var clickChange = function(id,key,oneData,name){

      if(Utils.android && id && oneData.callback){
              that.restructuring[id] = [];
              that.restructuring[id].push(oneData.callback);
              oneData.click && that.restructuring[id].push('onBlur');
      }

      if(oneData.click){
          if(oneData.newVal){
              return <p id={id} key={key} onTouchStart={oneData.callback && !Utils.android ? oneData.callback : ''} className={name} dir={oneData.newVal} >{oneData.text}</p>;
          }else{
              return <p id={id} key={key} onTouchStart={oneData.callback && !Utils.android ? oneData.callback : ''} className={name} >{oneData.text}</p>;
          }
      }else{
          if(oneData.newVal){
              return <input id={id} key={key} onBlur={oneData.callback && !Utils.android ? oneData.callback : ''} className={name} defaultValue={oneData.newVal} />;
          }else{
              return <input id={id} key={key} onBlur={oneData.callback && !Utils.android ? oneData.callback : ''} className={name} placeholder={oneData.text} />;
          }
      }
    };

    if(len == 1){
        var oneData = rowData[0];
        if(!oneData.noEditor){
            var name = "g_pl10 g_flex1",id=(oneData.id ? oneData.id : '');
            row.push(clickChange(id,0,oneData,name));
        }else{
            var name = "g_pl10 g_flex1 g_borderNo",id=(oneData.id ? oneData.id : '');
            row.push(<p id={id} key='0' className={name} >{oneData.text}</p>);
        }
    }else{
        rowData.forEach(function(item,key) {
                switch(key){
                    case 0:
                        if(item.text){
                            var name = "g_Gray1 g_tar g_pr10",id=(item.id ? item.id : '');
                            row.push(<div key={key} id={id} className={name}>{item.text}</div>);
                        }
                        break;
                    case 1:
                        if(!item.noEditor){
                            var name = "g_pl10 g_flex1",id=(item.id ? item.id : '');
                            row.push(clickChange(id,key,item,name));
                        }else{
                            var name = "g_pl10 g_flex1 g_borderNo",id=(item.id ? item.id : '');
                            row.push(<p id={id} key={key} className={name} >{item.text}</p>);
                        }
                        break;
                    case 2:
                        var name = "g_ml10",id=(item.id ? item.id : '');
                        row.push(<div id={id} key={key} className={name}>{item.text}</div>);
                        break;
                }
        });
    }
    var name = this.props.class ? "row_compon g_box g_boxH g_boxC "+this.props.class : "row_compon g_box g_boxH g_boxC"
    return (
      <div className={name}>
           {row}
      </div>
    );

  }
});

module.exports  = Row;