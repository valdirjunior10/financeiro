import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import LinkButton from '../linkButton/LinkButton';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col, Table
} from 'reactstrap';

export default class TabelaUsuario extends Component {
    constructor() {
        super();
        this.state = { lista: [] };
    }

    componentDidMount() {        
        $.ajax({
            url: "http://127.0.0.1:3000/usuarios",
            contentType: 'application/json',
            dataType: "JSON",
            type: "GET",
            success: function (resposta) {
                console.log('teste');
                this.setState({ lista: resposta })
            }.bind(this),
            error: function(resposta) {
                console.log(resposta);
            }
        });
    }


    render() {
        return (
            <div>
                <div>
                    <h4>Usuarios</h4>
                </div>

                <hr />

                <Row>
                    <Col xs="12">
                        <Card>
                            <CardBody>
                                <Table responsive hover>
                                    <thead>
                                        <tr>
                                            <th>Login</th>
                                            <th>Nome</th>
                                            <th>E-Mail</th>
                                            <th>Editar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.lista.map(function (usuario) {
                                                return (
                                                    <tr>
                                                        <td>{usuario.login}</td>
                                                        <td>{usuario.nome}</td>
                                                        <td>{usuario.email}</td>
                                                        <td><LinkButton url="/Home-1" label="Editar"></LinkButton></td>
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

            </div>

        );
    }
}