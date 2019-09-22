import React, { Component } from 'react';
import classNames from 'classnames';
import { Container } from 'reactstrap';
import NavBar from './Navbar';
import { Switch, Route } from 'react-router-dom';

import TabelaUsuario from '../../views/usuario/Tabela';
import FormUsuario from '../../views/usuario/Form';

import TabelaFornecedor from '../../views/fornecedor/Tabela';
import FormFornecedor from '../../views/fornecedor/Form';

import TabelaDespesa from '../../views/despesa/Tabela';
import FormDespesa from '../../views/despesa/Form';


export default props => (
  <Container fluid className={classNames('content', { 'is-open': props.isOpen })}>
    <NavBar toggle={props.toggle} />
    <Switch>
      <Route exact path="/" component={() => "Hello"} />
      {/* <Route exact path="/about" component={TabelaUsuario} /> */}

      {/* USUARIOS */}
      <Route exact path="/usuario" component={TabelaUsuario} />
      <Route exact path="/usuario/editar/:id" component={FormUsuario} />
      <Route exact path="/usuario/novo" component={FormUsuario} />

      {/*FORNECEDOR*/}
      <Route exact path="/fornecedor" component={TabelaFornecedor} />
      <Route exact path="/fornecedor/novo" component={FormFornecedor} />
      <Route exact path="/fornecedor/editar/:id" component={FormFornecedor} />


      {/* DESPESA */}
      <Route exact path="/despesa" component={TabelaDespesa} />
      <Route exact path="/despesa/novo" component={FormDespesa} />
      <Route exact path="/despesa/editar/:id" component={FormDespesa} />



      <Route exact path="/Page-1" component={() => "Page-1"} />
      <Route exact path="/Page-2" component={() => "Page-2"} />
      <Route exact path="/page-1" component={() => "page-1"} />
      <Route exact path="/page-2" component={() => "page-2"} />
      <Route exact path="/page-3" component={() => "page-3"} />
      <Route exact path="/page-4" component={() => "page-4"} />
    </Switch>
  </Container>

)
