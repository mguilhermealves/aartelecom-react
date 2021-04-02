import React from 'react';
import Dashboard from '../../layout';
import { Row, Col, Container } from 'react-bootstrap';

class Home extends React.Component {
    render() {
        return (
            <Dashboard>
                <Container id="home">
                    <Row>
                        <Col>
                            <h1>AAR TELECOM</h1>

                            <hr/>

                            <p className="lead">
                                A nossa principal atividade é o desenvolvimento de produtos, adequando ambientes e demandas exigidas pela rede local da operadora.
                                <br/>
                                Um desenvolvimento que se inicia da necessidade do cliente em rentabilizar sua rede sem precisar aumentar seu investimento.Realizamos analises dos produtos da cadeia logica da rede e circuitos aos quais eles se constituem para maximizar através de adequações.
                                <br/>
                                Neste processo oferecemos o desenvolvimento de um projeto do produto, homologações internas em órgãos regulamentadores e desenvolvimento de parceiros nacionais e internacionais para produção.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Dashboard>
        );
    }
}

export default Home;