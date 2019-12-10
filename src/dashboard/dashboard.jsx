import React from 'react'

import Content from '../common/template/content'
import Alert from '../common/template/alert'
import ContentHeader from '../common/template/contentHeader'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'
import Grid from '../common/layout/grid'
import { connect } from 'react-redux'
import getData from '../main/connect'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            summary: {
                debt: 0,
                credit: 0
            },
            isLoading: false,
            alert: null
        }

        this.getSummary = this.getSummary.bind(this)
        this.handleCloseAlert = this.handleCloseAlert.bind(this)
    }

    getSummary() {
        getData('BillingCycles/summary').then(response => {
            this.setState({ ...this.state, summary: response.data, isLoading: false})
        }).catch (err => {
            this.setState({
                ...this.state, 
                isLoading: false, 
                alert: { type: 'danger', title: 'An error occurred fetching dashboard data', message: err.message}
            })
        })
    }

    componentWillMount() {
        this.setState({ ...this.state, isLoading: true })
        this.getSummary();
    }

    handleCloseAlert() {
        this.setState({ ...this.state, alert: null})
    }

    render() {
        const { credit, debt } = this.state.summary

        return (
            <div>
                <ContentHeader title='Dashboard' small='Version 1.0'/>
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
                    <Row>
                        <ValueBox value={credit}  text="Credits Total" 
                        cols="12 6 6 4" icon="plus" color="green" isLoading={this.state.isLoading}/>

                        <ValueBox value={debt} text="Debts Total" 
                        cols="12 6 6 4" icon="minus" color="red" isLoading={this.state.isLoading}/>

                        <ValueBox value={credit - debt} text="Consolidated Total" 
                        cols="12 6 6 4" icon="bank" color="blue" isLoading={this.state.isLoading}/>
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({ summary: state.dashboard.summary })

export default connect(mapStateToProps)(Dashboard)