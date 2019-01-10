import React,{Component} from 'react';

class Link extends Component {

  render(){
    const {url} = this.props.contentState.getEntity(this.props.entityKey).getData();
    console.log(this.props);
    
    return (
      <a href={url} style={{color: '#3b5998',
      textDecoration: 'underline'}}>
        {this.props.children}
      </a>
    );
  }
}
export default Link;