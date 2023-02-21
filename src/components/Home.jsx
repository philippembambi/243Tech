// React Dependencies
import React from "react";

// Components
import Post from './_Post'
import {  data_array, candidat_array  } from '../Utils/Pitch'
import data from '../Utils/Api.json'

// Multimedia 
import img1 from '../img/undraw_posting_photo.svg';
import img2 from '../img/skip.png'
import Video from '../video/Payment.mp4'

class Home extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        candidatData: {
            id: [],
            name: [],
            video: []
        }
      }
    }

    componentDidCatch(error, errorInfo) {    
        // You can also log the error to an error reporting service    
        console.log(error, errorInfo);  
    }

    componentDidMount(){
        this.getPost()
    }

    getPost = () => {
        

        //console.log("Taille de candidat" + data.candidates.length)

            for(let i = 0; i < data.candidates.length; i++){
                console.log("Candidat : " + data.candidates[i].id)
                    candidat_array.candidat_id.push(data.candidates[i].id)
                    candidat_array.candidat_name.push(data.candidates[i].name)
                }
             
        }
    

    render() {
        return  <div>
                    <div className="container">

                        <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                            <div className="row" style={{marginTop: '-5%'}}>
                                <div className="col-md-11 px-0">
                                    <h1>Online Pitching</h1>
                                    <h1 className="display-4 font-italic">All candidat speeches are online</h1>
                                </div>

                                <div className="col-md-1 px-0">
                                    <img src={img2} style={{height: '170px'}} />
                                </div>
                            </div>
                        </div>
                        
                        <div className="row mb-2">

                        {data.applications.map((app, index) => {
                console.log("SOME VIDEOS INFOS")
                            {
                                var ob = data.applications[index]
                                console.log(ob.videos[0].src)
                                
                                return  <Post app_id={app.id} app_video_content={ob.videos[0].src} app_video_desc={ob.videos[0].desc}
                                                    candidat_name={candidat_array.candidat_name[index]} 
                                                    candidat_id={candidat_array.candidat_id[index]} 
                                                    key={index}
                                />
                            }

                        })
                        }


                        </div>

                    </div>
                </div>
}

}
export default Home;