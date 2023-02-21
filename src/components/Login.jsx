import React from "react";
import "../styles/login/css/style.css"
import { loginUser } from "../Utils/User";
import '../styles/css/custom.css';
import ROUTES from "../routes";
import CONFIG from "../config";

class Login extends React.Component {

    constructor(props){
        super(props);
    
        this.state = {
            spinner: false,
            apiResponse: {
                title: "",
                message: "",
                actionBtn: null
            },
            userConnected: false
        }

    }

    changeSpinner = () => {
        this.setState({
            spinner: !this.state.spinner
        })
    }
    componentDidMount(){

        localStorage.setItem("stock-app-userState", "loggedOut")
        localStorage.setItem("stock-app-userData", [])
    }

    submitForm = async (e) => {
        e.preventDefault()
        let email = document.getElementById("email").value
        let psw = document.getElementById("password").value
        
        /*
        let formData = new FormData()
        formData.append("email", email)
        formData.append("password", psw)
        */

        if(psw === ""){
            alert("Mot de passe vide")
        }
        else{
            this.changeSpinner()

            await loginUser(psw).then((response) => {
                
                if(response.api_response === "failed"){
                    
                    this.setState({
                        apiResponse: {
                            title: "Erreur de connexion",
                            message: "Le mot de passe fourni est incorrect !",
                            actionBtn: ROUTES.home
                        },
                        userConnected: false
                        
                    })
                    CONFIG.USERSESSION.logged = false
                    document.getElementById("alertBtn").click()
                    document.getElementById("password").value = ""
                    this.changeSpinner()
                }
                else if(response.api_response === "connected"){
                    this.setState({
                        apiResponse: {
                            title: "Connexion réusie",
                            message: "Connexion effectué avec succès !",
                            actionBtn: ROUTES.home
                        },
                        userConnected: true
                    })
            
                    localStorage.setItem("stock-app-userState", "loggedIn")
                    localStorage.setItem("stock-app-userData", [response.data._id, response.data.admin_name, response.data.admin_psw])
                    setTimeout(() => {
                        document.getElementById("homeLink").click()
                    }, 1000)
                    
                }
                else{
                    this.setState({
                        apiResponse: {
                            title: response.message,
                            message: "La connexion au Serveur a échoué",
                            action: ROUTES.admin.login
                        },
                        userConnected: false
                    })
                    
                    CONFIG.USERSESSION.logged = false
                    
                    console.log(CONFIG.USERSESSION.logged)

                    document.getElementById("alertBtn").click()
                    this.changeSpinner()
                }

            })


        }

    }

    render() {
        const btnStyles = { backgroundColor: "#fe980f", color: "white", fontWeight: "bold", fontSize: "20px", height: "60px" }
        

        return  <section className="ftco-section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6 text-center mb-5">
                                <h2 className="heading-section">Page d'authentification</h2>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-7 col-lg-5">
                                <div className="login-wrap p-4 p-md-5">
                                    <div className="icon d-flex align-items-center justify-content-center" style={{ backgroundColor: "#565864" }}>
                                        <span className="bi bi-person-fill"></span>
                                    </div>
                                    <h3 className="text-center mb-4">Sign In</h3>
                                        
                                         <div className="form-group">
                                            <input type="text" id="email" className="form-control rounded-left" placeholder="Email"/>
                                        </div>
                                        <div className="form-group d-flex">
                                            <input type="password" id="password" className="form-control rounded-left" placeholder="Mot de passe" required />
                                        </div>
                                        <div className="form-group">
                                            <button 
                                                        type="submit" onClick={this.submitForm} 
                                                        style={btnStyles} 
                                                        className="form-control btn rounded submit px-3">
                                                 
                                                {  this.state.spinner === true 
                                                    ?<i className="spinner-border spinner-border-sm" style={{ fontSize: "50px" }}></i>
                                                    :<i className="bi bi-box-arrow-right" style={{  fontSize: "25px" }}></i>
                                                }
                                                &nbsp;&nbsp; 
                                                Se Connecter
                                            </button>

                                            <button id="alertBtn" data-toggle="modal" data-target="#exampleModal" style={{  display: "none"  }}>Alert</button>
                                        </div>
                                        <div className="form-group d-md-flex">
                                            <div className="w-50">
                                                <label className="checkbox-wrap checkbox-primary" style={{ color: "#fe980f" }}>Se souvenir de moi
                                                    <input type="checkbox" checked/>
                                                        <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="w-50 text-md-right">
                                                <a href="/" style={{ color: "#fe980f" }}>Mot de passe oublié ?</a>
                                            </div>
                                        </div>
                                        <a href={ this.state.apiResponse.actionBtn } style={{ display: "none"  }} id="homeLink">Go home</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="modal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">{  this.state.apiResponse.title }</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <p>
                                        {this.state.userConnected === true ? <i className="bi bi-check2-all" style={{ color: "green", fontSize: "25px" }}></i>
                                                                            :<i className="bi bi-exclamation-triangle-fill" style={{ color: "red", fontSize: "25px" }}></i>
                                        } 
                                        &nbsp;&nbsp;
                                        <span style={{  fontSize: "20px"  }}>{  this.state.apiResponse.message }</span>
                                    </p>
                                </div>
                                <div className="modal-footer">
                                    {
                                        this.state.userConnected === true 
                                        ?<a href="./" className="btn btn-primary">Continuer</a>
                                        :<button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>

                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    }
}

export default Login;