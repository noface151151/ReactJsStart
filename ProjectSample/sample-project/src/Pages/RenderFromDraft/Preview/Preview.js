import React from 'react';
import PropTypes from 'prop-types';
import redraft from 'redraft';
import AtomicBlock from '../AtomicBlock/AtomicBlock';
import List from '../List/List';


import './Preview.css';

const styles = {
  code: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
  codeBlock: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 20,
  },
  imageCenter:{
    display: 'block',
    marginLeft: 'auto',
    marginRight:'auto',
    display:'block'
  },
  imageleft:{
    float:'left',
  },
  imageright:{
    float:'right',
  }
};
const sizes=[8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96];
let inline={};
sizes.map(value=>{
  const inlineSize = {
    ['fontsize-'+value]:(children,{key})=>{
      return(
        <span style={{fontSize:value+'px'}} key={key}>{children}</span>
      )
    }
  }
  inline= {...inline,...inlineSize};
})
 inline = {
   ...inline,
  BOLD: (children, { key }) => <strong key={key}>{children}</strong>,
  ITALIC: (children, { key }) => <em key={key}>{children}</em>,
  UNDERLINE: (children, { key }) => <u key={key}>{children}</u>,
  CODE: (children, { key }) => <span key={key} style={styles.code}>{children}</span>,
  SUPERSCRIPT:(children,{key})=><sup key={key}>{children}</sup>,
  SUBSCRIPT:(children,{key})=><sub key={key}>{children}</sub>,
  STRIKETHROUGH:(children,{key})=><strike key={key}>{children}</strike>,
  'fontfamily-Impact':(children,{key})=><span style={{fontFamily:'Impact'}} key={key}>{children}</span>,
  'fontfamily-Arial':(children,{key})=><span style={{fontFamily:'Arial'}} key={key}>{children}</span>,
  'fontfamily-Georgia':(children,{key})=><span style={{fontFamily:'Georgia'}} key={key}>{children}</span>,
  'fontfamily-Tahoma':(children,{key})=><span style={{fontFamily:'Tahoma'}} key={key}>{children}</span>,
  'fontfamily-Times New Roman':(children,{key})=><span style={{fontFamily:'Times New Roman'}} key={key}>{children}</span>,
  'fontfamily-Verdana':(children,{key})=><span style={{fontFamily:'Verdana'}} key={key}>{children}</span>,
  'color-rgb(97,189,109)':(children,{key})=><span style={{color:'rgb(97,189,109)'}} key={key}>{children}</span>, 
  'color-rgb(26,188,156)':(children,{key})=><span style={{color:'rgb(26,188,156)'}} key={key}>{children}</span>, 
  'color-rgb(84,172,210)':(children,{key})=><span style={{color:'rgb(84,172,210)'}} key={key}>{children}</span>, 
  'color-rgb(44,130,201)':(children,{key})=><span style={{color:'rgb(44,130,201)'}} key={key}>{children}</span>,
  'color-rgb(147,101,184)':(children,{key})=><span style={{color:'rgb(147,101,184)'}} key={key}>{children}</span>, 
  'color-rgb(71,85,119)':(children,{key})=><span style={{color:'rgb(71,85,119)'}} key={key}>{children}</span>, 
  'color-rgb(204,204,204)':(children,{key})=><span style={{color:'rgb(204,204,204)'}} key={key}>{children}</span>, 
  'color-rgb(65,168,95)':(children,{key})=><span style={{color:'rgb(65,168,95)'}} key={key}>{children}</span>, 
  'color-rgb(0,168,133)':(children,{key})=><span style={{color:'rgb(0,168,133)'}} key={key}>{children}</span>,
  'color-rgb(61,142,185)':(children,{key})=><span style={{color:'rgb(61,142,185)'}} key={key}>{children}</span>, 
  'color-rgb(41,105,176)':(children,{key})=><span style={{color:'rgb(41,105,176)'}} key={key}>{children}</span>, 
  'color-rgb(85,57,130)':(children,{key})=><span style={{color:'rgb(85,57,130)'}} key={key}>{children}</span>, 
  'color-rgb(40,50,78)':(children,{key})=><span style={{color:'rgb(40,50,78)'}} key={key}>{children}</span>, 
  'color-rgb(0,0,0)':(children,{key})=><span style={{color:'rgb(0,0,0)'}} key={key}>{children}</span>,
  'color-rgb(247,218,100)':(children,{key})=><span style={{color:'rgb(247,218,100)'}} key={key}>{children}</span>, 
  'color-rgb(251,160,38)':(children,{key})=><span style={{color:'rgb(251,160,38)'}} key={key}>{children}</span>, 
  'color-rgb(235,107,86)':(children,{key})=><span style={{color:'rgb(235,107,86)'}} key={key}>{children}</span>, 
  'color-rgb(226,80,65)':(children,{key})=><span style={{color:'rgb(226,80,65)'}} key={key}>{children}</span>, 
  'color-rgb(163,143,132)':(children,{key})=><span style={{color:'rgb(163,143,132)'}} key={key}>{children}</span>,
  'color-rgb(239,239,239)':(children,{key})=><span style={{color:'rgb(239,239,239)'}} key={key}>{children}</span>, 
  'color-rgb(255,255,255)':(children,{key})=><span style={{color:'rgb(255,255,255)'}} key={key}>{children}</span>, 
  'color-rgb(250,197,28)':(children,{key})=><span style={{color:'rgb(250,197,28)'}} key={key}>{children}</span>, 
  'color-rgb(243,121,52)':(children,{key})=><span style={{color:'rgb(243,121,52)'}} key={key}>{children}</span>, 
  'color-rgb(209,72,65)':(children,{key})=><span style={{color:'rgb(209,72,65)'}} key={key}>{children}</span>,
  'color-rgb(184,49,47)':(children,{key})=><span style={{color:'rgb(184,49,47)'}} key={key}>{children}</span>, 
  'color-rgb(124,112,107)':(children,{key})=><span style={{color:'rgb(124,112,107)'}} key={key}>{children}</span>, 
  'color-rgb(209,213,216)':(children,{key})=><span style={{color:'rgb(209,213,216)'}} key={key}>{children}</span>,


  'bgcolor-rgb(97,189,109)':(children,{key})=><span style={{backgroundColor:'rgb(97,189,109)'}} key={key}>{children}</span>, 
  'bgcolor-rgb(26,188,156)':(children,{key})=><span style={{backgroundColor:'rgb(26,188,156)'}} key={key}>{children}</span>, 
  'bgcolor-rgb(84,172,210)':(children,{key})=><span style={{backgroundColor:'rgb(84,172,210)'}} key={key}>{children}</span>, 
  'bgcolor-rgb(44,130,201)':(children,{key})=><span style={{backgroundColor:'rgb(44,130,201)'}} key={key}>{children}</span>,
  'bgcolor-rgb(147,101,184)':(children,{key})=><span style={{backgroundColor:'rgb(147,101,184)'}} key={key}>{children}</span>, 
  'bgcolor-rgb(71,85,119)':(children,{key})=><span style={{backgroundColor:'rgb(71,85,119)'}} key={key}>{children}</span>, 
  'bgcolor-rgb(204,204,204)':(children,{key})=><span style={{backgroundColor:'rgb(204,204,204)'}} key={key}>{children}</span>, 
  'bgcolor-rgb(65,168,95)':(children,{key})=><span style={{backgroundColor:'rgb(65,168,95)'}} key={key}>{children}</span>, 
  'bgcolor-rgb(0,168,133)':(children,{key})=><span style={{backgroundColor:'rgb(0,168,133)'}} key={key}>{children}</span>,
  'bgcolor-rgb(61,142,185)':(children,{key})=><span style={{backgroundColor:'rgb(61,142,185)'}} key={key}>{children}</span>, 
  'bgcolor-rgb(41,105,176)':(children,{key})=><span style={{backgroundColor:'rgb(41,105,176)'}} key={key}>{children}</span>, 
  'bgcolor-rgb(85,57,130)':(children,{key})=><span style={{backgroundColor:'rgb(85,57,130)'}} key={key}>{children}</span>, 
  'bgcolor-rgb(40,50,78)':(children,{key})=><span style={{backgroundColor:'rgb(40,50,78)'}} key={key}>{children}</span>, 
  'bgcolor-rgb(0,0,0)':(children,{key})=><span style={{backgroundColor:'rgb(0,0,0)'}} key={key}>{children}</span>,
  'bgcolor-rgb(247,218,100)':(children,{key})=><span style={{backgroundColor:'rgb(247,218,100)'}} key={key}>{children}</span>, 
  'bgcolor-rgb(251,160,38)':(children,{key})=><span style={{backgroundColor:'rgb(251,160,38)'}} key={key}>{children}</span>, 
  'bgcolor-rgb(235,107,86)':(children,{key})=><span style={{backgroundColor:'rgb(235,107,86)'}} key={key}>{children}</span>, 
  'bgcolor-rgb(226,80,65)':(children,{key})=><span style={{backgroundColor:'rgb(226,80,65)'}} key={key}>{children}</span>, 
  'bgcolor-rgb(163,143,132)':(children,{key})=><span style={{backgroundColor:'rgb(163,143,132)'}} key={key}>{children}</span>,
  'bgcolor-rgb(239,239,239)':(children,{key})=><span style={{backgroundColor:'rgb(239,239,239)'}} key={key}>{children}</span>, 
  'bgcolor-rgb(255,255,255)':(children,{key})=><span style={{backgroundColor:'rgb(255,255,255)'}} key={key}>{children}</span>, 
  'bgcolor-rgb(250,197,28)':(children,{key})=><span style={{backgroundColor:'rgb(250,197,28)'}} key={key}>{children}</span>, 
  'bgcolor-rgb(243,121,52)':(children,{key})=><span style={{backgroundColor:'rgb(243,121,52)'}} key={key}>{children}</span>, 
  'bgcolor-rgb(209,72,65)':(children,{key})=><span style={{backgroundColor:'rgb(209,72,65)'}} key={key}>{children}</span>,
  'bgcolor-rgb(184,49,47)':(children,{key})=><span style={{backgroundColor:'rgb(184,49,47)'}} key={key}>{children}</span>, 
  'bgcolor-rgb(124,112,107)':(children,{key})=><span style={{backgroundColor:'rgb(124,112,107)'}} key={key}>{children}</span>, 
  'bgcolor-rgb(209,213,216)':(children,{key})=><span style={{backgroundColor:'rgb(209,213,216)'}} key={key}>{children}</span>

 
};


const addBreaklines = children => children.map((child,i) => [child, <br key={i} />]);

const getList = ordered =>
  (children, { depth, keys,data }) => (
    <List style={data[0]} key={keys[0]} keys={keys} depth={depth} ordered={ordered}>
      {children.map((child, i) => <li key={keys[i]} >{child}</li>)}
    </List>
  );

const getAtomic = (children, { data, keys }) => data.map(
  (item, i) => <AtomicBlock key={keys[i]} {...data[i]} />
);

/**
 * Note that children can be maped to render a list or do other cool stuff
 */
const blocks = {
  // Rendering blocks like this along with cleanup results in a single p tag for each paragraph
  // adding an empty block closes current paragraph and starts a new one
  unstyled: (children, { keys,data }) =><p style={{textAlign: data[0]['text-align']}} key={keys[0]}>{addBreaklines(children)}</p> ,
 // atomic: getAtomic,
  blockquote:
    (children, { keys,data  }) => <blockquote  style={data[0]}  key={keys[0]} >{addBreaklines(children)}</blockquote>,
  'header-one': (children, { keys,data }) => children.map((child, i) => <h1  style={data[0]}  key={keys[i]}>{child}</h1>),
  'header-two': (children, { keys,data  }) => children.map((child, i) => <h2  style={data[0]}  key={keys[i]}>{child}</h2>),
  'header-three': (children, { keys,data }) => children.map((child, i) => <h3  style={data[0]}  key={keys[i]}>{child}</h3>),
  'header-four': (children, { keys,data  }) => children.map((child, i) => <h4  style={data[0]}  key={keys[i]}>{child}</h4>),
  'header-five': (children, { keys,data  }) => children.map((child, i) => <h5  style={data[0]}  key={keys[i]}>{child}</h5>),
  'header-six': (children, { keys,data  }) => children.map((child, i) => <h6  style={data[0]}  key={keys[i]}>{child}</h6>),
  'code-block': (children, { keys,data  }) =>{const style={...styles.codeBlock,...data[0]};return(<pre key={keys[0]} style={style}>{addBreaklines(children)}</pre>)} ,
  'unordered-list-item': getList(),
  'ordered-list-item': getList(true),
};

const entities = {
  LINK: (children, entity, { key }) => <a key={key} href={entity.url}>{children}</a>,
  IMAGE:(children, entity, { key }) =>{let style=null;style= (entity.alignment===undefined||entity.alignment==='none')?styles.imageCenter:styles['image'+entity.alignment];return(<span  key={key}> <img style={style} src={entity.src} alt='image' height={entity.height} width={entity.width} /><br style={{clear:'both'}} /> </span> )},
  EMBEDDED_LINK:(children, entity, { key }) => <iframe height='315' width='560' key={key} src={entity.src} style={{display:'block', marginLeft: 'auto',marginRight: 'auto'}} />,
};


const isEmptyRaw = raw => (!raw || !raw.blocks || (raw.blocks.length === 1 && raw.blocks[0].text === ''));

const options = {
  cleanup: {
    after: 'all',
    types: 'all',
    split: true,
  },
};

const Preview = ({ raw }) => {
  const isEmpty = isEmptyRaw(raw);
  window.redraft = redraft;
  return (
    <div className="Preview">
      {isEmpty && <div className="Preview-empty">There's nothing to render...</div>}
      {!isEmpty && redraft(raw, { inline, blocks, entities }, options)}
    </div>
  );
};
Preview.propTypes = {
  raw: PropTypes.shape({
    blocks: PropTypes.array.isRequired, // eslint-disable-line react/no-unused-prop-types
    entityMap: PropTypes.oneOfType([
      PropTypes.object.isRequired,
      PropTypes.array.isRequired 
    ]), // eslint-disable-line react/no-unused-prop-types
  }).isRequired,
};
export default Preview;