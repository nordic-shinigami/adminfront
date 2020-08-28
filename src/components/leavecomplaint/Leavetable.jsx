import React, { Component } from 'react';

export default class LeaveTable extends Component {
    render() {
        let tableContent = [
         <tr key={1} >
            <th scope="row">1</th>
            <td>346</td>
            <td>salil</td>
            <td>ghaziabad</td>
            <td>00/00/00</td>
            <td>00/00/00</td>
            <td style={{ cursor: 'pointer', color: 'rgb(70, 52, 235)', background: 'rgba(235, 64, 52, 0.97)' }}
                onClick=
                {() => this.onDelete(1)}> approve
                </td>
        </tr>,
        ];
        return (
            <div className="mid container">
                 <h1>Leave Applications</h1>
                <div style={{ marginTop: '50px', overflow: 'scroll', maxHeight: '600px' }}>
                    <table className="table table-striped table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Room No.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">LeaveDate</th>
                                <th scope="col">ArrivalDate</th>
                                <th scope="col">Approve</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableContent}
                        </tbody>
                    </table>
                </div>
            </div>
            
        );
    }
}