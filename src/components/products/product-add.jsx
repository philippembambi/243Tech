import React from "react";
import shopping from "../../img/shop.png";
import { loadCategories, data_array } from "../../Utils/Product"
import {    product_categories  } from "./categories"

class NewProduct extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            datTable : [],
            categories : {
              name: [],
              desc: []
            }
        }
      }

    componentDidMount = () => {
        loadCategories()
    }

    getCategories = () => {

            loadCategories().then(category => {
                //this.state.datTable.push(category.data)
                //var size = parseInt(this.state.datTable[0].length) / 2

            for(let i = 0; i < parseInt(category.length); i++)
            {
                product_categories.push({
                    id: i + 1,
                    catName: category[i].cat_name
                })

                /*
                    categories.push({
                        catName: this.state.datTable[0][i].cat_name,
                        catDesc: this.state.datTable[0][i].cat_desc
                    })
                    */
                    //this.state.categories.name.push(this.state.datTable[0][i].cat_name)
                    //this.state.categories.desc.push(this.state.datTable[0][i].cat_desc)   
            }
  
        }).catch(err => {
            console.log(err)
        });

        return product_categories;
    }

    add_product = async(e) => {
        e.preventDefault()
        let label = document.getElementById("label").value
        let psw = document.getElementById("password").value

    }

    render() {
        
        
            console.log("DATA PRODUCT")
            this.getCategories()

    return  <div>
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800"><a href="#/" style={{ textDecoration: "none" }}>Ajouter un article &rarr;</a></h1>
                        
                        <a href="/" className="d-none d-sm-inline-block shadow-sm">
                            <img src={shopping} alt="Img" style={{ height: "60px" }}/>
                        </a>
                    </div>

                    <div className="row">

                        <div className="col-lg-6 mb-4">

                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-gray-800">Information sur le produit</h6>
                                </div>
                                <div className="card-body">

                                    <div className="card">

                                        <div className="card-body" style={{ backgroundColor: "#f6f9ff" }}>
                                        <h5 className="card-title font-weight-bold text-primary"><i className="bi bi-bag-plus-fill"></i></h5>

                                        <form>
                                            <div className="row mb-3">
                                                <label for="inputText" className="col-sm-2 col-form-label">Libellé</label>
                                                <div className="col-sm-10">
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                        <span className="input-group-text">@</span>
                                                        </div>
                                                        <input type="text" className="form-control" id="label" name="label" placeholder="Entrer le nom de l'article " required />
                                                        
                                                        <div className="invalid-feedback">
                                                            Le champ libellé est requis.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label for="inputText" className="col-sm-2 col-form-label">Catégorie</label>
                                                <div className="col-sm-10">
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                        <span className="input-group-text">@</span>
                                                        </div>
                                                        <select className="form-control" id="form-category" name="category">
                                                        {
                                                            product_categories.map((prod, key) => {
                                                                return prod.catName
                                                            })
                                                        }
                                                        </select>
                                                        
                                                        <div className="invalid-feedback">
                                                            Ce champ est requis.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label for="inputText" className="col-sm-2 col-form-label">Prix U</label>
                                                <div className="col-sm-10">
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                        <span className="input-group-text">@</span>
                                                        </div>
                                                        <input type="text" className="form-control" id="pu" name="pu" placeholder="Entrer le prix unitaire " required />
                                                        
                                                        <div className="invalid-feedback">
                                                            Ce champ est requis.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label for="inputText" className="col-sm-2 col-form-label">Quantité</label>
                                                <div className="col-sm-10">
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                        <span className="input-group-text">@</span>
                                                        </div>
                                                        <input type="text" className="form-control" id="qte" name="qte" placeholder="Entrer la quantité initiale " required />
                                                        
                                                        <div className="invalid-feedback">
                                                            Ce champ est requis.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label for="inputText" className="col-sm-2 col-form-label">Image 1</label>
                                                <div className="col-sm-10">
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                        <span className="input-group-text">@</span>
                                                        </div>
                                                        <input type="file" className="form-control" id="img1" name="img1" placeholder="Choisir une image " required />
                                                        
                                                        <div className="invalid-feedback">
                                                            Ce champ est requis.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </form>

                                        </div>
                                    </div>

                                    <a target="_blank" rel="nofollow" href="/">Browse Illustrations on unDraw &rarr;</a>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6 mb-4">

                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
                                </div>
                                <div className="card-body">
                                    
                                <div className="card">

                                    <div className="card-body" style={{ backgroundColor: "#f6f9ff" }}>
                                    
                                    <form>

                                        <div className="row mb-3">
                                            <label for="inputText" className="col-sm-2 col-form-label">Image 2</label>
                                            <div className="col-sm-10">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                    <span className="input-group-text">@</span>
                                                    </div>
                                                    <input type="file" className="form-control" id="img2" name="img2" placeholder="Choisir une image " required />
                                                    
                                                    <div className="invalid-feedback">
                                                        Ce champ est requis.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label for="inputText" className="col-sm-2 col-form-label">Détails</label>
                                            <div className="col-sm-10">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                    <span className="input-group-text">@</span>
                                                    </div>
                                                        <textarea placeholder="Entrer la description du produit" className="form-control" rows={7} cols={43}></textarea>                                                    
                                                    <div className="invalid-feedback">
                                                        Ce champ est requis.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        
                                        <div className="row mb-3">
                                        <label className="col-sm-2 col-form-label"></label>
                                        <div className="col-sm-10">
                                            <button type="submit" className="btn btn-primary"><i className="bi bi-box-arrow-in-right fa-1x"></i>  Enregistrer</button>
                                        </div>
                                        </div>

                                    </form>

                                    </div>
                                    </div>

                                    <a target="_blank" rel="nofollow" href="/">Browse Illustrations on unDraw &rarr;</a>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
    }
}

export default NewProduct;