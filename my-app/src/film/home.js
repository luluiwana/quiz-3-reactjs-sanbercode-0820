import React, {useState, useEffect} from 'react' 
import axios from 'axios';
import './public/css/style.css'

const Index = () => {
    const [movieData, setmovieData] = useState(null)
    const [input, setInput] = useState({
        title: "", 
        description: "", 
        year: 0,
        duration: 0,
        genre: "",
        rating: 0,
        image: "", 
        id: null})

    useEffect(() => {
        if (movieData === null) {
            axios.get(`http://backendexample.sanbercloud.com/api/movies`)
            .then(res => {
                setmovieData(res.data.map(el=>{ 
                    return {
                        id: el.id, 
                        title: el.title, 
                        description: el.description, 
                        year: el.year,
                        duration: el.duration,
                        genre: el.genre,
                        rating: el.rating,
                        image: el.image
                    }}))
            })
        }
    }, [movieData]);


    return(
        <>
        <div className="body">
        <div className="section">

        <h1>Daftar Film Terbaik</h1>

        <div>
        {
            movieData !== null && movieData.map((item, index) => {
                return(
                <div key={item.id}>
                <h3>{item.title}</h3><br/>
                <img src="{item.image}"/><br/>
                
                <b>Tahun : </b> {item.year}<br/>
                <b>Durasi : </b>{item.duration}<br/>
                <b>Genre : </b>{item.genre}<br/>
                <b>Rating : </b>{item.rating}<br/>
                <b>Deskripsi</b><br/>{item.description}
                
                </div>
                )
            })
        }
        </div>
        

        </div>
        </div>

        </>
        )
    }

    export default Index