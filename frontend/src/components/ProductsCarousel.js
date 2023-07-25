import React from 'react'

export default function ProductsCarousel(props) {
    return (
        <div>
            <div class="card" style={{width:"100%",height:"300px",margin:"0px 30px"}}>
                <img src={props.url} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">{props.price}</p>
                    <a href="/" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}
