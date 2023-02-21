const HttpError = () => {
    return  <div className="row">
                <div className="col-sm-2"></div>
                
                <div className="col-sm-8 jumbotron" style={{ marginTop: "7%" }}>
                    <div className="col-sm-8 mx-auto">
                        <h1>ERREUR 404 : Page Not Found</h1>
                        <p>La page que vous recherchez est introuvable ou est indisponible pour l'instant.</p>
                        <p>
                            <a className="btn btn-primary" href="./" role="button"><i className="fa fa-info"></i>  Help Message</a>
                        </p>
                    </div>
                </div>

                <div className="col-sm-2"></div>

            </div>
}

export default HttpError;