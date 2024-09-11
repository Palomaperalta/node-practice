import express from "express";
import data from "./movies.json" with { type: "json" };
import crypto from 'node:crypto'
import z from 'zod'
const app = express();
app.use(express.json())

app.disable("x-powered-by");

app.get("/", (req, res) => {
  res.json({ message: "hola mundo" });
});
// todos los recursos que sean MOVIES se identifica con /movies
app.get("/movies", (req, res) => {
  const {genre} = req.query
  if (genre){
    const filteredGenre = data.movies.filter(
    movie => movie.genre.includes(genre)
    )
    return res.json(filteredGenre)
  }
  res.json(data);
});


//path to regexp
app.get("/movies/:id", (req, res) => {
  const {id} = req.params
  const movie = data.movies.find(movie => movie.id === id )
  if(movie) return res.json(movie)
  res.status(404).json(  {message: 'movie not found'})
});


app.post('/movies', (req, res) =>{
  const movieSchema = z.object({
    title: z.string({
      invalid_type_error: 'movie title must be a string',
      required_error: 'movie title is required'}),
    year: z.number().int().positive,
    genre: z.enum(['drama', 'terror']).array()
  })

  const {
    title, year, genre
  } = req.body

  const newMovie = {
    id: crypto.randomUUID(),
    title,
    year,
    genre
  }
  data.movies.push(newMovie)
  res.status(201).json(newMovie)
})

app.patch("/movies/:id", (req, res) => {
  const {id} = req.params
  const movie = data.movies.find(movie => movie.id === id)

  const {
    title, year, genre
  } = req.body
  
  if(movie === undefined){
    return res.status(404).json({message: 'movie not found'})
  }
  if(title){
    movie.title = title
  }
  if(year){
    movie.year = year
  }
  if(genre){
    movie.genre = [...genre]
  }

 return res.json(movie)

});


const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
