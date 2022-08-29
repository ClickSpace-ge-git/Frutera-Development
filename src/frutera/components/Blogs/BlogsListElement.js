import React from "react";
import {Link} from "react-router-dom";

export default function BlogsListElement({props}){

    return(
        <div className="blog__box">

            <div className="blog__img">
                <img src={props.img} alt="blog"/>
            </div>
            <div className="blog__text">
                <span>{props.date}</span>
                <br/>
                <a href="#" className="blog-title">{props.title}</a>
                <p>{props.text}</p>

                <a className="blog-line" href="/#" >კითხვის გაგრძელება</a>
                <Link to={"/blog/" + props.id}>კითხვის გაგრძელება </Link>
                <br/>
                <br/>
                <p>20 კომენტარი</p>
            </div>

        </div>
    )
}