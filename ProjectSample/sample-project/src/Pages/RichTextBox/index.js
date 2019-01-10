import React,{Component} from 'react';
import {EditorState,RichUtils, getDefaultKeyBinding,convertToRaw,convertFromRaw,AtomicBlockUtils ,CompositeDecorator} from 'draft-js';
import Editor,{composeDecorators } from 'draft-js-plugins-editor';
import createImagePlugin from 'draft-js-image-plugin';
import createFocusPlugin from 'draft-js-focus-plugin';
import createBlockDndPlugin from 'draft-js-drag-n-drop-plugin';
import createDragNDropUploadPlugin from '@mikeljames/draft-js-drag-n-drop-upload-plugin';
import 'draft-js/dist/Draft.css';
import 'draft-js-image-plugin/lib/plugin.css';
import axios from 'axios';
import createLinkifyPlugin from 'draft-js-linkify-plugin';


import BlockStyleControls from './BlockStyleControls';
import InlineStyleControls from './InlineStyleControls';
import './rich.css';
import handleUpload from '../../Service/UploadImage';
//import Link from './Link';
import Preview from '../RenderFromDraft/Preview/Preview';
import addLinkPluginPlugin from './Plugin/addLinkPlugin';
import mediaBlockRenderer from './Plugin/addMediaPlugin';

const focusPlugin = createFocusPlugin();
const blockDndPlugin = createBlockDndPlugin();



const decorator = composeDecorators(
  focusPlugin.decorator,
  blockDndPlugin.decorator
);

const linkifyPlugin = createLinkifyPlugin();
const imagePlugin = createImagePlugin({ decorator });
const dragNDropFileUploadPlugin = createDragNDropUploadPlugin({
  handleUpload:  () => {
    console.log(arguments)
  },
  addImage: (editorState, src) => {
    return imagePlugin.addImage(editorState, src);
   }
});

const plugins = [
  dragNDropFileUploadPlugin,
  blockDndPlugin,
  focusPlugin,
  imagePlugin,
  linkifyPlugin,
  addLinkPluginPlugin
];

class MyEditor extends Component{
    constructor(props) {
        super(props);
        this.state = {
          editorState: props.content ? EditorState.createWithContent(convertFromRaw(props.content)) : EditorState.createEmpty(),
          showURLInput: false,
          urlValue: '',

        //media
        showURLInputMedia: false,
        urlMedia: '',
        urlType: '',
        };
        this.focus = () => this.refs.editor.focus();
        this.onChange = (editorState) => this.setState({
          editorState
        });

        //#region function
        this.handleKeyCommand = this._handleKeyCommand.bind(this);
        this.mapKeyToEditorCommand = this._mapKeyToEditorCommand.bind(this);
        this.toggleBlockType = this._toggleBlockType.bind(this);
        this.toggleInlineStyle = this._toggleInlineStyle.bind(this);
        this.promptForLink = this._promptForLink.bind(this);
        this.onURLChange = (e) => this.setState({
          urlValue: e.target.value
        });
        this.confirmLink = this._confirmLink.bind(this);
        this.onLinkInputKeyDown = this._onLinkInputKeyDown.bind(this);
        this.removeLink = this._removeLink.bind(this);

        //media
        this.addAudio = this._addAudio.bind(this);
        this.addVideo = this._addVideo.bind(this);
        this.confirmMedia = this._confirmMedia.bind(this);
        this.onURLInputKeyDown = this._onURLInputKeyDown.bind(this);
        this.onURLMediaChange = (e) => this.setState({
          urlMedia: e.target.value
        });
        //#endregion
      
      }

      //#region fucntion 
      _handleKeyCommand(command, editorState) {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
          this.onChange(newState);
          return true;
        }
        return false;
      }
      _mapKeyToEditorCommand(e) {
        if (e.keyCode === 9 /* TAB */) {
          const newEditorState = RichUtils.onTab(
            e,
            this.state.editorState,
            4, /* maxDepth */
          );
          if (newEditorState !== this.state.editorState) {
            this.onChange(newEditorState);
          }
          return;
        }
        return getDefaultKeyBinding(e);
      }
      _toggleBlockType(blockType) {
        this.onChange(
          RichUtils.toggleBlockType(
            this.state.editorState,
            blockType
          )
        );
      }
      _toggleInlineStyle(inlineStyle) {
        this.onChange(
          RichUtils.toggleInlineStyle(
            this.state.editorState,
            inlineStyle
          )
        );
      }
      //#endregion

//#region Add Link
      _promptForLink(e) {
        e.preventDefault();
        const {editorState} = this.state;
        const selection = editorState.getSelection();
        if (!selection.isCollapsed()) {
          const contentState = editorState.getCurrentContent();
          const startKey = editorState.getSelection().getStartKey();
          const startOffset = editorState.getSelection().getStartOffset();
          const blockWithLinkAtBeginning = contentState.getBlockForKey(startKey);
          const linkKey = blockWithLinkAtBeginning.getEntityAt(startOffset);
          let url = '';
          if (linkKey) {
            const linkInstance = contentState.getEntity(linkKey);
            url = linkInstance.getData().url;
          }
          this.setState({
            showURLInput: true,
            urlValue: url,
          }, () => {
            setTimeout(() => this.refs.url.focus(), 0);
          });
        }
      }
      _confirmLink(e) {
        e.preventDefault();
        const {editorState, urlValue} = this.state;
        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity(
          'LINK',
          'MUTABLE',
          {url: urlValue}
        );
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });
        this.setState({
          editorState: RichUtils.toggleLink(
            newEditorState,
            newEditorState.getSelection(),
            entityKey
          ),
          showURLInput: false,
          urlValue: '',
        }, () => {
          setTimeout(() => this.refs.editor.focus(), 0);
        });
      }
      _onLinkInputKeyDown(e) {
        if (e.which === 13) {
          this._confirmLink(e);
        }
      }
      _removeLink(e) {
        e.preventDefault();
        const {editorState} = this.state;
        const selection = editorState.getSelection();
        if (!selection.isCollapsed()) {
          this.setState({
            editorState: RichUtils.toggleLink(editorState, selection, null),
          });
        }
      }
      //#endregion

//#region media video,audio
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
    _addAudio() {
      this._promptForMedia('AUDIO');
    }
    _addVideo() {
      this._promptForMedia('VIDEO');
    }
//#endregion
//#region call API
Test = () => {
  const CurrentContent = { ...convertToRaw(this.state.editorState.getCurrentContent())};
  const Content = {...CurrentContent} 
  const entityMap = Content.entityMap;
  const arrImage = Object.keys(entityMap).map((k) => entityMap[k]);
  Promise.all(handleUpload(arrImage))
    .then(result => {
      const NewContent =  { ...Content,entityMap: result};
      console.log(JSON.stringify(NewContent));
      console.log(convertToRaw(this.state.editorState.getCurrentContent()));
      //post API
      // axios.post("http://localhost:51520/api/Values/InsertContent", NewContent).then((resp) => {

      // }).catch(error => {
      //   console.log(error)
      // });
      // console.log(convertToRaw(this.state.editorState.getCurrentContent()))
    })
    .catch(error => console.log(error))


 // console.log(convertToRaw(this.state.editorState.getCurrentContent()))
}
//#endregion

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


  
  renderWarning() {
    return <div>Nothing to render.</div>;
  }
      render() {
        const {editorState} = this.state;
        let rendered=null;
        if (!editorState) {
          rendered= this.renderWarning();
        }
        else{
          rendered = <Preview raw={convertToRaw(editorState.getCurrentContent())}></Preview>;
        }
        
        if (!rendered) {
          rendered= this.renderWarning();
        }
   // console.log(JSON.stringify(convertToRaw(editorState.getCurrentContent())));

        let urlInput;
        if (this.state.showURLInput) {
          urlInput =
            <div style={{ marginBottom: 10,marginTop:10}}>
              <input
                onChange={this.onURLChange}
                ref="url"
                style={{fontFamily: '\'Georgia\', serif',marginRight: 10, padding: 3}}
                type="text"
                value={this.state.urlValue}
                onKeyDown={this.onLinkInputKeyDown}
                placeholder='Nhập đường dẫn liên kết'
              />
              <button onMouseDown={this.confirmLink}>
                Xác nhận
              </button>
            </div>;
        }

        let urlMediInput;
        if (this.state.showURLInputMedia) {
          urlMediInput =
            <div style={{ marginBottom: 10,marginTop:10}}>
              <input
                onChange={this.onURLMediaChange}
                ref="url"
                style={{fontFamily: '\'Georgia\', serif',marginRight: 10, padding: 3}}
                type="text"
                value={this.state.urlMedia}
                onKeyDown={this.onURLInputKeyDown}
              />
              <button onMouseDown={this.confirmMedia}>
                Xác nhận
              </button>
            </div>;
        }
        let className = 'RichEditor-editor';
          var contentState = editorState.getCurrentContent();
          if (!contentState.hasText()) {
            if (contentState.getBlockMap().first().getType() !== 'unstyled') {
              className += ' RichEditor-hidePlaceholder';
            }
          }
          return (
            <div>
              <div className="RichEditor-root">
                <BlockStyleControls
                  editorState={editorState}
                  onToggle={this.toggleBlockType}
                />
                <InlineStyleControls
                  editorState={editorState}
                  onToggle={this.toggleInlineStyle}
                />
                <input 
                    type="file" 
                    accept="image/png, image/jpeg" 
                    multiple
                    ref ={(ref)=>this.images=ref} 
                    onChange={e=>this.handleFileChosen(e.target.files)}/>
                {/* <div style={{marginBottom: 10,marginTop:10,fontFamily: '\'Georgia\', serif'}}>
                 Chọn đoạn văn cần chèn liên kết hoặc xóa liên kết, sau đó sử dụng các nút Chèn liên kết hoặc xóa liên kết
                </div> */}
                <div style={{marginTop:10}}>
                  <button
                    onMouseDown={this.promptForLink}
                    style={{marginRight: 10}}>
                    Chèn liên kết
                  </button>
                  <button onMouseDown={this.removeLink}>
                    Xóa liên kết
                  </button>
                </div>
                {urlInput}

                <div style={{marginTop:10}}>
                {/* <button onMouseDown={this.addAudio} style={{marginRight: 10}}>
                  Chèn âm thanh
                </button> */}
                <button onMouseDown={this.addVideo} style={{marginRight: 10}}>
                 Chèn video
                </button>
                </div>
                {urlMediInput}

                <div className={className} onClick={this.focus}>             
                  <Editor
                    blockStyleFn={getBlockStyle}
                    customStyleMap={styleMap}
                    editorState={editorState}
                    handleKeyCommand={this.handleKeyCommand}
                    keyBindingFn={this.mapKeyToEditorCommand}
                    onChange={this.onChange}
                    placeholder="Nhập nội dung"
                    ref="editor"
                    plugins={plugins}
                    blockRendererFn={mediaBlockRenderer}
                  />
                </div>           
              </div>
              <div>
                <button onClick={this.Test} >Test </button>
              </div>

              <div>
                {rendered}
              </div>

            </div>
          );
      }
}
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};



function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote': return 'RichEditor-blockquote';
    default: return null;
  }
}


export default MyEditor;