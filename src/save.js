import { useBlockProps } from '@wordpress/block-editor';

export default function save({attributes, count}) {
	const { inputValue } = attributes; 
	return (
		<p { ...useBlockProps.save() }>
			{inputValue}<br/>
			{count}
			{ 'Test Component Block – hello from the saved content!' }
		</p>
	);
}
