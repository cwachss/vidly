import React from 'react';

const Like = props => {
    let style = 'regular';
    if(props.liked) style = 'solid';
    let classes = `fa-${style} fa-heart`;
    return (<i onClick={props.onClick} style={{cursor: 'pointer'}} className={classes}></i>);
}
 
export default Like;