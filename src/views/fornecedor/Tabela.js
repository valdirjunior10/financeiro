import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import {
    Card, CardImg, CardText, CardBody, CardHeader,
    CardTitle, CardSubtitle, Button, Container, Row, Col, Table
} from 'reactstrap';

export default class TabelaFornecedor extends Component {
    constructor() {
        super();
        this.state = { lista: [] };
        this.deletarFornecedor = this.deletarFornecedor.bind(this);
    }

    componentDidMount() {
        this.listar();
    }

    listar() {
        axios.get("http://127.0.0.1:3000/fornecedores").then(resposta => {
            this.setState({ lista: resposta.data })
        })
    }

    deletarFornecedor(id) {
        if (window.confirm('Deseja realmente deletar o fornecedor')) {
            axios.delete("http://127.0.0.1:3000/fornecedores/" + id).then(resposta => {
                this.listar();
            })
        }

    }
    render() {
        return (
            <div>
                <Row>
                    <Col><h1 style={{ fontFamily: 'sans-serif' }}>Fornecedor</h1></Col>
                </Row>

                <Row>
                    <Col xs="12">
                        <Card responsive>
                            <CardHeader className="text-left">
                                <Link className="btn link-btn-primary" to="fornecedor/novo">Novo Fornecedor</Link>{' '}
                            </CardHeader>

                            <CardBody>
                                <Table responsive hover>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Razão Social</th>
                                            <th>Fantasia</th>
                                            <th>CNPJ</th>
                                            <th>Editar</th>
                                            <th>Deletar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.lista.map(fornecedor =>
                                                <tr key={fornecedor.id}>
                                                    <td>{fornecedor.id}</td>
                                                    <td>{fornecedor.razao_social}</td>
                                                    <td>{fornecedor.fantasia}</td>
                                                    <td>{fornecedor.cnpj}</td>
                                                    <td><Link className="btn btn-primary" to={"/fornecedor/editar/" + fornecedor.id}>Editar</Link></td>
                                                    <td><button className="btn btn-danger" onClick={() => this.deletarFornecedor(fornecedor.id)}>Deletar</button></td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div >
        )
    }
}