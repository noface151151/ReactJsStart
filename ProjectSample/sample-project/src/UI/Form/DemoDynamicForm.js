import React,{Component} from 'react';
import DynamicForm from './DynamicForm';
import validationTypes from './validationType';

class DemoDynamicForm extends Component{

    state = {
        data: {},
        formElement: [{
            key: "name",
            label: "Tên",
            rules: [
                {
                fucntion: validationTypes.Required,
                param: null
                }
            ]
        }, {
            key: "age",
            label: "Tuổi",
            type: 'number',
            rules: [
                {
                fucntion: validationTypes.Required,
                param: null,
            }, {
                fucntion: validationTypes.GreaterThanValue,
                param: {
                    valueCompare: 18
                }
            }]

        }, {
            key: "idCard",
            label: "Chứng minh nhân dân",
            rules: [{
                fucntion: validationTypes.Required,
                param: null
            }, {
                fucntion: validationTypes.Document,
                param: {
                    type:1
                }
            }]
        }]
    }

    onSubmit=(model)=>{
        // console.log('vào')
        const dataOld = {...this.state.data};
        const newData = {...dataOld,model};
        
        this.setState({
            data:newData
        })
       
    }
    render(){
        return(
            <DynamicForm className="form"
            tittle="Demo"
            model={this.state.formElement}
            buttonSubmitName="Submit"
            onSubmit = {(model)=>this.onSubmit(model)}
            >
            </DynamicForm>
        )
    }
}
export default DemoDynamicForm