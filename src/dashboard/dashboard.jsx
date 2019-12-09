import React from 'react'

import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'
import { connect } from 'react-redux'
import axios from 'axios'

const BASE_URL = 'http://localhost:3003/api'


class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            summary: {
                debt: 0,
                credit: 0
            },
            isLoading: false
        }

        this.getSummary = this.getSummary.bind(this)
    }

    getSummary() {
        axios.get(`${BASE_URL}/BillingCycles/summary`).then(response => {
            this.setState({ ...this.state, summary: response.data, isLoading: false})
        }).catch (err => {
            alert(`Error: ${err.message}`)
            this.setState({...this.state, isLoading: false})
        })
    }

    componentWillMount() {
        this.setState({ ...this.state, isLoading: true })
        this.getSummary();
    }

    render() {
        const { credit, debt } = this.state.summary

        return (
            <div>
                <ContentHeader title='Dashboard' small='Version 1.0'/>
                <Content>
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