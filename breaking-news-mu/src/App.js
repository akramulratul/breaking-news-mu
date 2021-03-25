import Button from '@material-ui/core/Button';
import './App.css';
import News from './Components/News/News';
import {useState, useEffect } from 'react';

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() =>{
    const url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3f412bd1982747a1b7f23e0f25bdab87";
    fetch(url)
    .then(res => res.json())
    .then(data => setArticles(data.articles))
  } ,[])
  return (
    <div>
      <Button variant="contained" color="primary">
      Hello World
    </Button>
    <Button variant="contained" color="secondary">
  Secondary
</Button>
<h2>Headlines: {articles.length}</h2>
{
  articles.map(article => <News article = {article}></News>)
}
    </div>
  );
}

export default App;
