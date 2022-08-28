
const Paragraph = ({props}) => {
    return(
      <div>
          {props.image!==''? <div><br/><img src={props.image} alt="paragraph image" className="img"/><br/></div>:""}
          <br/>
          {props.title!==""? <h3>{props.title}</h3>:""}
          <p>{props.text}</p>
      </div>
    );
}

export  default Paragraph;