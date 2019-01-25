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
const fontFamilies = ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana']
const colors=['rgb(97,189,109)', 'rgb(26,188,156)', 'rgb(84,172,210)', 'rgb(44,130,201)',
'rgb(147,101,184)', 'rgb(71,85,119)', 'rgb(204,204,204)', 'rgb(65,168,95)', 'rgb(0,168,133)',
'rgb(61,142,185)', 'rgb(41,105,176)', 'rgb(85,57,130)', 'rgb(40,50,78)', 'rgb(0,0,0)',
'rgb(247,218,100)', 'rgb(251,160,38)', 'rgb(235,107,86)', 'rgb(226,80,65)', 'rgb(163,143,132)',
'rgb(239,239,239)', 'rgb(255,255,255)', 'rgb(250,197,28)', 'rgb(243,121,52)', 'rgb(209,72,65)',
'rgb(184,49,47)', 'rgb(124,112,107)', 'rgb(209,213,216)'];

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
fontFamilies.map(value=>{
  const inlineFontFamilies ={
    ['fontfamily-'+value]:(children,{key})=>{
      return(
        <span style={{fontFamily:value}} key={key}>{children}</span>
      )
    }
  }
  inline={...inline,...inlineFontFamilies};
})
colors.map(value=>{
  const colorInline = {
    ['color-'+value]:(children,{key})=>{
      return(
        <span style={{color:value}} key={key}>{children}</span>
      )
    }
  }
  const hightlightInline = {
    ['bgcolor-'+value]:(children,{key})=>{
      return(
        <span style={{backgroundColor:value}} key={key}>{children}</span>
      )
    }
  }
  inline={...inline,...colorInline,...hightlightInline};
})
 inline = {
   ...inline,
  BOLD: (children, { key }) => <strong key={key}>{children}</strong>,
  ITALIC: (children, { key }) => <em key={key}>{children}</em>,
  UNDERLINE: (children, { key }) => <u key={key}>{children}</u>,
  CODE: (children, { key }) => <span key={key} style={styles.code}>{children}</span>,
  SUPERSCRIPT:(children,{key})=><sup key={key}>{children}</sup>,
  SUBSCRIPT:(children,{key})=><sub key={key}>{children}</sub>,
  STRIKETHROUGH:(children,{key})=><strike key={key}>{children}</strike>
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