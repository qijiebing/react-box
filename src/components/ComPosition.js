import React, { Component } from 'react'

// Dialog
// 壳组建 内部传入 slot（props.children）
function  Dialog(props) {
   return (
       //style内部是 样式对象{border：，}
       <div style={{color:props.color}}>
        {props.children}
        {props.footer}
       </div>
   ) 
}

function WelcomeDialog() {
    //props 可以传入 jsx组建的 可以直接写入props属性中
    const confirmBtn = <button onClick={()=>{alert('确实好！')}}>确定</button>
    return (
        <Dialog color="green" footer={confirmBtn}>
            <h1>hello</h1>
            <p>感谢使用react</p>
        </Dialog>
    )
}

export default class ComPosition extends Component {
    render() {
        return (
            <div>
                <WelcomeDialog></WelcomeDialog>
            </div>
        )
    }
}
