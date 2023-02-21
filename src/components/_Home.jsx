// React Dependencies
import React from "react";

// Components
import Card from './_Card';
import Post from './_Post'
import {  load_candidats, data_array  } from '../Utils/Pitch'
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

    componentDidMount(){
        this.getPost()
    }

    getPost = () => {
        
            

        console.log("Taille de candidat : " + data.candidates.length)
        for(let i = 0; i < data.candidates.length; i++){

            for(let j = 0; j < data.applications[i].videos.length; j++){
                console.log("VIDEOS")
                console.log(data.applications[i].videos[j].src)
                data_array.video.push(data.applications[i].videos[j].src)
                data_array.comment.push(data.applications[i].videos[j].desc)
                data_array.applicationId.push(data.applications[i].id)
            }
            }


            for(let i = 0; i < data.candidates.length; i++){
                console.log
                for(let j = 0; j < data.candidates[i].videos.length; j++){
                    console.log("CANDIDATS DATA")
                    console.log(data.candidates[i].name)
                    
                    data_array.candidat_id.push(data.candidates[i].id)
                    data_array.candidat_name.push(data.candidates[i].name)
                }
                }
             
        }
    

    render() {
        return  <div>
                    <div class="container">

                        <div class="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                            <div class="row" style={{marginTop: '-5%'}}>
                                <div class="col-md-11 px-0">
                                    <h1>Online Pitching</h1>
                                    <h1 class="display-4 font-italic">All candidat speeches are online</h1>
                                </div>

                                <div class="col-md-1 px-0">
                                    <img src={img2} style={{height: '170px'}} />
                                </div>
                            </div>
                        </div>
                        
                        <div class="row mb-2">

                        {data.applications.map((app, index) => {
                console.log("SOME VIDEOS INFOS")

                return <Post                app_id={app.id}
                                            app_video_content={app.videos[1].src} 
                                            app_video_desc={app.videos[1].desc}

                                            candidat_name={data_array.candidat_id[index]} 
                                            candidat_id={data_array.candidat_name[index]} 
                                            key={index}
                                            />
                        })}

                        </div>

                    </div>
                </div>
}

}
export default Home;

return <Post                app_id={app.id}
app_video_content={app.videos[1].src} 
app_video_desc={app.videos[1].desc}
candidat_name={candidat_array.candidat_id[index]} 
candidat_id={candidat_array.candidat_name[index]} 
key={index}
/>