import React from 'react';
import Header from '../components/Header';
import { Container } from 'react-bootstrap';

class Dashboard extends React.Component {
    render() {
        return (
            <Container fluid>
                <Header></Header>

                { this.props.children }

            </Container>
        );
    }
}

export default Dashboard;