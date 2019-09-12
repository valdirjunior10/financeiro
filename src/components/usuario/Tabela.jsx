import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import '../linkButton/LinkButton.css';
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
            error: function (resposta) {
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
                                            <th>Id</th>
                                            <th>Login</th>
                                            <th>Nome</th>
                                            <th>E-Mail</th>
                                            <th>Editar</th>
                                            <th>Deletar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.lista.map(function (usuario) {
                                                return (
                                                    <tr key={usuario.id}>
                                                        <td>{usuario.id}</td>
                                                        <td>{usuario.login}</td>
                                                        <td>{usuario.nome}</td>
                                                        <td>{usuario.email}</td>
                                                        <td>
                                                            <Link
                                                                className="btn link-btn-primary"
                                                                to={"/usuario/editar/" + usuario.id}
                                                            >Editar                                                                
                                                            </Link>
                                                        </td>
                                                        <td><Button color="danger">Deletar</Button></td>
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