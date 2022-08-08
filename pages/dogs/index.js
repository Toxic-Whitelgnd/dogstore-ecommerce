import React from 'react'
import {client} from "../../lib/client"
import DefaultLayout from '../../Layouts/layout'
import Card from '../../components/Cards'
import Head from 'next/head'

export default function Doggys({dogs}) {
  return (
  
    <div>
      <Head>
        <title>Buy Dogs</title>
        <meta name="description" content="Available Dogs in DogKatsuki" />
      </Head>
    
        <DefaultLayout>
            <>
            <div className="grid col-start-1 col-end-2 grid-cols-3 justify-evenly m-20 ">
        {   
            dogs.map(dog => ( 
                <Card 
                id={dog._id}
                name={dog.breed}
                image={dog.image}
                breed={dog.name}
                description={dog.details}
                age={dog.age}
                gender={dog.gender}
                price={dog.price}
                />
            )
        )}
        </div>
        </>

        </DefaultLayout>
    </div>
  )
}


export const getServerSideProps = async () => {
    const query = '*[_type == "dogs"]';
    const dogs = await client.fetch(query)
  
    console.log("came here")
    // console.log(dogs)
  
    return{
      props:{
        dogs
      }
    }
  }
  
  //{
    //   dogs?.map((dog)=> <>
    //    <div className="card"  style={{width: "18rem"}}>
    //    <img src={urlFor(dog.image)} className="card-img-top" alt="dog image" />
    //  <div className="card-body">
    //      <h5 className="card-title">{dog.breed}</h5>
    //      <h6 className="card-subtitle mb-2 text-muted">{dog.breed}</h6>
    //      <p className="card-text">{dog.details}</p>
    //      <ul className="list-group list-group-flush">
    //          <li className="list-group-item">Age: {dog.age}</li>
    //          <li className="list-group-item">Gender: {dog.gender}</li>
    //          <li className="list-group-item">Price: {dog.price}</li>
    //      </ul>
    //      <a onClick={()=> router.push(`dogs/${id}`)} className="btn btn-primary">Buy</a>
    //  </div>
    // </div>
     
    //   </>)
    //  }