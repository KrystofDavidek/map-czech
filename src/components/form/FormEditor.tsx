import { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import { Box } from '@mui/material';
import draftToHtml from 'draftjs-to-html';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const FormEditor = (props: any) => {
	const [editorState, setEditorState] = useState(EditorState.createEmpty());

	const onEditorStateChange = (editorState: any) => {
		setEditorState(editorState);

		return props.onChange(
			draftToHtml(convertToRaw(editorState.getCurrentContent())).replace(
				/[\r\n]+/gm,
				''
			)
		);
	};

	return (
		<Box
			className="editor"
			sx={{ border: '1px solid #E0E0E0', width: '100%', p: '1rem' }}
		>
			<Editor
				wrapperClassName="wrapper-class"
				editorClassName="editor-class"
				toolbarClassName="toolbar-class"
				toolbar={{
					options: [
						'inline',
						'blockType',
						'list',
						'colorPicker',
						'link',
						'embedded',
						'emoji',
						'history'
					],
					inline: { inDropdown: true },
					list: { inDropdown: true },
					textAlign: { inDropdown: true },
					link: { inDropdown: true },
					history: { inDropdown: true },
					blockType: {
						inDropdown: true,
						options: ['Normal', 'H2']
					}
				}}
				stripPastedStyles
				editorState={editorState}
				onEditorStateChange={onEditorStateChange}
			/>
		</Box>
	);
};

export default FormEditor;
