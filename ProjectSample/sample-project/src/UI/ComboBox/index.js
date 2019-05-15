import React,{Component} from 'react'; 
import cx from "classnames";

class ComboBox extends Component{
    render(){

        const Datas = this.props.data.map((el)=>{
            return(
              <a  onClick={()=>this.props.SelectedItem(el)} style={{cursor:'pointer'}} key={el.value}  className={this.props.SelectedValue===el.value? cx("dropdown-item selected"):"dropdown-item "}>
                <span tabIndex={0} className="dropdown-item-inner " data-tokens="null" role="option" aria-disabled="false" aria-selected="true">
                  <span className="text">{el.display}</span>
                  {this.props.SelectedValue ===el.value? <span className={cx("ti-check check-mark")}/>:null }
                </span>
              </a>
            )
          })
        return(
            <div   className={cx("btn-group bootstrap-select d-none d-md-block")}>
            <button  onFocus={this.props.Toggle} style={this.props.styleCombobox}  type="button" className={cx("btn dropdown-toggle btn-light")} data-toggle="dropdown" role="button" title={this.props.SelectedName}>
                <span className={cx("filter-option pull-left")}>{this.props.SelectedName}</span>&nbsp;
                <span className="bs-caret">
                    <span className="caret" />
                </span>
            </button>
            <div onFocus={this.props.Toggle }  className={this.props.IsShow? cx("dropdown-menu open show"):cx("dropdown-menu open")}role="combobox">
              <div className="inner" role="listbox" aria-expanded="false">
                {Datas}
              </div>
            </div>
          </div>  
        )
    }
}

export default ComboBox;