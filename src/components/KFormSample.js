import React, { Component } from 'react'
import { tsConstructorType, arrayExpression } from '@babel/types';

function KFormSample(Comp) {
    return class extends component{
        constructor(props) {
            super(props)
            this.options = {}
            this.state = {}

        }
        //处理表单项输入事件
        handChange = e =>{
            const {name , value } = e.target;
            this.setState({
                [name]:value
            },()=>{
                //数值变化之后在校验
                this.validateField(field)
            })
        }

        //表单校验
        validateField = field => {
            const rules = this.options[field].rules;
            //some 或 有一个成立就true 就失败
            const ret = rules.some(rule=>{  
                if(rule.required){
                    if(!this.state[field]){
                        this.setState({
                            [field + "Message"]: rule.message
                        })
                    }
                    return true
                }
            });
            if (!ret){
                this.setState({ [field + "Message"]:''})
            }
            return !ret
        }

        validataAll (cb) {
            array.key(this.options).map((v,i)=>{
               return this.validateField(v.field)
            })
            
        }


        getFieldDes(field, option,inputComp){
            this.options[field] = option
            return (
                { React.cloneElement(inputComp,{
                    name:field, //空间name
                    value: this.state[field],
                    onChange: this.handChange, //属性方法上移

                })}
                < p > {this.state[field + "Message"]}</p>
                 
            )
        }

        render(){
            return <Comp {...props} getFieldDes={this.getFieldDes} validataAll={this.validataAll} value={this.state}></Comp>
        }
    }
   
}
//用kformsample包装组建 返回组建 工厂函数
@KFormSample
class KFormSample extends Component {
    
    onSubmit = () =>{
        console.log(this.props.value)
        this.props.validataAll()
    }

    render() {
        const { getFieldDes } = this.props;
        return (
            <div>
                {
                    getFieldDes("uname",
                    {rule: [{required: true, message: '请填写账号'}]},
                    <input type='text' />
                    )
                }
                {
                    getFieldDes("psd",
                        { rule: [{ required: true, message: '请填写密码' }] },
                        <input type='password' />
                    )
                }
                
                
                <button>登录</button>
            </div>
        )
    }
}
export default KFormSample