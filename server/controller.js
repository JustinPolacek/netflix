const movies = [
    {
        id: 0,
        name: 'Interstellar',
        date: '2014',
        img: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
    },
    {
        id: 1,
        name: 'Inception',
        date: '2010',
        img: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg'
    },
    {
        id: 2,
        name: 'Knocking on heavens door',
        date: '1990',
        img: 'https://images-na.ssl-images-amazon.com/images/I/71rNJQ2g-EL._AC_SL1178_.jpg'
    },
    {
        id: 3,
        name: 'Terminator',
        date: '1985',
        img: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/4c177c2b7f7bb9a679f089bcb50f844e_3e89eb5d-ffbd-4033-a00f-e595a3ef2e2a_240x360_crop_center.progressive.jpg?v=1573587540'
    },
    {
        id: 4,
        name: 'Ad Astra',
        date: '2019',
        img: 'https://specials-images.forbesimg.com/imageserve/5d7bcd740762110007967b6e/960x0.jpg?fit=scale'
    }
];



function getMovies(req, res) {
    res.status(200).send(movies)
}
function deleteMovie(req, res){
    let index = req.params.index
    // let { index } = req.params;
    movies.splice(index, 1)
    res.status(200).send('Movie Deleted');

}


module.exports = {
    getMovies,
    deleteMovie
}

