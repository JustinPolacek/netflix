import React from 'react'


const Mylist = (props) => {
return(
<div>
    <h1 className="mylist-header">
        My List
    </h1>
<div className="photos">
 {props.myList.map(movie => {
return(
<div>
  <img src={movie.img} alt="image"/>
</div>
)

 })}
</div>
</div>
)

}

export default Mylist;