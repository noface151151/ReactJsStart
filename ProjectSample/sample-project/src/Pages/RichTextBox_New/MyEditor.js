import React, { Component } from 'react';
import Editor,{composeDecorators }  from 'draft-js-plugins-editor';
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';
import createLinkPlugin from 'draft-js-anchor-plugin';
import {EditorState,AtomicBlockUtils,convertToRaw} from 'draft-js';
import 'draft-js/dist/Draft.css';
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  UnorderedListButton,
  OrderedListButton
} from 'draft-js-buttons';
import createVideoPlugin from 'draft-js-video-plugin';
import createImagePlugin from 'draft-js-image-plugin';
import createFocusPlugin from 'draft-js-focus-plugin';
import createBlockDndPlugin from 'draft-js-drag-n-drop-plugin';
import createDragNDropUploadPlugin from '@mikeljames/draft-js-drag-n-drop-upload-plugin';

import editorStyles from './editorStyles.css';
import buttonStyles from './buttonStyles.css';
import toolbarStyles from './toolbarStyles.css';
import linkStyles from './linkStyles.css'
import HeadlinesButton from './HeadlinesButton';
import Preview from '../RenderFromDraft/Preview/Preview';


const linkPlugin = createLinkPlugin({
    theme: linkStyles,
    placeholder: 'http://…'
  });
  const videoPlugin = createVideoPlugin();
  const { types } = videoPlugin;


  const inlineToolbarPlugin = createInlineToolbarPlugin({
    theme: { buttonStyles, toolbarStyles }
  });
  const { InlineToolbar } = inlineToolbarPlugin;

  const focusPlugin = createFocusPlugin();
  const blockDndPlugin = createBlockDndPlugin();
  const decorator = composeDecorators(
    focusPlugin.decorator,
    blockDndPlugin.decorator
  );
  const imagePlugin = createImagePlugin({ decorator });
 
  const dragNDropFileUploadPlugin = createDragNDropUploadPlugin({
    handleUpload:  () => {
      console.log(arguments)
    },
    addImage: (editorState, src) => {
      return imagePlugin.addImage(editorState, src);
     }
  });
  const plugins = [inlineToolbarPlugin, linkPlugin,videoPlugin,imagePlugin,dragNDropFileUploadPlugin];
  export default class ThemedInlineToolbarEditor extends Component {
        constructor(props) {
          super(props);
          this.state = {
            editorState: EditorState.createEmpty(),

            showURLInputMedia: false,
            urlMedia: '',
            urlType: '',
          };
       //   this.addAudio = this._addAudio.bind(this);
          this.addVideo = this._addVideo.bind(this);
          this.confirmMedia = this._confirmMedia.bind(this);
          this.onURLInputKeyDown = this._onURLInputKeyDown.bind(this);
          this.onURLMediaChange = (e) => this.setState({
            urlMedia: e.target.value
          });
          this.onClose = this._onClose.bind(this);
        }
        _onClose(e){
          e.preventDefault();
          this.setState({
            showURLInputMedia: false
          }, () => {
            setTimeout(() => this.focus(), 0);
          });
        }
        _confirmMedia(e) {
          e.preventDefault();
          const {editorState, urlMedia, urlType} = this.state;
          const contentState = editorState.getCurrentContent();
          const contentStateWithEntity = contentState.createEntity(
            urlType,
            'IMMUTABLE',
            {src: urlMedia}
          );
          const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
          const newEditorState = EditorState.set(
            editorState,
            {currentContent: contentStateWithEntity}
          );
          this.setState({
            editorState: AtomicBlockUtils.insertAtomicBlock(
              newEditorState,
              entityKey,
              ' '
            ),
            showURLInputMedia: false,
            urlMedia: '',
          }, () => {
            setTimeout(() => this.focus(), 0);
          });
        }
        _onURLInputKeyDown(e) {
          if (e.which === 13) {
            this._confirmMedia(e);
          }
        }
        _promptForMedia(type) {
          this.setState({
            showURLInputMedia: true,
            urlMedia: '',
            urlType: type,
          }, () => {
            setTimeout(() => this.refs.url.focus(), 0);
          });
        }
        // _addAudio() {
        //   this._promptForMedia('AUDIO');
        // }
        _addVideo() {
          this._promptForMedia(types.VIDEOTYPE);
        }
    
    
    onChange = (editorState) =>
        this.setState({ editorState });
  
    focus = () =>
        this.editor.focus();
  
        renderWarning() {
          return <div>Nothing to render.</div>;
        }

//#region Insert IMAGE
getBase64 = (file) => {
  const length = file.length;
  const promises = [];
  for(let i=0;i<length;i++){
    promises.push(new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file[i]);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    }));
  }
  return promises;
 }
 insertImage = (editorState, base64) => {
  const contentState = editorState.getCurrentContent();
  const contentStateWithEntity = contentState.createEntity(
    "IMAGE",
    "IMMUTABLE",
    { src: base64 }
  );
  const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
  const newEditorState = EditorState.set(editorState, {
    currentContent: contentStateWithEntity
  });
  return AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, " ");
};

handleFileChosen =(file)=>{
  Promise.all(this.getBase64(file)).then((values)=>{
    values.map(value=>{
      const newEditorState = this.insertImage(this.state.editorState, value);
     // console.log(newEditorState)
      this.onChange(newEditorState);
    })
  }).catch(error=>{
    console.log(error)
  })
}     
//#endregion
    render() {
      let rendered=null;
        if (!this.state.editorState) {
          rendered= this.renderWarning();
        }
        else{
          rendered = <Preview raw={convertToRaw(this.state.editorState.getCurrentContent())}></Preview>;
        }
        
        if (!rendered) {
          rendered= this.renderWarning();
        }
      let urlMediaInput;
        if (this.state.showURLInputMedia) {
          urlMediaInput =
            <div style={{ marginBottom: 10,marginTop:10}}>
              <div className="form-group">
                <label>Đường dẫn video:</label>
                <input ref="url" type="text" className="form-control"  onChange={this.onURLMediaChange} onKeyDown={this.onURLInputKeyDown}/>
              </div>
              <button onMouseDown={this.confirmMedia} type="button" className="btn btn-success">Xác nhận</button>
              <button onMouseDown={this.onClose}  type="button"  className="btn btn-danger" style={{marginLeft:'5px'}}>Đóng</button>
            </div>;
        }
       // console.log(JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent())));
      return (
        <div>
          <div className={editorStyles.RichEditorRoot}>
            <div style={{marginBottom:10}}>
            <label className='btn btn-info'  onMouseDown={this.addVideo} >
                Chèn video
            </label>
            <label style={{marginLeft:5}} className='btn btn-info'>Chọn hình ảnh 
              <input type="file" style={{display:'none'}} 
                  accept="image/png, image/jpeg" 
                  multiple
                  ref ={(ref)=>this.images=ref} 
                  onChange={e=>this.handleFileChosen(e.target.files)}></input>
            </label>  
              {urlMediaInput}     
          </div>
   
        <div className={editorStyles.editor} onClick={this.focus}>
        
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            ref={(element) => { this.editor = element; }}
          />
          <InlineToolbar>
            {
              // may be use React.Fragment instead of div to improve perfomance after React 16
              (externalProps) => (
                <div>
                  <BoldButton {...externalProps} />
                  <ItalicButton {...externalProps} />
                  <UnderlineButton {...externalProps} />
                  <linkPlugin.LinkButton {...externalProps} />
                  <HeadlinesButton {...externalProps} />
                  <UnorderedListButton {...externalProps} />
                  <OrderedListButton {...externalProps} />
                  
                </div>
              )
            }
          </InlineToolbar>
        </div>
        </div>
        <div>
          {rendered}
        </div>
         </div>
      );
    }
    }