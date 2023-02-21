// React Dependecies
import { Outlet, Link } from "react-router-dom";

import ROUTES from "../routes";
import CONFIG from "../config";

const Post = (props) => {
   /* 
   I encoutered some problem to pass http format (contening slashes, e.g : https://) parameters to Route Link 
   That's why i want to remove temporally slashes "/"
   */
   const vid = props.app_video_content
        var vid1 = vid.replace("/", "@")
            var vid2 = vid1.replace("/", "@")
                var vid3 = vid2.replace("/", "@")
        
    
    return <div className="col-md-6">
                <div className="card flex-md-row mb-4 shadow-sm h-md-250">
                    <div className="card-body d-flex flex-column align-items-start">
                        <strong className="d-inline-block mb-2 text-primary"> <b className="bi bi-person-circle"></b>   {  props.candidat_name }</strong>
                        <h3 className="mb-0">
                            <a className="text-dark" href="#">Pitch N° {  props.app_id  } { props.candidat_id } </a>
                        </h3>
                        <div className="mb-1 text-muted">Nov 12</div>
                        <p className="card-text mb-auto">{ props.app_video_desc }</p>

                        <Link to={  `/post-details/${props.app_id}/${props.candidat_id}/${props.candidat_name}/${vid3}`  }> <b className="bi bi-skip-forward-fill"></b> Plus de détails</Link>
                    </div>

                    <video style={{ height: '100%', width: '100%'}} controls>
                            <source src={   props.app_video_content   } type="video/mp4" />
                    </video>

                </div>
            </div>
}

export default Post;
