import React, {Component} from 'react';
import axios from 'axios';
import Mylist from './Mylist';

class Display extends Component {
    constructor(){
        super();
        this.state = {
         movies: [],
         myList: []
        }
    }
 componentDidMount(){
    this.getMovies();

 }
 componentDidUpdate = () => {
    this.getMovies();
    this.getMyList();
 }



 getMovies = () =>{
    axios.get('/api/movies')
    .then(res => {
        // console.log(res.data)
        this.setState({
        movies: res.data
        })
    })
    .catch(error => {
        console.error(error);
    })
 }

getMyList = () => {
    axios.get('/api/myList')
    .then(res => {
        // console.log(res.data)
        this.setState({
        myList: res.data
        })
    })
    .catch(error => {
        console.error(error);
    })

}

updateState = (item, value) =>{
    this.setState({
      item:value
    })
}
onDeleteClick = (index) => {
axios.delete(`/api/movies/${index}`)
.then(res => {
    console.log(res.data)
})
.catch(error => {
    console.error(error);
});
}

addClick = (index) => {

axios.post(`/api/myList`, this.state.movies[index])
.then(res => {
console.log(res.data)
})
.catch(error => {
console.error(error);
})

}


    render(){
        return (
                 <div>
                <div className="photos">
                {this.state.movies.map((movie, index) =>{
                  return(
                    <div>

                       <img src={movie.img} alt="movie"/>
                        <button onClick={() => {this.onDeleteClick(index)}}>Remove </button>
                       <div classname="btn-2"><button onClick={() =>{this.addClick(index)}}> Add To List</button> </div>
r

                    </div>
                    

                  )
                })}


                </div>
                <Mylist myList={this.state.myList}/>
                 </div>

        )
    }
}

export default Display;