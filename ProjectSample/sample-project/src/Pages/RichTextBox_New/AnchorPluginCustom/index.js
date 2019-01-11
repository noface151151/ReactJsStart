import decorateComponentWithProps from 'decorate-component-with-props';
import LinkVideoButton from '../VideoButton/VideoLinkButton/index';
import linkStyles from '../linkStyles.css';
import mediaBlockRenderer from '../../RichTextBox/Plugin/addMediaPlugin';

export default (config = {}) => {
  const defaultTheme = linkStyles;

  const { theme = defaultTheme, placeholder } = config;

  const store = {
    getEditorState: undefined,
    setEditorState: undefined
  };

  return {
    initialize: ({ getEditorState, setEditorState }) => {
      store.getEditorState = getEditorState;
      store.setEditorState = setEditorState;
    },

    blockRendererFn: mediaBlockRenderer,

    LinkVideoButton: decorateComponentWithProps(LinkVideoButton, {
      ownTheme: theme,
      store,
      placeholder,
    //   onRemoveLinkAtSelection: () => store.setEditorState(
    //     EditorUtils.removeLinkAtSelection(store.getEditorState())
    //   )
    })
  };
};