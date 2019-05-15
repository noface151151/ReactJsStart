import React,{Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import cx from "classnames";

import './SearchOrder.css';
import ComboBox from '../../../../UI/ComboBox';


class SearchOrder extends Component{

  state = {
     //comboBox loại sản phẩm
    ProductTypes: [{
      value: 0,
      display: "Tất cả"
    }, {
      value: 1,
      display: "Hàng điện tử"
    }, {
      value: 2,
      display: "Bếp - gia dụng"
    }, {
      value: 3,
      display: "Mỹ phẩm"
    },
    {
      value: 4,
      display: "Chăm sóc sức khỏe"
    }],
    IsShowProductType:false,
    SelectedProductType:0,
    SelectedProductTypeName:"Loại sản phẩm",
    //kết thúc

    //comboBox nhà cung cấp
    Providers: [{
      value: 0,
      display: "Tất cả"
    }, {
      value: 1,
      display: "Lazada"
    }, {
      value: 2,
      display: "Tiki"
    }, {
      value: 3,
      display: "Khác"
    }],
    IsShowProvider:false,
    SelectedProvider:0,
    SelectedProviderName:"Nhà cung cấp",
    //kết thúc

    //combobox cửa hàng
    Stores: [{
          value: 0,
          display: 'Tất cả'
        }, {
          value: 1,
          display: 'Showroom 46 Bạch Đằng'
        },
        {
          value: 2,
          display: 'Chi nhánh 42 Bạch Đằng'
        }, {
          value: 3,
          display: 'Chi nhánh Hà Nội'
        }
      ],
      IsShowStore: false,
      SelectedStore: 0,
      SelectedStoreName: "Tất cả",
    //kết thúc

    isHiddenSearch:true,

    IsMenuOpen:false
  }

  toggleSearch=()=> {
    this.setState({
      isHiddenSearch: !this.state.isHiddenSearch
    });
  }

  ToggleProductType =()=>{
    this.setState((previousState)=>{
    //  if(!previousState.IsMenuOpen){
        return{
          IsShowProductType:!previousState.IsShowProductType,
          IsMenuOpen:!previousState.IsShowProductType
        }
     // }
     
    })
  }
  SelectProductType = (element)=>{
    this.setState((previousState)=>{
      return{
        IsShowProductType:!previousState.IsShowProductType,
        SelectedProductType:element.value,
        SelectedProductTypeName:element.display,
        IsMenuOpen:false
      }
    })
  }

  ToggleProvider =()=>{
    this.setState((previousState)=>{
      return{
        IsShowProvider:!previousState.IsShowProvider
      }
    })
  }
  SelectProvider = (element)=>{
    this.setState((previousState)=>{
      return{
        IsShowProvider:!previousState.IsShowProvider,
        SelectedProvider:element.value,
        SelectedProviderName:element.display
      }
    })
  }

  ToggleStore =()=>{
    this.setState((previousState)=>{
      return{
        IsShowStore:!previousState.IsShowStore
      }
    })
  }
  SelectStore = (element)=>{
    this.setState((previousState)=>{
      return{
        IsShowStore:!previousState.IsShowStore,
        SelectedStore:element.value,
        SelectedStoreName:element.display
      }
    })
  }

  
  
    
    render(){
        return(
          <div>
              <form className={cx("lookup lookup-huge lookup-huge-sub")}>
              <input className="no-radius" type="text" placeholder="Nhập tên sản phẩm, mã sản phẩm, số đơn hàng..." />


              <ComboBox 
              data={this.state.ProductTypes}
              SelectedValue = {this.state.SelectedProductType}
              SelectedName = {this.state.SelectedProductTypeName}
              IsShow = {this.state.IsShowProductType}
              SelectedItem = {el=>this.SelectProductType(el)}
              Toggle ={this.ToggleProductType}
              />

              <ComboBox 
              data={this.state.Providers}
              SelectedValue = {this.state.SelectedProvider}
              SelectedName = {this.state.SelectedProviderName}
              IsShow = {this.state.IsShowProvider}
              SelectedItem = {el=>this.SelectProvider(el)}
              Toggle ={this.ToggleProvider} />

              <button className={cx("btn btn-primary btn-bold no-radius fs-14")}>Tìm kiếm</button>                      
            </form>

          <div className="accordion mt-20">
            <div className="card">
              <h5 className="card-title p-0 b-0"><a onClick={this.toggleSearch} className="btn btn-secondary btn-flat no-radius fs-14 collapsed" style={{lineHeight: '36px', textTransform: 'uppercase'}}>Tìm kiếm nâng cao</a></h5>
              <ReactCSSTransitionGroup
               transitionName='navexample' 
               transitionEnterTimeout={1000}
               transitionLeaveTimeout={1000}>
               {!this.state.isHiddenSearch? <div  className="">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-4 col-lg-4">
                      <h6>Ngày nhập kho</h6>
                      <div className="input-group">
                        <input type="text" className="form-control" data-provide="datepicker" />
                        <div className="input-group-append">
                          <span className="input-group-text"><i className="fa fa-calendar" /></span>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 col-lg-4">
                      <h6>Cửa hàng</h6>
                      {/* <div className="form-group">
                        <div className="btn-group bootstrap-select form-control">                                                                       
                          <select data-provide="selectpicker" multiple title="Tất cả" className tabIndex={-98} data-width="100%">
                            <option>Showroom 46 Bạch Đằng</option>
                            <option>Chi nhánh 42 Bạch Đằng</option>
                            <option>Chi nhánh Hà Nội</option>
                          </select>
                        </div>
                      </div> */}
                       <ComboBox 
                        styleCombobox={{width:'100%'}}
                        data={this.state.Stores}
                        SelectedValue = {this.state.SelectedStore}
                        SelectedName = {this.state.SelectedStoreName}
                        IsShow = {this.state.IsShowStore}
                        SelectedItem = {el=>this.SelectStore(el)}
                        Toggle ={this.ToggleStore} />
                    </div>
                    <div className="col-sm-4 col-lg-4">
                      <h6>Tình trạng đơn hàng</h6>
                      <div className="form-group">
                        <div className="btn-group bootstrap-select form-control">                                                                       
                          <select data-provide="selectpicker" multiple title="Tất cả" className tabIndex={-98} data-width="100%">
                            <option>Đã hoàn thành</option>
                            <option>Đã hủy</option>
                            <option>Chưa hoàn thành</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 col-lg-4">
                      <h6>Ngày xuất kho</h6>
                      <div className="input-group">
                        <input type="text" className="form-control" data-provide="datepicker" />
                        <div className="input-group-append">
                          <span className="input-group-text"><i className="fa fa-calendar" /></span>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 col-lg-4">
                      <h6>Tên khách hàng</h6>
                      <div className="input-group">
                        <input type="text" className="form-control" />                                  
                      </div>
                    </div>
                    <div className="col-sm-4 col-lg-4">
                      <h6>Email khách hàng</h6>
                      <div className="input-group">
                        <input type="text" className="form-control" />                                  
                      </div>
                    </div>
                    <div className="col-sm-12 col-lg-12 text-right mt-10">
                      <button className="btn btn-primary btn-bold no-radius fs-14">Tìm nâng cao</button>
                    </div>
                  </div>
                </div>
              </div>:null}
              
              </ReactCSSTransitionGroup>
             
            </div>
            </div>
        </div>


          );
    }
}

export default SearchOrder