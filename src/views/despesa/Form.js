import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import 'reactstrap';

export default class FormDespesa extends Component {

    constructor() {
        super();
        this.state = ({ fornecedor: '', numero: '', vencimento: '', valor: '', lista_fornecedor: [] });
        this.salvar = this.salvar.bind(this);
    }

    format_real(string, decimals = 2, decimal = ',', thousands = '.', pre = 'R$ ', pos = ' $') {
        let numbers = string.toString().match(/\d+/g).join([]);
        numbers = numbers.padStart(decimals + 1, "0");
        let splitNumbers = numbers.split("").reverse();
        let mask = '';
        splitNumbers.forEach(function (d, i) {
            if (i == decimals) { mask = decimal + mask; }
            if (i > (decimals + 1) && ((i - 2) % (decimals + 1)) == 0) { mask = thousands + mask; }
            mask = d + mask;
        });
        return mask;
    }

    listarFornecedores() {
        axios({
            url: 'http://127.0.0.1:3000/fornecedores',
            method: 'GET'
        }).then(response => {
            this.setState({ lista_fornecedor: response.data });
        })
    }

    componentDidMount() {
        this.listarFornecedores();

        if (this.props.match.params.id !== undefined) {
            axios({
                url: 'http://127.0.0.1:3000/despesas/' + this.props.match.params.id,
                method: 'GET'
            }).then(response => {
                this.setState(
                    { 
                        id: response.data.id, 
                        valor: response.data.valor,
                        vencimento: response.data.vencimento,
                        fornecedor: response.data.fornecedor,
                        numero: response.data.numero,
                    });
            })
        }
    }

    salvar(e) {
        e.preventDefault();
        let url;
        let metodo;

        if (this.props.match.params.id == undefined) {
            url = 'http://127.0.0.1:3000/despesas';
            metodo = 'POST';
        } else {
            url = 'http://127.0.0.1:3000/despesas/' + this.props.match.params.id;
            metodo = 'PUT';
        }

        axios({
            url: url,
            method: metodo,
            data: {
                fornecedor: this.state.fornecedor,
                numero: this.state.numero,
                valor: this.state.valor,
                vencimento: this.state.vencimento
            }
        }).then(response => {
            this.setState({ id: response.data.id })
            alert('Registro salvo com sucesso!');
        })
    }


    handleChange(e) {
        let change = {};
        change[e.target.name] = e.target.value;
        console.log(e.target.value);
        this.setState(change);
    }

    render() {
        return (
            <div>
                <div className="card">

                    <form onSubmit={this.salvar} method="POST">
                        <div className="card-body">
                            <div className="form-row">
                                <div className="form-group col-sm-3">
                                    <label>Fornecedor</label>
                                    <select className="form-control" name="fornecedor" onChange={this.handleChange.bind(this)}>
                                        <option className="form-control" value="null">Selecione</option>
                                        {
                                            this.state.lista_fornecedor.map(fornecedor_select =>
                                                <option key={fornecedor_select.id} className="form-control" selected={fornecedor_select.fantasia == this.state.fornecedor ? 'selected' : ''} value={fornecedor_select.fantasia}   >{fornecedor_select.fantasia}</option>
                                            )
                                        }
                                    </select>
                                </div>

                                <div className="form-group col-sm-3">
                                    <label>Numero Documento</label>
                                    <input type="text" name="numero" className="form-control" value={this.state.numero} onChange={this.handleChange.bind(this)} />
                                </div>

                                <div className="form-group col-sm-3">
                                    <label>Vencimento</label>
                                    <input type="date" name="vencimento" className="form-control" value={this.state.vencimento} onChange={this.handleChange.bind(this)} />
                                </div>

                                <div className="form-group col-sm-3">
                                    <label>Valor</label>
                                    <input className="form-control" type="number" name="valor" value={this.state.valor} onChange={this.handleChange.bind(this)}></input>
                                </div>
                            </div>

                        </div>

                        <div className="card-footer">
                            <button className="btn btn-primary">Salvar</button> {' '}
                            <Link to="/despesa" className="btn btn-danger">Voltar</Link>
                        </div>
                    </form>
                </div>

            </div>
        )
    }
}