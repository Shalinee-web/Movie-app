import React from 'react'

export default function Display(props) {
  return (
    <div className="row">
        {
            props.movies.map(
                (movie) => {
                    return(
                        <div key={movie.id} className="col-3 mb-2">
                        <div className="card">
                            <img width="100%" src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} alt=""/>
                            <h4 className='p-3 text-center'>{movie.title}</h4>
                        </div>
                    </div>
                    )
                
                }
            )
          
        }
       
    </div>
  )
}
