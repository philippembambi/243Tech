import CONFIG from "../config"
import axios from "axios"

const data_array = {
    id: [],
    name: [],
    video: [],
    comment: "This is a wider card with supporting text below as a natural lead-in to additional content."
};

const candidat_array = {
    candidat_id: [],
    candidat_name: [],
};


const load_candidats = async () => {
        let apiData = null;
    
        await axios.get(CONFIG.PATHNET + "api.json")
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

export {    load_candidats, data_array, candidat_array  };