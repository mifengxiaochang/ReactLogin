import React from 'react';
import {render} from 'react-dom';
import './login.less';
import Text from './text.jsx';
import Login from './login.jsx';


const textData=[
	{
		text:"Enterprise Software Platform for Microsoft",
		class:"enterprise"
	},
	{
		text:"DocAve 6 SP8 Trial",
		class:"trial"
	},
	{
		text:"©2001-2007 AvePoint,Inc.All Rights Reserved",
		class:"reserved"
	}
];




render(
	<div>
		<Text texts={textData}/>
		<Login/>
	</div>
	,
	document.getElementById('container')
	);

