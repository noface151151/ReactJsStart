import React from 'react';
import PropTypes from 'prop-types';
import ReactTransitionGroup from 'react-addons-css-transition-group';
import './List.css';

const List = ({ ordered, children }) => (
  <ReactTransitionGroup
    component={ordered ? 'ol' : 'ul'}
    className="List"
    transitionName="animatedList"
    transitionEnterTimeout={1000}
    transitionLeaveTimeout={1000}
  >
    {children}
  </ReactTransitionGroup>
);
List.propTypes = {
  ordered: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default List;