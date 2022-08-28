
const Paragraph = (props) => {
    return(
      <div>
          {props.props.image!==''? <div><br/><img src={props.props.image} alt="paragraph image" className="img"/><br/></div>:""}
          <br/>
          {props.props.title!==""? <h3>{props.props.title}</h3>:""}
          <p>{props.props.text}</p>
      </div>
    );
}

export  default Paragraph;