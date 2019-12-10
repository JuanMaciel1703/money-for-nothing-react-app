import React from 'react'

export default props => (
    <i className={`fa fa-refresh fa-spin ${props.show ? 'fade-in' : 'fade-out'}`}></i>
)