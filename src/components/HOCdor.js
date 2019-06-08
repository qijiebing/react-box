import React, { Component } from 'react'

//高阶组件 就是一个函数
// 传参 comp 组建
// 返回一个函数 (函数的传参props是高阶组件showName的)(不能直接返回一个JSX)
const showName = (comp) => {

    //重写组建的生命周期
    class NewComponent extends Component{
        componentDidMount(){
            console.log('did mount')
        }

        render(){
            return <Kaikeba {...this.props} name = '高阶组件' ></Kaikeba>
        }
    }

    //返回一个组建
    return NewComponent


    // return props => 
    //     //name是通过特殊方法获取的（ajax啥的）
    //     <Kaikeba {...props} name = '高阶组件' > </Kaikeba>
}

const withLog = Comp => {
    console.log(Comp.name+'渲染了')
    return props => <Comp {...props}></Comp>  //保证props属性的传递不能丢失
}

@showName
@withLog
class Kaikeba extends Component {
    render(){
        return (
        <div>{this.props.stage}-{this.props.name}</div>
    )
    }
    
}

 
export default Kaikeba