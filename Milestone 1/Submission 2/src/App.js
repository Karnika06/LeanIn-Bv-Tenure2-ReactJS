
import displaypic from './images/displaypic.jpg';
import './App.css';
import { FaCheckCircle,FaRegClock } from "react-icons/fa";

function App() {

  const skills = ['HTML', 'CSS', 'Sass', 'JS','React','Redux', 'Node', 'MongoDB', 'Python','Flask','Django','NumPy','Pandas','Data Analysis', 'MySQL','GraphQL','D3.js','Gatsby','Docker','Heroku','Git'];
  return (
    <div className="App">
      <img src={displaypic} alt=""/>
        
        <h2>  ABSABENEH YETAYEH<FaCheckCircle color="blue"/></h2>

    <p class="title">  Senior Developer, Finland</p>
    <h2>  SKILLS</h2>
  
    {
    skills.map((sk) => <div className = "skilled">{sk} </div>)
    }
    <p class="join"> <FaRegClock/> Joined on Aug 30, 2020</p>
    </div>
  );
}

export default App;
