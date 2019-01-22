import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState,convertToRaw,convertFromRaw } from 'draft-js';
import handleUpload from '../../Service/UploadImage';
import Preview from '../RenderFromDraft/Preview/Preview';


class ControlledEditor extends Component {
    constructor(props) {
      super(props);
      this.state = {
        editorState:props.content? EditorState.createWithContent(convertFromRaw(props.content)) : EditorState.createEmpty(),
      };
    }
  
    onEditorStateChange = (editorState) => {
      this.setState({
        editorState,
      });
    };
    uploadImage = (files)=>{
        
       return handleUpload(files);
    }
    renderWarning() {
        return <div>Nothing to render.</div>;
      }
    //   shouldComponentUpdate(nextProps) {
    //     return this.props.children.props.block.getText() !== nextProps.children.props.block.getText()
    //   }
    render() {
      const { editorState } = this.state;
      console.log(JSON.stringify(convertToRaw(editorState.getCurrentContent())))
      let rendered=null;
      if (!editorState) {
        rendered= this.renderWarning();
      }
      else{
        rendered = <Preview raw={ convertToRaw(editorState.getCurrentContent())}></Preview>;
      }
      
      if (!rendered) {
        rendered= this.renderWarning();
      }
      return (
        <div>
            <Editor
            editorState={editorState}
            wrapperClassName="wrapper-class"
                editorClassName="editor-class"
            toolbarClassName="toolbar-class"
            wrapperStyle={{width:'60%'}}
            editorStyle = {
                {
                        overflow: 'auto',
                    boxSizing: 'border-box',
                    height: '275px',
                    border: '1px solid #F1F1F1',
                    padding: '5px',
                    borderRadius: '2px'
                }
            }
            toolbar={{
                image:{
                    uploadEnabled: true,
                    uploadCallback:this.uploadImage,
                    previewImage:true
                //  previewImage: true,
                    
                }
            }}
            onEditorStateChange={this.onEditorStateChange}
            />
            {rendered}
        </div>
      )
    }
  }

  export default ControlledEditor;
  
