import BlogsListElement from "./BlogsListElement";

export default function CartProducts({props}) {

    return props.map((item =>
            <BlogsListElement
                key={item.id}
                props={item}
            />
    ))
}

