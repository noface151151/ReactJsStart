import React from 'react';
import StyleButton from './StyleButton';


const InlineStyleControls = (props) => {
    const currentStyle = props.editorState.getCurrentInlineStyle();
    const INLINE_STYLES = [
        {label: 'In đậm', style: 'BOLD'},
        {label: 'In nghiêng', style: 'ITALIC'},
        {label: 'Gạch chân', style: 'UNDERLINE'},
      ];
    
    return (
      <div className="RichEditor-controls">
        {INLINE_STYLES.map((type) =>
          <StyleButton
            key={type.label}
            active={currentStyle.has(type.style)}
            label={type.label}
            onToggle={props.onToggle}
            style={type.style}
          />
        )}
      </div>
    );
  };

  export default InlineStyleControls;