import React from 'react'

class Table extends React.Component {
    constructor(props) {
        super(props)
        
    }

    resolveGraph(debts, credits) {
        const creditsSum = credits.reduce((total, credit) => { return total + credit.value }, 0)
        const debtsSum = debts.reduce((total, debt) => { return total + debt.value }, 0)

        const total = creditsSum - debtsSum;
        const creditWidth = (total * 100) / creditsSum;
        const debtWidth = (debtsSum * 100) / total;

        return (
            <div className="text-center">
                <div className="progress sm">
                    <div className="progress-bar progress-bar-green" style={{ width: `${creditWidth}%` }}></div>
                </div>
                <div className="progress sm">
                    <div className="progress-bar progress-bar-red" style={{ width: `${debtWidth}%` }}></div>
                </div>
            </div>
        )
    }

    render() {
        const { data } = this.props

        return (
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Month</th>
                        <th>Year</th>
                        <th>Graph</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (data && data.length) > 0 ? 
                        data.map((cycle, index) => {
                            return (
                                <tr key={index}>
                                    <td>{cycle.name}</td>
                                    <td>{cycle.month}</td>
                                    <td>{cycle.year}</td>
                                    <td>
                                        { this.resolveGraph(cycle.debts, cycle.credits) }
                                    </td>
                                    <td>
                                        <div className='btn-group'>
                                            <button className='btn btn-warning' title='Edit'>
                                                <i className='fa fa-edit'></i>
                                            </button>
                                            <button className='btn btn-danger' title='Remove'>
                                                <i className='fa fa-trash'></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                        :
                        <tr>
                            <td colSpan='3'>No one record found</td>
                        </tr>

                    }
                </tbody>
            </table>
        )
    }   
}

export default Table