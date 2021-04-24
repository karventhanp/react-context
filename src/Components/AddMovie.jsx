import React,{useContext,useState} from 'react';
import {MovieContext} from '../MovieContext';

export default function AddMovie() {
    const [movie,setMovie]=useContext(MovieContext);
    const [addmovie,setAddMovie]=useState({
        name:'',
        price:'',
        id:''
    });
    const [err,setErr]=useState({});
    const handleChange=(e)=>{
         setAddMovie(prev=>({...prev,[e.target.name]:e.target.value}));
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(addmovie.name===''){
            setErr(prev=>({...prev,nameerr:"Please enter movie name !"}));
        }
        else if(addmovie.price===''){
            setErr(prev=>({...prev,priceerr:"Please enter price !"}));
        }
        else{
            setMovie(prev=>[...prev,{id:prev.id+1,name:addmovie.name,price:addmovie.price}]);
            setErr({});
            setAddMovie({
                name:'',
                price:'',
                id:''
            });
        }
        

    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 mt-3">
                    <h4 className="text-center text-primary mb-2">Add Movies</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-2">
                            <input type="text"
                            name='name'
                            placeholder='Movie name'
                            className='form-control'
                            onChange={handleChange}
                            value={addmovie.name}
                            />
                            <small className='text-danger'>{err.nameerr}</small>
                        </div>
                        <div className="form-group mb-2">
                            <input type="text"
                            name='price'
                            placeholder='Price'
                            className='form-control'
                            onChange={handleChange}
                            value={addmovie.price}
                            />
                            <small className="text-danger">{err.priceerr}</small>
                        </div>
                        <div className="form-group text-center mb-2">
                            <input type="submit"
                            className='btn btn-md btn-primary'
                            value='Add'
                            />
                        </div>
                    </form>
                </div>
                <div className="col-md-4"></div>
            </div>
            
        </div>
    )
}
