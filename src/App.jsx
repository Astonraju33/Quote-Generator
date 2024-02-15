import './App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      });
  }

  const handleClick=()=>{
    getQuote();
  }

  return (
    <>
      <div><h1 style={{textAlign:'center'}}>Random Quote Generator</h1></div>
     <div className='container'>
        <Card style={{marginTop:'100px'}} >
        <Card.Body>
  
          <Card.Text  style={{textAlign:'center'}}>
            "{quote}"
          </Card.Text>
          <Card.Text style={{textAlign:'center'}}>
           <strong> {author}</strong>
          </Card.Text>
          <Button onClick={handleClick}   style={{width:'270px', backgroundColor:'#99004d', marginTop:20, 
  marginLeft:'500px'}} className='mt-5' variant="primary">Generate a Quote</Button>
        </Card.Body>
      </Card>
     </div>
    </>
  )
}

export default App
