import React from 'react';
import But from '../../compon/but_compon/but_compon.js';
import Row from '../row_compon/row_compon.js';
import './list_compon.css';

/*
list:{
        title:'标题标题标题',
        id:'abcdefg',
          list:[
              [{
                    text:'号码'
              },{
                    text:'请输入号码',
                    id:'mobile',
                    noEditor:true
              }],
              [{
                      text:'输入密码'
                },{
                      text:'请输入密码',
                      id:'passwrod',
                      callback:function(){
                        //that.changeFun();
                      },
                      noEditor:true
              }]
            ]
}

but: [{
        text:"立即发布",
        callback:function(event){
            //var index = $(event.target).parents('.list_compon').data('reactid');
            //index = index.substr(index.length-1);
            var id = $(event.target).parents('.list_compon').data('dir');
            console.log(id);
        }
    },{
        text:"定时发布"
    },{
        text:"取消"
}]

<List data={this.state.list}/>
*/
var List = React.createClass({
  render: function() {
    var Rows     = [],
        listData = this.props.data.list;
        
    listData.forEach(function(item,key){
        Rows.push(<Row key={key}  data={item} />);
    });

    return (
      <div className="list_compon" data-dir={this.props.data.id}>
          <p>{this.props.data.title}</p>
          {Rows}
          <But data={this.props.but} />
      </div>
    );

  }
});


module.exports  = List;