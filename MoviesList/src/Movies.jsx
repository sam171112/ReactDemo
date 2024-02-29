import Movie from "./movie";

function Movies(props)
{
    
    return(
        <div>
            <h1>{props.title}</h1>
        <div className="MoviesDiv">
            {
                props.data.map((m)=>
                (
                        <Movie url={m.image} title={m.title} />
                ))
            }
        </div>
        </div>
    )

}

export default Movies;