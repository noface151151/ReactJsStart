import React,{Component} from 'react';
import {EditorState,RichUtils, getDefaultKeyBinding,convertToRaw,convertFromRaw} from 'draft-js';
import Editor,{composeDecorators } from 'draft-js-plugins-editor';
import createImagePlugin from 'draft-js-image-plugin';
import createFocusPlugin from 'draft-js-focus-plugin';
import createBlockDndPlugin from 'draft-js-drag-n-drop-plugin';
import createDragNDropUploadPlugin from '@mikeljames/draft-js-drag-n-drop-upload-plugin';
import 'draft-js/dist/Draft.css';
import 'draft-js-image-plugin/lib/plugin.css';
import axios from 'axios';

import BlockStyleControls from './BlockStyleControls';
import InlineStyleControls from './InlineStyleControls';
import './rich.css';
import handleUpload from '../../Service/UploadImage';

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
  //  handleUpload(src)
  //    .then(resp => {
  //      console.log(resp.data.secure_url)
  //      return imagePlugin.addImage(editorState, resp.data.secure_url);
  //    })
  //    .catch(err => {
  //     return imagePlugin.addImage(editorState, null);
  //    });
   // console.log('addImage')
   }
});

const plugins = [
  dragNDropFileUploadPlugin,
  blockDndPlugin,
  focusPlugin,
  imagePlugin
];

class MyEditor extends Component{
    constructor(props) {
        super(props);
        this.state = {editorState: props.content ? EditorState.createWithContent(convertFromRaw(props.content)):EditorState.createEmpty()};
        this.focus = () => this.refs.editor.focus();
        this.onChange = (editorState) => this.setState({editorState});
        this.handleKeyCommand = this._handleKeyCommand.bind(this);
        this.mapKeyToEditorCommand = this._mapKeyToEditorCommand.bind(this);
        this.toggleBlockType = this._toggleBlockType.bind(this);
        this.toggleInlineStyle = this._toggleInlineStyle.bind(this);
      }

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
        // axios.post("http://localhost:51520/api/Values/InsertContent", NewContent).then((resp) => {

        // }).catch(error => {
        //   console.log(error)
        // });
        // console.log(convertToRaw(this.state.editorState.getCurrentContent()))
      })
      .catch(error => console.log(error))

 
   // console.log(convertToRaw(this.state.editorState.getCurrentContent()))
  }
     

      render() {
        const {editorState} = this.state;
        const raw = convertToRaw(editorState.getCurrentContent())
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
                    spellCheck={true}
                  />
                </div>           
              </div>
              <div>
                {/* {JSON.stringify(raw)} */}
              </div>

              <div>
                <button onClick={this.Test} >Test </button>
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