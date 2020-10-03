import React, { Component } from 'react';

class Header extends Component{
    render(){
    return (
        <div>
            <header>
            <h1 className="head">
                <img src="https://imgix.bustle.com/uploads/image/2017/8/29/c8c8077a-10fc-44d5-93f0-da4e592a299e-netflix-logo-print_pms.jpg?w=1200&h=630&q=70&fit=crop&crop=faces&fm=jpg"></img>
            </h1>
            <nav>
                <a href="#"><li>Movies</li></a>
                <a href="#"><li>Titles</li></a>
                <a href="#"><li>My List</li></a>
                <a href="#"><li>TV Shows</li></a>
            </nav>
            </header>
        </div>
    )
}

}
export default Header;