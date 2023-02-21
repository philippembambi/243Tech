// React Dependencies
import React from "react";
import { Outlet, Link } from "react-router-dom";

import user from "../img/user.png"
import Logo from "../img/Source_Code_100px.png"
import img1 from "../img/Page_Overview 4_100px.png"
import ROUTES from "../routes";

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return <div>
            <header class="blog-header py-3">
                <div class="row flex-nowrap justify-content-between align-items-center">
                    <div class="col-4 pt-1">
                        <img src={Logo} style={{height: '80px',width: '100px'}} alt="" />
                    </div>
                    <div class="col-4 text-center">
                        <a class="blog-header-logo text-dark" href="#">Concours de Pitching</a>
                    </div>
                    <div class="col-4 d-flex justify-content-end align-items-center">

                        <div class="form-group" style={{display: 'inline-flex'}}>
                            <input type="text" class="form-control" placeholder="Recherche ..." style={{width: '250px'}} />
                                <button class="btn btn-default"><i class="fa fa-search"></i></button>
                                &nbsp;&nbsp;&nbsp;
                                <a class="btn btn-sm btn-outline-secondary" href="#">S'identifier</a>

                        </div>

                    </div>
                </div>
            </header>


            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">
                    <Link to="/" style={{color: '#798289', fontSize: '19px'}}><b className="bi bi-ui-radios-grid"></b> &nbsp;Fil d'actualité</Link>
                    <a className="p-2 text-muted" href="./signin.php"><i className="fa fa-sign-in"></i>&nbsp;S'identifer</a>
                    <a className="p-2 text-muted" href="./signup.php"><i className="fa fa-signing"></i>&nbsp;Créer un compte</a>
                    <a className="p-2 text-muted" href="#"><i className="fa fa-code"></i> Code en ligne</a>

                </nav>
            </div>

        </div>
    }
}

export default Header;