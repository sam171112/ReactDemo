import Movies from "./Movies";
import './index.css'

function Movie(props)
{   
    const {url,title}=props    
        
    return(
        <div className="MovieDiv">
           <img className="img" src={url} alt={title} />
           <h1>{title}</h1>
        </div>
     )

}

export default Movie;