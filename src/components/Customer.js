import React, { Component, PropTypes } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const propTypes = {
};
const defaultProps = {
};
class Customer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image}> </img></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.name}</TableCell>
            </TableRow>
        );
    }
}
Customer.propTypes = propTypes;
Customer.defaultProps = defaultProps;
export default Customer;
