import React from 'react';
import { useEffect,useState } from 'react';
import './Banner.css'
import axios from "../../Constants/axios";
import {API_KEY,imageUrl} from "../../Constants/constants"


const Banner = () => {
    const [Movie, setMovie] = useState();
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{

            setMovie(response.data.results[0])
        })
    }, []);
    return (
        
        <div style={{backgroundImage:`url(${Movie ? imageUrl+Movie.poster_path : ""})`}} className='banner' >

            <div className='content'>
                <h1>{Movie ? Movie.name || Movie.title : ""}</h1>
                <p><i>{Movie ? Movie.overview : ""}</i></p>
                <div className="buttons">
                    <button>SHOW MORE</button>
                    <button>MY LIST</button>
                </div>
                <div className="fade_bottom">
                    
                </div>


            </div>
            
        </div>
    );
}

export default Banner;
