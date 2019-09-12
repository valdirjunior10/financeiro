import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChartBar, faMoneyBill, faHome, faBriefcase, faPaperPlane, faQuestion, faImage, faCopy } from '@fortawesome/free-solid-svg-icons';
import SubMenu from './SubMenu';
import { NavItem, NavLink, Nav, Media } from 'reactstrap';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import './SideBar.css';


class SideBar extends React.Component {
  render() {
    return (
      <div className={classNames('sidebar', { 'is-open': this.props.isOpen })}>
        <div className="sidebar-header">
          <span color="info" onClick={this.props.toggle} style={{ color: '#fff' }}>&times;</span>                  
         <div  className="div-titulo">
           <h3><b>Ges</b>Fin</h3>
         {/* <img src={LogoUser}></img> */}
         </div>
          {/* <h3>Gestão Financeira</h3> */}
        </div>

        <hr/>

        <div className="side-menu">
          <Nav vertical className="list-unstyled pb-3">

            <NavItem>
              <NavLink tag={Link} to={'/about'}>
                <FontAwesomeIcon icon={faChartBar} className="mr-2" />Dashboard
            </NavLink>
            </NavItem>
            <SubMenu font-size={10} title="Cadastro" icon={faCopy} items={submenus[0]} />
            <SubMenu title="Financeiro" icon={faMoneyBill} items={submenus[1]} />
          </Nav>
        </div>
      </div>
    );
  }
}



const submenus = [
  [
    {
      title: "Usuario",
      target: "/usuario"
    },
    {
      title: "Fornecedor",
      target: "/fornecedor",
    }
  ],
  [
    {
      title: "Contas a Pagar",
      target: "despesa",
    },
    {
      title: "Contas a Receber",
      target: "receita",
    }
  ]
]


export default SideBar;
