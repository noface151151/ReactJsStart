import React from 'react';

function mediaBlockRenderer(block) {
    if (block.getType() === 'atomic') {
      return {
        component: Media,
        editable: false,
      };
    }
    return null;
  }

  const Audio = (props) => {
    return <audio controls src={props.src} style={{width: '100%', whiteSpace: 'initial'}} />;
  };
  const Video = (props) => {
    return <iframe controls src={props.src} height='315' width='560' style={{whiteSpace: 'initial'}} />;
  };
  const Media = (props) => {
    const entity = props.contentState.getEntity(
      props.block.getEntityAt(0)
    );
    const {src} = entity.getData();
    const type = entity.getType();
    let media;
    if (type === 'AUDIO') {
        media = <Audio src = {src}/>;
    } else if (type === 'VIDEO') {
        media = <Video src = {src}/>;
    }
    return media;
  };

  export default mediaBlockRenderer;