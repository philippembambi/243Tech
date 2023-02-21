import CONFIG from "../config"
import axios from "axios"
import { product_categories, category_array } from "../components/products/categories"

const data_array = [];

const loadProdcuts = async () => {
    let apiData = null

    await axios.post(CONFIG.PATHNET + "index.php?action=GET_ART_ARTICLES")
        .then(response =>{
            apiData = response.data
        })

        return apiData;
    }

const loadCategories = async () => {
        let apiData = null;
    
        await axios.get(CONFIG.PATHNET + "category/")
            .then(response =>{
                apiData = response.data
            });

            //console.log("Taille de données");
            //console.log(apiData.catList.length)

            for (let index = 0; index < apiData.catList.length; index++) {
                
                console.log(apiData.catList[index].cat_name)
                data_array.push(apiData.catList[index].cat_name)
                
            }
    }

export {loadProdcuts, loadCategories, data_array};