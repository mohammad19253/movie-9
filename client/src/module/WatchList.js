import React , { useEffect, useState } from 'react'
import axios from 'axios';
import Grid from '@mui/material/Grid';

import { Card } from '../components/Card/Card'
import './watchlist.css'

 const WatchList = () => {
    const [data,setData]=useState([])
    const [movies,setMovies]=useState([])
    const [archive,setArchive]=useState(false)
    const fetchData=()=>{
        axios({
            method: 'get',
            url: "http://localhost:6003/movies",
        }).then(res=>{
            const movies=res.data.data
            movies.sort(function(a, b) {
                return a.movie_id - b.movie_id;
            });
            setData(movies)
            ButtonHandler(archive,movies)
        }).catch(err=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        fetchData()
    },[])
    const ButtonHandler=(isArchive,data)=>{
        if(isArchive){
            const archive=data.filter(item=> item.isArchive === true)
            setMovies(archive)
            setArchive(true)
        }else{
            setMovies(data)
            setArchive(false)
        }
    }
    const onArchiveIconHandler =(id,isArchive)=>{
      axios({
            method: 'post',
            url: "http://localhost:6003/movies",
            data:{
            id:id,
            isArchive:!isArchive
            }
        }).then(res=>{
            console.log(res)
            fetchData()
        }).catch(err=>{
            console.log(err)
        })
    } 
  return (
    <div>
        <header className='header'>
          WelCome to&nbsp;<span style={{color:'#A41B1B'}}> WatchList</span>
        </header>
        <main>
            <div className='list_header'>
                <div className='title'>Popular movie</div>
                <div >
                    <button className={!archive ? 'btn-1' : 'btn-2'} onClick={()=>{ButtonHandler(false,data)}}>All movie</button>&nbsp;&nbsp;&nbsp;
                    <button className={archive ? 'btn-1' : 'btn-2'} onClick={()=>{ButtonHandler(true,data)}}>Archive</button>
                </div>
            </div>
            <Grid container className='list_container'  spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 8, md: 12 }}>
                {
                    movies.map(item=>{
                        //  "Title": "The Lion King",
                        return   <Grid item xs={2} sm={3} md={3}  > 
                        <Card 
                            onClick={()=>{onArchiveIconHandler(item.movie_id,item.isArchive)}}
                            img={item?.img} 
                            name={item?.name} 
                            year={item?.year} 
                            imbd={item?.imbd} 
                            id={item?.movie_id}
                            isArchive={item?.isArchive}
                            />
                        </Grid>
                    })
                }
            </Grid>
        </main>
    </div>
  )
}
export default WatchList