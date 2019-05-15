import React,{Component} from 'react';
import cx from "classnames";

import SearchOrder from './Search/SearchOrder';

class Order extends Component{

    render(){

        return(
            <header className={cx("header bg-ui-general")}>
                <div className="header-info" style={{marginBottom: '15px'}}>
                    <div className="left">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
                            <li className={cx("breadcrumb-item active")}>Đơn hàng</li>
                        </ol>
                        <h1 className={cx("header-title mb-20")}>
                            <strong>Danh sách đơn hàng</strong>
                        </h1>
                        <SearchOrder></SearchOrder>
                    </div>
                </div>
            </header>
        )
    }

}

export default Order;