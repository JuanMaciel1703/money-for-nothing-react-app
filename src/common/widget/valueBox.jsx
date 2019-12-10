import React from 'react'
import Grid from '../layout/grid'
import Loading from './loading'

export default props => (
    <Grid cols={props.cols}>
        <div className={`small-box bg-${props.color}`}>
            <div className='inner'>
                <h3>R$ {props.isLoading ? '' : props.value} <Loading show={props.isLoading}/></h3>
                <p>{props.text}</p>
            </div>
            <div className='icon'>
                <i className={`fa fa-${props.icon}`}></i>
            </div>
        </div>
    </Grid>
)