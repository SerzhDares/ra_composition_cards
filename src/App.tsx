import './App.css';
import MainComponent from './components/MainComponent';
import Card from './components/Card';

function App() {

  return (
    <MainComponent>
      <Card imgSrc={'https://kredit-blog.ru/wp-content/uploads/2020/02/kak-perejti-s-karty-«mir»-na-lyubuyu-druguyu-1.png'}
       cardTitle={'Card title 1'} cardText={"Some quick example text to build on the card title and make up the bulk of the card's content."}/>
      <Card cardTitle={'Card title 2'} cardText={"With supporting text below as a natural lead-in to additional content."}/>
    </MainComponent>
  )
}

export default App
