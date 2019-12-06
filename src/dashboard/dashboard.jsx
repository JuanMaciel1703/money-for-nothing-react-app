import React from 'react'

import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <ContentHeader title='Dashboard' small='Version 1.0'/>
                <Content>
                    <Row>
                        <ValueBox value="R$ 1000,00" text="Credits Total" 
                        cols="12 6 6 4" icon="plus" color="green" />

                        <ValueBox value="R$ 200,00" text="Debts Total" 
                        cols="12 6 6 4" icon="minus" color="red" />

                        <ValueBox value="R$ 800,00" text="Consolidated Total" 
                        cols="12 6 6 4" icon="bank" color="blue" />
                    </Row>
                </Content>
            </div>
        )
    }
}

export default Dashboard