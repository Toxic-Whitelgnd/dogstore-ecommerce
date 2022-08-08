import React from 'react'
import { useRouter } from 'next/dist/client/router'
import { MdFavorite, MdShoppingCart } from "react-icons/md";
import {urlFor} from "../lib/client"
import toast,{Toaster} from 'react-hot-toast';


export default function Card({name,breed,age,gender,price,description,id,image}) {
  const router = useRouter();
  const notify = ()=> {
      toast.success("Item Added to Favourites!")
  }
  return (
    <>
 
    <div className="grid grid-cols-3 auto-rows-auto mt-10" >
    <div><Toaster
      position="top-center"
      reverseOrder={false}
    />
    </div>
    
    <div className="card" key={id} style={{width: "18rem"}}>
    <img src={urlFor(image)} className="card-img-top" alt="dog image" />
        <div className="card-body">
            <h5 className="card-title">{name.toUpperCase()}</h5>
            <h6 className="card-subtitle mb-2 text-muted capitalize">{breed}</h6>
            <p className="card-text italic capitalize">{description}</p>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Age: {age} months</li>
                <li className="list-group-item capitalize">Gender: {gender}</li>
                <li className="list-group-item">Price: ${price}</li>
            </ul>
            <a onClick={()=> router.push(`dogs/${id}`)} className="btn btn-success  mr-2"><MdShoppingCart  /></a>
            <a onClick={()=> notify() } className="btn btn-danger "><MdFavorite /></a>
        </div>
    </div>
    </div>

  
    </>
    
  )
}

// grid col-start-1 col-end-2 grid-cols-3 justify-evenly m-20