import React, {Component} from 'react';
import classNames from 'classnames';
import { Container } from 'reactstrap';
import NavBar from './Navbar';
import { Switch, Route } from 'react-router-dom';

import TabelaUsuario from '../../views/usuario/Tabela';
import FormUsuario from '../../views/usuario/Form';

export default props => (
    <Container fluid className={classNames('content', {'is-open': props.isOpen})}>
      <NavBar toggle={props.toggle}/>
      <Switch>
        <Route exact path="/" component={() => "Hello" } />
        {/* <Route exact path="/about" component={TabelaUsuario} /> */}
        <Route exact path="/usuario" component={TabelaUsuario}></Route>
        <Route exact path="/usuario/editar/:id" component={FormUsuario}></Route>
        <Route exact path="/usuario/novo" component={FormUsuario}></Route>        
        <Route exact path="/Pages" component={() => "Pages" } />
        <Route exact path="/faq" component={() => "FAQ" } />
        <Route exact path="/contact" component={() => "Contact" } />
        <Route exact path="/Home-1" component={() => "Home-1" } />
        <Route exact path="/Home-2" component={() => "Home-2" } />
        <Route exact path="/Home-3" component={() => "Home-3" } />
        <Route exact path="/Page-1" component={() => "Page-1" } />
        <Route exact path="/Page-2" component={() => "Page-2" } />
        <Route exact path="/page-1" component={() => "page-1" } />
        <Route exact path="/page-2" component={() => "page-2" } />
        <Route exact path="/page-3" component={() => "page-3" } />  
        <Route exact path="/page-4" component={() => "page-4" } />                
      </Switch>
    </Container>
)
