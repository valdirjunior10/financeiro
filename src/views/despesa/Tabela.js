import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody, CardHeader,
    CardTitle, CardSubtitle, Button, Container, Row, Col, Table
} from 'reactstrap';

import Moment from 'moment';




export default class TabelaDespesa extends Component {
    constructor() {
        super();
        this.state = ({ lista: [], dataAtual: new Date() });
    }

    formataData(date) {
        date = date || new Date();
        console.log(date);
        return date.toISOString().split('T')[0];
    }

    componentDidMount() {
        this.state.dataAtual = this.formataData(this.state.dataAtual);     
        this.listar();
    }

    listar() {
        axios({
            url: 'http://127.0.0.1:3000/despesas',
            method: 'GET'
        }).then(response => {
            this.setState({ lista: response.data, dataAtual: new Date })
        })
    }

    deletarDespesa(id) {
        if (window.confirm('Deseja realmente deletar ?')) {
            axios({
                url: 'http://127.0.0.1:3000/despesas/' + id,
                method: 'DELETE'
            }).then(response => {
                this.listar();
            })
        }

    }



    render() {
        return (
            <div>
                <Row>
                    <Col><h1 style={{ fontFamily: 'sans-serif' }}>Despesas</h1></Col>
                </Row>

                <Row>
                    <Col xs="12">
                        <Card responsive>
                            <CardHeader className="text-left">
                                <Link className="btn btn-primary" to="despesa/novo">Nova Despesa</Link>{' '}
                            </CardHeader>

                            <CardBody>
                                <Table responsive hover>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Fornecedor</th>
                                            <th>N°</th>
                                            <th>Vencimento</th>
                                            <th>Valor</th>
                                            <th>Editar</th>
                                            <th>Deletar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.lista.map((despesa) => {
                                                let cor;

                                                if (despesa.pago == false && (despesa.vencimento > this.state.dataAtual)) {
                                                    cor = 'alert-danger';
                                                } else if (despesa.pago == false) {
                                                    cor = 'alert-warning';
                                                } else {
                                                    cor = '';
                                                }


                                                return (
                                                    <tr key={despesa.id} className={cor}>
                                                        <td>{despesa.id}</td>
                                                        <td>{despesa.fornecedor}</td>
                                                        <td>{despesa.numero}</td>
                                                        <td>{despesa.vencimento}</td>
                                                        <td>{despesa.valor}</td>
                                                        <td><Link className="btn btn-primary" to={"/despesa/editar/" + despesa.id}>Editar</Link></td>
                                                        <td><button className="btn btn-danger" onClick={() => this.deletarDespesa(despesa.id)}>Deletar</button></td>
                                                    </tr>
                                                )
                                            })
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