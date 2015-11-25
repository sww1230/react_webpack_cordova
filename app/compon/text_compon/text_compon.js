import React from 'react';
require('./text_compon.css');

/*
text:[{
         name:'贷款说明：',
         description:'请输入贷款说明', //placeholder
         id:'dksm',     //dom节点 id
         newVal:'ssss'  //赋新值时，description作废
     }]

<Text data={this.state.text}/>
*/
var Text = React.createClass({
  render: function() {
    var rows = [];
    this.props.data.forEach(function(item,key) {
        if(item.newVal){
          rows.push(<div key={key}><p>{item.name}</p><textarea id={item.id} className="g_mt10" defaultValue={item.newVal}></textarea></div>);
        }else{
          rows.push(<div key={key}><p>{item.name}</p><textarea id={item.id} className="g_mt10"  placeholder={item.description}></textarea></div>);
        }
    });
    return (
      <div className="text_compon">
          {rows}
      </div>
    );

  }
});


module.exports  = Text;