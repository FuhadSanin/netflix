import React ,{useEffect ,useState}from 'react';
import './card.css';
import { imageUrl } from '../../Constants/constants';
import axios from '../../Constants/axios'
import YouTube from 'react-youtube';
import { API_KEY } from '../../Constants/constants';


const Card = (props) => {
    const [trailerId, setTrailerId] = useState('');
    const [movie, setmovie] = useState([]);
    useEffect(() => {
        axios.get(props.url).then((response)=>{
            setmovie(response.data.results)

        })
        
    }, []);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };

      const trailer=(id)=>{
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
        if(response.data.results.length!==0){
            setTrailerId(response.data.results[0])
            console.log(response.data)}
        else{
            console.log("Not find")
        }

      }) 
    }
    return (
        <div className='card'>
            <div className="title">
                <h3>{props.title}</h3>
            </div>
            <div className="posters">
                {
                    movie.map((obj)=>
                <img onClick={()=>trailer(obj.id)} className='card_image' src={`${imageUrl + obj.poster_path || imageUrl + obj.backdrop_path}`} />
                
                    )
                }


            

            </div>
            {trailerId && <YouTube videoId={trailerId.id} opts={opts} /> }
           
            
        </div>
    );
}

export default Card;
