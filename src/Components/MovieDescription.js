import React from 'react'
import {connect} from 'react-redux'

function MovieDescription({moviesData , match:{params:{id}}}) {
    const currentMovie = moviesData.find(el=>el.id===id)
    console.log(moviesData)
    if(!currentMovie){
        return (<h1 style={{color:'white'}}>Not Found</h1>)
    }
    return (
        <div className='container-description'>
            <div className='description'>
            
            <img className='img-description' src={currentMovie.image} alt=''/>
            
            <div>
            <h2>{currentMovie.title}</h2>
             <h4>{`Date de Sortie: ${currentMovie.year}`}</h4>
            <p>{currentMovie.description}</p>
            </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) =>{
    return {moviesData :state.moviesData}
}
export default connect(mapStateToProps)(MovieDescription)

