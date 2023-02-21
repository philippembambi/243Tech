// React Dependecies
import { Outlet, Link } from "react-router-dom";

import ROUTES from "../routes";
import CONFIG from "../config";

const Post = (props) => {


   /* 
   I encoutered some problem to pass http format (contening slashes, e.g : https://) parameters to Route Link 
   That's why i want to remove temporally slashes "/"
   */
   var vid = props.app_video_content
        var vid1 = vid.replace("/", "@")
            var vid2 = vid1.replace("/", "@")
                var vid3 = vid2.replace("/", "@")
        
    
    return <div class="col-md-6">
                <div class="card flex-md-row mb-4 shadow-sm h-md-250">
                    <div class="card-body d-flex flex-column align-items-start">
                        <strong class="d-inline-block mb-2 text-primary"> <b className="bi bi-person-circle"></b>   {  props.candidat_name }</strong>
                        <h3 class="mb-0">
                            <a class="text-dark" href="#">Pitch N° {  props.app_id  } </a>
                        </h3>
                        <div class="mb-1 text-muted">Nov 12</div>
                        <p class="card-text mb-auto">{ props.app_video_desc }</p>

                        <Link to={  `/post-details/${props.id}/${props.appId}/${props.cadidat}/${vid3}`  }> <b className="bi bi-skip-forward-fill"></b> Plus de détails</Link>
                    </div>

                    <video style={{ height: '100%', width: '100%'}} controls>
                            <source src={   props.app_video_content   } type="video/mp4" />
                    </video>

                </div>
            </div>
}

export default Post;

<div class="col-md-6">
                <div class="card flex-md-row mb-4 shadow-sm h-md-250">
                    <div class="card-body d-flex flex-column align-items-start">
                        <strong class="d-inline-block mb-2 text-primary"> <b className="bi bi-person-circle"></b>   {  props.candidat_name }</strong>
                        <h3 class="mb-0">
                            <a class="text-dark" href="#">Pitch N° {  props.app_id  } </a>
                        </h3>
                        <div class="mb-1 text-muted">Nov 12</div>
                        <p class="card-text mb-auto">{ props.app_video_desc }</p>

                        <Link to={  `/post-details/${props.id}/${props.appId}/${props.cadidat}/${vid3}`  }> <b className="bi bi-skip-forward-fill"></b> Plus de détails</Link>
                    </div>

                    <video style={{ height: '100%', width: '100%'}} controls>
                            <source src={   props.app_video_content   } type="video/mp4" />
                    </video>

                </div>
            </div>