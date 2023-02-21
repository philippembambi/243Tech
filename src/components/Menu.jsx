import React from "react";
import logo from "../img/logo.png"
import CONFIG from "../config";
import '../styles/css/custom.css';
import ROUTES from "../routes";

class Menu extends React.Component {
    render() {
        return      <div>
                        <ul className={"navbar-nav bg-gradient-" + CONFIG.THEME + " sidebar sidebar-dark accordion"} id="accordionSidebar">

                            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="./">
                                <div className="sidebar-brand-icon rotate-n-10">
                                    <img src={logo} style={{ width: "100%", height: "60px"}} alt="logo" />
                                </div>
                            </a>

                            <hr className="sidebar-divider my-0" />

                            <li className="nav-item active">
                                    <a className="nav-link" href={ ROUTES.home }>
                                        <span style={{ fontSize: "25px", fontFamily: "Ubuntu" }}>Dashboard</span>
                                    </a>
                             </li>

                            <hr className="sidebar-divider" />

                            <div className="sidebar-heading">
                                Interface
                            </div>

                            <li className="nav-item">
                                <a className="nav-link collapsed"  href="./" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                    <i className="bi bi-cart-check-fill" style={{  color: "#e6880e", fontSize: "22px"  }}></i>&nbsp;
                                    <span className="titleMenu" style={{ fontSize: "20px", fontFamily: "Ubuntu", fontWeight: "bold" }}>Entrées Stock</span>
                                </a>

                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                                    <div className="bg-white py-2 collapse-inner rounded">
                                        <h6 className="collapse-header">Actions : </h6>
                                        <a className="collapse-item" href={ ROUTES.stockIn.new  }>Nouvelle entrée</a>
                                        <a className="collapse-item" href={ ROUTES.stockIn.history  }>Historique de stock</a>
                                    </div>
                                </div>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link collapsed" href="./" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                                    <i className="bi bi-cart-dash-fill fa-2x" style={{  color: "#e6880e", fontSize: "22px"  }}></i>&nbsp;
                                    <span style={{ fontSize: "20px", fontFamily: "Ubuntu", fontWeight: "bold" }}>Sorties Stocks</span>
                                </a>
                                <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                                    <div className="bg-white py-2 collapse-inner rounded">
                                        <h6 className="collapse-header">Sortie  : </h6>
                                        <a className="collapse-item" href="./">Nouvelle Sortie</a>
                                        <a className="collapse-item" href="./">Historque des Sorties</a>
                                    </div>
                                </div>
                            </li>

                            <hr className="sidebar-divider" />

                            <div className="sidebar-heading">
                                    Addons
                            </div>

                            <li className="nav-item">
                                    <a className="nav-link collapsed" href="./" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                                    <i className="bi bi-ui-checks-grid" style={{  color: "#e6880e", fontSize: "22px"  }}></i>&nbsp;
                                        <span style={{ fontSize: "20px", fontFamily: "Ubuntu", fontWeight: "bold" }}>Inventaires</span>
                                    </a>
                                    <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                                        <div className="bg-white py-2 collapse-inner rounded">
                                            <h6 className="collapse-header">Catégorie : </h6>
                                            <a className="collapse-item" href="./">LIFO</a>
                                            <a className="collapse-item" href="./">FIFO</a>
                                            <a className="collapse-item" href="./">HIFO</a>
                                            <a className="collapse-item" href="./">CUMP</a>
                                            <a className="collapse-item" href="./">CUMP après Entrée</a>
                                        </div>
                                    </div>
                            </li>

                            <li className="nav-item">
                                    <a className="nav-link" href="./">
                                        <i className="fas fa-fw fa-chart-area" style={{  color: "#e6880e", fontSize: "22px"  }}></i>
                                        <span style={{ fontSize: "20px", fontFamily: "Ubuntu", fontWeight: "bold" }}>&nbsp; Graphes</span></a>
                            </li>

                            <li className="nav-item">
                                    <a className="nav-link" href="./">
                                        <i className="bi bi-person-circle" style={{  color: "#e6880e", fontSize: "22px"  }}></i>&nbsp;
                                        <span style={{ fontSize: "20px", fontFamily: "Ubuntu", fontWeight: "bold" }}>Profil admin</span></a>
                            </li>

                            <li className="nav-item">
                                    <a className="nav-link" href="./">
                                        <i className="bi bi-robot" style={{  color: "#e6880e", fontSize: "22px"  }}></i>&nbsp;
                                        <span style={{ fontSize: "20px", fontFamily: "Ubuntu", fontWeight: "bold" }}>Bot assistant</span></a>
                            </li>

                            <li className="nav-item">
                                    <a className="nav-link" href={ ROUTES.admin.login  }>
                                        <i className="bi bi-trash" style={{  color: "#e6880e", fontSize: "22px"  }}></i>&nbsp;
                                        <span style={{ fontSize: "20px", fontFamily: "Ubuntu", fontWeight: "bold" }}>Corbeille</span></a>
                            </li>

                            <hr className="sidebar-divider d-none d-md-block" />

                            <div className="text-center d-none d-md-inline">
                                        <button className="rounded-circle border-0" id="sidebarToggle"></button>
                            </div>
                        </ul>
                    </div>
    }
}

export default Menu;