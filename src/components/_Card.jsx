
const Card = (props) => {
    return <div className={ "card border-left-" + props.theme + " shadow h-100 py-2" }>
                <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                    <div className={ "text-xs font-weight-bold  text-"+ props.theme + " text-uppercase mb-1"  } style={{ fontSize: "18px" }}>
                        {  props.title  }
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">{  props.content  }</div>
                    </div>
                    <div className="col-auto">
                    <i className={  props.icon + " fa-2x text-gray-800"  }></i>
                    </div>
                </div>
                </div>
            </div>
}

export default Card;