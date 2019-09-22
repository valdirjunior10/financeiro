import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody, CardHeader,
    CardTitle, CardSubtitle, Button, Container, Row, Col, Table
} from 'reactstrap';
import moment from 'moment';

import {listar_despesas} from '../../actions/';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';



export class TabelaDespesa extends Component {
    constructor(props) {
        super(props);
        this.state = ({ lista: [], dataAtual: '' });
    }
    
    componentDidMount() {
        this.listar();
    }

    listar() {
        axios({
            url: 'http://127.0.0.1:3000/despesas',
            method: 'GET'
        }).then(response => {
            response.data.forEach((retorno) => {
                retorno.vencimento = moment(retorno.vencimento).format('D/MM/Y');
            })
            let lista = response;
            // console.log(lista); 
            this.props.listar_despesas(lista);
            console.log(this.props.listagem);
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
     dadosTabela = (props) => {
        if (this.props.listagem.length == 0) {
            return <div> Loading </div>
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
                        <Card responsive = "true">
                            <CardHeader className="text-left">
                                <Link className="btn btn-primary" to="despesa/novo">Nova Despesa</Link>{' '}
                            </CardHeader>

                            <CardBody>
                                <Table responsive="true" hover>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Fornecedor</th>
                                            <th>N°</th>
                                            <th>Vencimento</th>
                                            <th>Pago</th>
                                            <th>Valor</th>
                                            <th>Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {/* {                                            
                                            this.props.listagem.map((despesa) => {
                                                let cor;
                                                let dataAtual = moment(new Date()).format('D/MM/Y')


                                                if (despesa.pago == false && (dataAtual > despesa.vencimento)) {
                                                    cor = 'alert-danger';
                                                } else if (despesa.pago == false) {
                                                    cor = 'alert-warning';
                                                } else {
                                                    cor = 'alert-success';
                                                }

                                                return (
                                                    <tr key={despesa.id} className={cor}>
                                                        <td>{despesa.id}</td>
                                                        <td>{despesa.fornecedor}</td>
                                                        <td>{despesa.numero}</td>
                                                        <td>{despesa.vencimento}</td>
                                                        <td>{despesa.pago == false ? 'Não' : 'Sim'}</td>
                                                        <td>{despesa.valor}</td>
                                                        <td>
                                                            <Link className="btn btn-outline-primary" to={"/despesa/editar/" + despesa.id}>Editar</Link>{' '}
                                                            <button className="btn btn-outline-danger" onClick={() => this.deletarDespesa(despesa.id)}>Deletar</button>
                                                            
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        } */}
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

const mapStateToProps = state => {
    return {listagem : state.despesaReducer.listagem}
  };

const mapDispatchToProps = dispatch => bindActionCreators({listar_despesas}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(TabelaDespesa)