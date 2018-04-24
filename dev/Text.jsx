 import React,{Component} from 'react';
var Text = (props)=>{

	let itemNodes = props.texts.map((item,idx)=>{
		if(item.class=="enterprise"){
			return <div className={item.class} key ={'item'+idx}>
			{item.text} <div className="icon-r">&#174;</div> SharePoint <div className="icon-r">&#174;</div>
			</div>;
		} else {
			return <div className={item.class} key ={'item'+idx}>{item.text} </div>;
		}
	});
           	return (
           		<div id="text-wrap">
            		{itemNodes}
            	</div>
            );
};
export default Text;

