import CourseGoal from "./components/CourseGoal";
import goalsImg from "./assets/goals.jpg"
import Header from "./components/Header";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoal = {
  title:string;
  description:string;
  id:number;
}

export default function App() {

  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = (goal:string, summary:string) => {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        title: goal,
        description: summary,
        id: Math.random()
      };
      return [...prevGoals, newGoal]
    });
  };

  const handleDeleteGoal = (id:number) => {
    setGoals(prevGoals => prevGoals.filter((goal) => goal.id!== id));
  }

  return (
    <main>
      <Header image={{src:goalsImg, alt:"A list of goals"}}>
        <h1>Your course goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal}/>
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}/>
    </main>
  );
}
