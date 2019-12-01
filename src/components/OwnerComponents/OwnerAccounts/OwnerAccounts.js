import React from 'react';
import { Col,Row,Table } from 'react-bootstrap';
import Moment from 'react-moment';

const ownerAccounts = (props) =>{
    let accounts = null;
    if(props.accounts){
        accounts = props.accounts.map(account =>{
            return(
                <tr key={account.id}>
                    <td>{account.accountType}</td>
                    <td><Moment format="DD/MM/YYYY">{account.dateCreated}</Moment></td>
                </tr>
            );
        })
    }
return(
    <Row>
        <Col md={12}>
            <Table responsive striped>
                <thead>
                    <tr>
                        <th>Account Type</th>
                        <th>Date Created</th>
                    </tr>
                </thead>
                <tbody>

                    {accounts}
                </tbody>
            </Table>
        </Col>
    </Row>
)


}

export default ownerAccounts
