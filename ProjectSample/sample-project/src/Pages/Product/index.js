import React,{Component} from 'react';
import { Route } from 'react-router-dom';
import ProductList from './ProductList';


class Product extends Component{

    state={

    }

    render(){
        return(
            <div className="content">
                <Route path={`${this.props.match.url}/ProductList`} component={ProductList} />
            </div>
        )

    }
}

export default Product;