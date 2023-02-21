import shopping from "../../img/shop.png";
import CONFIG from "../../config";
import axios from "axios";
import { loadProdcuts } from "../../Utils/Product";
import React from "react";

class AllProduct extends React.Component  {

        constructor(props){
            super(props)
            this.state = {
                products: []
            }    
        }
        componentDidMount(){
            this.getProduct()
        }

        getProduct = () => {

            loadProdcuts().then((response) => {

                if(response.length > 0){
                    this.setState({
                        products: response
                    })
                }

            });
        }
        render(){


            return   <div>
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800"><a href="#/" style={{ textDecoration: "none" }}>Ajouter un article &rarr;</a></h1>
                        
                        <a href="/" className="d-none d-sm-inline-block shadow-sm">
                            <img src={shopping} alt="Img" style={{ height: "60px" }}/>
                        </a>
                    </div>

                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div>
                        <div class="card-body">
                        <div class="table-responsive">
                            
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Office</th>
                                <th>Age</th>
                                <th>Start date</th>
                                <th>Salary</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Office</th>
                                <th>Age</th>
                                <th>Start date</th>
                                <th>Salary</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                <tr>
                                <td>Donna Snider</td>
                                <td>Customer Support</td>
                                <td>New York</td>
                                <td>27</td>
                                <td>2011/01/25</td>
                                <td>$112,000</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>

                </div>
        }
}

export default AllProduct;