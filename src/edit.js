import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import './editor.scss';


export default function Edit({ attributes, setAttributes }) {
	const { inputValue } = attributes; 

	const [count, setCount] = useState(1); 

	function updateValue(newValue){
        setAttributes({
            inputValue: newValue
        });
        console.log(inputValue);
    }

	function setAngle(){
		console.log('dude'); 
	}

	function updateCount(newCount){
		setCount(newCount => newCount + 1); 
	}

	return (
		<>
			<InspectorControls>
   				<TextControl
                    label="another input"
                    value={inputValue}
                    onChange={updateValue}
                    type="email"
                    placeholder="input anything"
                />
				<h2 { ...useBlockProps() }>The Count: {count}</h2>
				<button
					onClick={updateCount}
				>increase</button>
			</InspectorControls>
			<p { ...useBlockProps() }>
				{ __(
					'Test Component Block – hello from the editor!',
					'test-component-block'
				) }
				<br />
				{inputValue ? inputValue : 'text will show up here' }
				<br />
				{count ? count  : 'the count will show up here' }
			</p>
		</>
		
	);
}
