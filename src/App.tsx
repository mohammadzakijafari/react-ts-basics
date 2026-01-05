import CourseGoal from "./components/CourseGoal"
import './App.css'
import Header from "./components/Header"
import { useState } from "react"

type CourseGoal = {
  id: number;
  title: string;
  description: string;
}

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    setGoals((prevGoal => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: 'Learn React plus TypeScript',
        description: 'Learn React and TypeScript Fundamental from Zero to Hero',
      }
      return [...prevGoal, newGoal];
    }));
  }
  return (
    <main>
      <Header image={{ src: 'image.path', alt: 'A list of Goals' }}>
        <h1> Your Course Goals </h1>
      </Header>
      <button onClick={handleAddGoal}> Add Goal </button>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title}>
              <p> {goal.description} </p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App
