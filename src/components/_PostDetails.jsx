// React Dependecies
import React from 'react'
import {  useParams  } from "react-router-dom"
import { useState } from 'react'

import '../styles/bootstrap-theme.min.css'
import user from '../img/user.png'
import CONFIG from '../config'
import JsonData from '../Utils/Api.json'

const PostDetail = () => {

    let { appId, candidatId, candidatName, videoContent  } = useParams()
    
    var vid = videoContent
    var vid1 = vid.replace("@", "/")
        var vid2 = vid1.replace("@", "/")
            var videoLink = vid2.replace("@", "/")

    const submitForm = (e) => {
        e.preventDefault()

        var username = document.getElementById('pseudo').value
        var email = document.getElementById('email').value
        var comment = document.getElementById('commentaire').value

        //var data1 = JsonData.applications[0].videos.indexOf(videoContent)

        // Register Data in json file
        var jsonUpdate1 = JsonData.applications.filter(x => x.id === parseInt(appId))[0].videos[0].comments.username.push(username)
        var jsonUpdate2 = JsonData.applications.filter(x => x.id === parseInt(appId))[0].videos[0].comments.useremail.push(email)
        var jsonUpdate3 = JsonData.applications.filter(x => x.id === parseInt(appId))[0].videos[0].comments.content.push(comment)

    }
    return (
        <div>
            <br />

            <div className="py-3 text-center">
                <h2>Plus de détails sur le Pitch <b style={{ fontSize: '40px' }}>{  appId  }</b></h2>
            </div>


            <nav className="navbar navbar-default">
                 <div className="navbar-header" style={{ width: '100%'  }}>

                        
                        <div className="row" style={{ width: '100%'  }}>

                            
                            <div className='col-lg-4'>
                                <video style={{ height: '100%', width: '100%' }} controls>
                                    <source src={   localStorage.getItem('video')   } type="video/mp4" />
                                </video>
                            </div>

                            <div className='col-lg-2' style={{fontSize: '22px'}}>
                            <b className='bi bi-play-btn-fill' style={{ fontSize: '27px' }}></b> ID <span className='text-primary'>#{ appId  }</span>
                            </div>

                            <div className='col-lg-3' style={{fontSize: '22px'}}>
                            <b className='bi bi-person-circle' style={{ fontSize: '27px' }}></b>   {    candidatName    }  
                            </div>

                            <div className='col-lg-3'>
                                <button className="btn btn-primary btn-lg"><i className="bi bi-ui-radios"></i>&nbsp;</button>
                                &nbsp;&nbsp;
                                <button className="btn btn-danger btn-lg"><i className="bi bi-trash-fill"></i>&nbsp;</button>

                            </div>
                            <span style={{marginLeft: 'auto', marginTop: '-7%'}}><h5>" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, animi? "</h5></span>


                        </div>
                    </div>
            </nav>

            <br />
            <div className="py-3 text-center">
                            <h2>Commentaire</h2>
                        </div>

            <div class="alert alert-primary alert-dismissible fade show" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>

                        <img src={user} alt="" style={{ height: '50px' }} className="img-rounded" />
                        <p>
                            <strong>Oh snap!</strong> <a href="#" class="alert-link">Change a few things up</a> and try submitting again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
                        </p>
                        <p>
                            <button type="button" class="btn btn-default">Masquer</button>
                        </p>
            </div>

            <div className="py-3 text-center">
                <h2>Laissez un commentaire !</h2>
            </div>


            <div className="row">
                <div className="col-md-4 order-md-2 mb-4">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Statistiques</span>
                        <span className="badge badge-secondary badge-pill"><i className="fa fa-bar-chart-o"></i></span>
                    </h4>
                    <ul className="list-group mb-3">
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 className="my-0">Nombre des commentaires</h6>
                            </div>
                            <span className="text-muted">0</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between bg-light">
                            <div className="text-success">
                                <h6 className="my-0">Nouveau messages</h6>
                                <small>EXAMPLECODE</small>
                            </div>
                            <span className="text-success">0</span>
                        </li>
                    </ul>

                    <form className="card p-2">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Promo code" />
                            <div className="input-group-append">
                                <button type="submit" className="btn btn-secondary">Redeem</button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="col-md-8 order-md-1">

                    <form className="needs-validation" action="#" onSubmit={submitForm}>
                        <div className="row">

                            <div className="col-md-6 mb-3">
                                <label for="username">Psuedo</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-user"></i></span>
                                    </div>
                                    <input type="text" name="pseudo" id='pseudo' className="form-control"/>

                                    <div className="invalid-feedback" style={{ width: '100%' }}>
                                        Your username is required.
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-6 mb-3">
                                <label for="username">Adresse E-mail</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-user"></i></span>
                                    </div>
                                    <input type="text" name="email" id='email' className="form-control"/>
                                    <div className="invalid-feedback" style={{ width: '100%' }}>
                                        Your username is required.
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="mb-3">
                            <label for="username">Commentaire</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-phone"></i></span>
                                </div>
                                <textarea className="form-control" name="commentaire" id="commentaire" cols="20" rows="5">
                                   
                                </textarea>
                                <div className="invalid-feedback" style={{ width: '100%' }}>
                                    Your username is required.
                                </div>
                            </div>
                        </div>



                        <hr className="mb-8" />
                        <button className="btn btn-primary btn-lg" type="submit"><i className="fa fa-sign-in"></i> &nbsp; Valider</button>
                        <br /><br />

                    </form>

                    
                </div>
            </div>
        </div >
    )
}


export default PostDetail;

