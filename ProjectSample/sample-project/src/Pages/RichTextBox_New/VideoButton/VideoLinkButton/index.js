import React, { Component } from 'react';
import unionClassNames from 'union-class-names';
import EditorUtils from 'draft-js-plugins-utils';
import AddLinkForm from './AddLinkForm';

export default class LinkVideoButton extends Component {
  onMouseDown = (event) => {
    event.preventDefault();
  }

  onAddLinkClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { ownTheme, placeholder, onOverrideContent } = this.props;
    const content = (props) =>
      <AddLinkForm {...props} placeholder={placeholder} theme={ownTheme} />;
    onOverrideContent(content);
  }

  render() {
    const { theme } = this.props;
    const hasLinkSelected = EditorUtils.hasEntity(
      this.props.store.getEditorState(),
      'VIDEO'
    );
    const className = hasLinkSelected
      ? unionClassNames(theme.button, theme.active)
      : theme.button;

    return (
      <div
        className={theme.buttonWrapper}
        onMouseDown={this.onMouseDown}
      >
        <button
          className={className}
          onClick={this.onAddLinkClick}
          type="button"
        >
          <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M18.175,4.142H1.951C1.703,4.142,1.5,4.344,1.5,4.592v10.816c0,0.247,0.203,0.45,0.451,0.45h16.224c0.247,0,0.45-0.203,0.45-0.45V4.592C18.625,4.344,18.422,4.142,18.175,4.142 M4.655,14.957H2.401v-1.803h2.253V14.957zM4.655,12.254H2.401v-1.803h2.253V12.254z M4.655,9.549H2.401V7.747h2.253V9.549z M4.655,6.846H2.401V5.043h2.253V6.846zM14.569,14.957H5.556V5.043h9.013V14.957z M17.724,14.957h-2.253v-1.803h2.253V14.957z M17.724,12.254h-2.253v-1.803h2.253V12.254zM17.724,9.549h-2.253V7.747h2.253V9.549z M17.724,6.846h-2.253V5.043h2.253V6.846z" />
          </svg>
        </button>
      </div>
    );
  }
}