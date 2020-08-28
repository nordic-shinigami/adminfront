import React, { Component } from 'react';

export default class LeaveTable extends Component {
    render() {
        let tableContent = [
         <tr key={1} >
            <th scope="row">1</th>
            <td>346</td>
            <td>nothing</td>
            <td>00/00/00</td>
            <td style={{ cursor: 'pointer', color: '#00a4eb', background: 'rgba(238, 113, 82, 0.97)' }}
                onClick=
                {() => this.onDelete(1)}> Click Me
            </td>
        </tr>,
        <tr key={2} >
            <th scope="row">1</th>
            <td>346</td>
            <td>nothing</td>
            <td>00/00/00</td>
            <td style={{ cursor: 'pointer', color: '#00a4eb', background: 'rgba(238, 113, 82, 0.97)' }}
                onClick=
                {() => this.onDelete(2)}> Click Me
            </td>
        </tr>,
        <tr key={3} >
            <th scope="row">1</th>
            <td>346</td>
            <td>nothing</td>
            <td>00/00/00</td>
            <td style={{ cursor: 'pointer', color: '#00a4eb', background: 'rgba(238, 113, 82, 0.97)' }}
                onClick=
                {() => this.onDelete(3)}> Click Me
            </td>
        </tr>,
        <tr key={4} >
            <th scope="row">1</th>
            <td>346</td>
            <td>nothing</td>
            <td>00/00/00</td>
            <td style={{ cursor: 'pointer', color: '#00a4eb', background: 'rgba(238, 113, 82, 0.97)' }}
                onClick=
                {() => this.onDelete(4)}> Click Me
            </td>
        </tr>,
        <tr key={5} >
        <th scope="row">1</th>
        <td>346</td>
        <td>nothing</td>
        <td>00/00/00</td>
        <td style={{ cursor: 'pointer', color: '#00a4eb', background: 'rgba(238, 113, 82, 0.97)' }}
            onClick=
            {() => this.onDelete(5)}> Click Me
        </td>
        </tr>,
        <tr key={6} >
        <th scope="row">1</th>
        <td>346</td>
        <td>nothing</td>
        <td>00/00/00</td>
        <td style={{ cursor: 'pointer', color: '#00a4eb', background: 'rgba(238, 113, 82, 0.97)' }}
            onClick=
            {() => this.onDelete(6)}> Click Me
        </td>
        </tr>,
        <tr key={7} >
        <th scope="row">1</th>
        <td>346</td>
        <td>nothing</td>
        <td>00/00/00</td>
        <td style={{ cursor: 'pointer', color: '#00a4eb', background: 'rgba(238, 113, 82, 0.97)' }}
            onClick=
            {() => this.onDelete(7)}> Click Me
        </td>
        </tr>,
        <tr key={8} >
        <th scope="row">1</th>
        <td>346</td>
        <td>nothing</td>
        <td>00/00/00</td>
        <td style={{ cursor: 'pointer', color: '#00a4eb', background: 'rgba(238, 113, 82, 0.97)' }}
            onClick=
            {() => this.onDelete(8)}> Click Me
        </td>
        </tr>];
        return (
            <div className="mid container">
                <div style={{ marginTop: '50px', overflow: 'scroll', maxHeight: '550px' }}>
                    <table className="table table-striped table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Room No.</th>
                                <th scope="col">Action</th>
                                <th scope="col">Date and Time</th>
                                <th scope="col">Delete?</th>
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