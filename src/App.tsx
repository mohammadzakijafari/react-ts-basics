
import CourseGoalList from './components/CourseGoalList';
import Header from "./components/Header"
import { useState } from "react"
import NewGoal from './components/NewGoal';
import goalsImg from './asset/goal.jpg'

export type CourseGoal = {
  id: number;
  title: string;
  description: string;

}

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoal => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      }
      return [...prevGoal, newGoal];
    }));
  }

  function handleDeleteGoal(id: number) {
    setGoals(prevGoal => prevGoal.filter((goal) => goal.id !== id));
  }
  return (
    <main className='flex items-center justify-center p-10'>
      <div className=''>
        <Header image={{ src: goalsImg, alt: 'A list of Goals' }}>
          <h1 className='font-bold text-3xl'> Your Course Goals </h1>
        </Header>
        <NewGoal onAddGoal={handleAddGoal} />
        <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
      </div>
    </main>
  )
}

export default App
