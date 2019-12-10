import React from 'react'

import Content from '../common/template/content'
import Alert from '../common/template/alert'
import ContentHeader from '../common/template/contentHeader'
import Row from '../common/layout/row'
import Grid from '../common/layout/grid'
import getData from '../main/connect'
import Table from './table'
import Loading from '../common/widget/loading'


class BillingCycle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            billingCycles: [],
            isLoading: false,
            alert: null
        }

        this.handleCloseAlert = this.handleCloseAlert.bind(this)
        this.fetchBillingCycles = this.fetchBillingCycles.bind(this)
    }

    fetchBillingCycles() {
        getData('BillingCycles').then(response => {
            this.setState({ ...this.state, billingCycles: response.data, isLoading: false})
        }).catch (err => {
            this.setState({
                ...this.state, 
                isLoading: false, 
                alert: { type: 'danger', title: 'An error occurred fetching dashboard data', message: err.message}
            })
        })
    }

    componentWillMount() {
        this.fetchBillingCycles()
        this.setState({ ...this.state, isLoading: true })
    }

    componentDidMount() {
        if (this.state.billingCycles.length > 0) {
            this.setState({ ...this.state, isLoading: false })
        }
    }

    handleCloseAlert() {
        this.setState({ ...this.state, alert: null})
    }

    render() {
        return (
            <div>
                <ContentHeader title='Billing Cycle' small='Management'/>
                <Content>
                        {
                            this.state.alert ? 
                            <Row>
                                <Grid cols="12">
                                    <Alert  
                                        title={this.state.alert.title}
                                        message={this.state.alert.message}
                                        type={this.state.alert.type} 
                                        handleClose={this.handleCloseAlert}
                                        />
                                </Grid>
                            </Row>
                            : null
                        }
                        {
                            !this.state.isLoading ?
                            <Row>
                                <Grid cols="12">
                                    <div className='box'>
                                        <Table
                                            data={this.state.billingCycles}
                                        />
                                    </div>
                                </Grid>
                            </Row>
                            :
                            <Loading show={this.isLoading}/>
                        }
                </Content>
            </div>
        )
    }
}

export default BillingCycle