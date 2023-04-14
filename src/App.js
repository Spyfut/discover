import './App.css';
import Questionner from './components/Questionner/index.js';
import QuestionDB from './questionDB.json';
import Logo from './components/Logo/index.js'

export function randomQuestion() {
  const questionNumber = QuestionDB.questions.length,
  randomNumber = Math.floor((Math.random() * questionNumber)),
  randomQuestion = QuestionDB.questions[randomNumber].question
  //console.log(randomQuestion);
  return randomQuestion;
}

function App() {
  return (
    <div className="App">
      <Logo/>
      <Questionner question={randomQuestion()}/>
    </div>
  );
}

export default App;
