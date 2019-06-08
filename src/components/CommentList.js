import React, { Component , PureComponent } from 'react'

 //shouldComponentUpdate
 //2 .纯函数
//  class Comment extends PureComponent {
   //3 shouldComponenetUpdate 更新时候对比
//     //  shouldComponenetUpdate(nextProps,nextState){
//     //     if(nextProps.data.body === this.props.data.body &&
//     //         nextProps.data.author === this.props.data.author){
//     //             return false;
//     //         }

//     //         return true;
//     //  }
     
//      render() {
//           console.log('render')
//          return (
//              <div>
//                 <p> {this.props.body} </p>
//                 <p>---{this.props.author}</p>    
//              </div>
//          )
//      }
//  }


 
//  function Comment({data}) {
//      console.log('render')
//     return (
//         <div>
//             <p>{data.body}</p>
//             <p>---{data.author}</p>
//         </div>
//     )
// }
//3.React.memo 替代PureComponent 帮助对比 更新
 const Comment = React.memo(({body,author}) => {
     console.log('render')
    return (
        <div>
            <p>{body}</p>
            <p>---{author}</p>
        </div>
    )
})


export default class CommentList extends Component {
    constructor(props){
        super(props)

        this.state = {
            comments: []
        }
    }

    componentDidMount(){
        //模拟ajax获取数据、
        setInterval(() => {
            this.setState({
                comments: [
                    {body: 'react is very good' , author:'facebook'},
                    {body: 'vue is very good' , author:'you'},
                ]
            })
        }, 1000);
    }



    render() {
        return (
            <div>
                {this.state.comments.map((v,index) => (
                    //body={v.body} author = {v.author} 或者解构赋值 PureComponent 引入shouldComponentUpdata 对比数据（浅比较）更新
                   <Comment key={index}  {...v}></Comment>
                ))}
            </div>
        )
    }
}
