import React from 'react'

export default props => (
    <div className={`alert alert-${props.type} alert-dismissible`}>
        <button type="button" className="close" onClick={props.handleClose}>×</button>
        <h4><i className={`icon fa fa-${props.icon || 'ban'}`}></i> {props.title || 'Error'}</h4>
        <p>{props.message}</p>
    </div>
)