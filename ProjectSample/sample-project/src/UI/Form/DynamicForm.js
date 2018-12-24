import React,{Component} from 'react';

class DynamicForm extends Component{

    constructor(props) {
        super(props)
        const newState = {};
        props.model.map((m) => {
            if (newState[m.key] === undefined) {
                newState[m.key] = {};
                newState[m.key]['value'] = "";
                newState[m.key]['validator'] = {};
                newState[m.key]['validator']['errors'] = [];
                newState[m.key]['validator']['valid'] = true;
            }

            this.state = { ...newState}
        })

    }
    onSubmit = (e) => {
        e.preventDefault();
        const state ={...this.state};
        let IsError=false;
        for (var key in state) {
            if (state.hasOwnProperty(key)) {
                const errors = this.checkValidForm(key, state[key]['value'])
                if (errors.length > 0) {
                    state[key]['validator']['errors'] = errors;
                    state[key]['validator']['valid'] = true;
                    if(!IsError){
                        IsError=true;
                    }
                }
            }
        }
        if(IsError){
            this.setState(state);
        }
        else{
            if (this.props.onSubmit) {
                
                this.props.onSubmit(state)
            }
           // this.resetValidators();
        }  
    }

    checkValidForm = (key, value) => {
        let model = this.props.model;
        let errors = [];
        model.map((element) => {
            if (element.key === key) {
                for (const rule of element.rules) {
                    const param = { ...rule.param,
                        data: value
                    }
                    const result = rule.fucntion.fucntionValidate(param);
                    if (!result.isValid) {
                        errors.push(result.message)
                        break;
                    }
                }
            }
        })
        return errors;
    }
    onChange = (key) => (e) => {
        const value = e.target.value;
        const newState = Object.assign({}, this.state);
        newState[key]['value'] = value;
        newState[key]['validator']['errors'] = [];
        newState[key]['validator']['valid'] = true;
        const errors=this.checkValidForm(key,value);
        if (errors.length>0){
            newState[key]['validator']['valid'] = false;
            newState[key]['validator']['errors'] = errors;
        }
        this.setState({...this.state,...newState});
    }
    renderForm=()=>{
        let model = this.props.model;
        let formUI = model.map((m)=>{
            let key = m.key;
            let type = m.type||"text";
           
            return(
                <div key={key} className="form-group">
                    <label className ="form-label" key={"l"+m.key} htmlFor={m.key}>
                        {m.label}
                    </label>
                    <input
                   // ref={(key)=>{this[m.key]=key}}
                    value={this.state[key]['value']}
                    className="form-input"
                    type={type}
                    key={"i"+m.key}
                    onChange={this.onChange(key)}
                    >
                    </input>
                   {this.displayErrors(key)}
                </div>
            )
        })
        return formUI;
    }
    displayErrors=(key)=>{
        if(this.state[key]===undefined){
            return null;
        }
        const errors=this.state[key]['validator']['errors'];
        let errorRender=null;
        if(errors!==null&&errors!==undefined&&errors.length>0){
            errorRender=errors.map((value,index)=>{
                return <span className='error' key ={index}>{value}</span>
            });
        }
        return errorRender;
    }
      resetValidators=() =>{
        const state ={...this.state};
        for(var key in state){
            if(state.hasOwnProperty(key)){
                state[key]['value'] = "";
                state[key]['validator']['errors'] = [];
                state[key]['validator']['valid'] = true;
            }
        }
        this.setState(state);
      }

    render(){
        let title = this.props.title || "Dynamic form"
        return (
            <div className={this.props.className}>
                <h3>{title}</h3>
                <form onSubmit={this.onSubmit}>
                   {this.renderForm()}
                    <div className="form-group">
                        <button type="submit">{this.props.buttonSubmitName}</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default DynamicForm;