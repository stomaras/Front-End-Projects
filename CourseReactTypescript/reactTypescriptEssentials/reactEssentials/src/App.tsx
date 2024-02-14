import CourseGoal from "./components/CourseGoal";
import goalsImg from "./assets/goals.jpg"
import Header from "./components/Header";

export default function App() {
  return (
    <main>
      <Header image={{src:goalsImg, alt:"A list of goals"}}>
        <h1>Your course goals</h1>
      </Header>
      <CourseGoal title="Learn React + TS">
        Learn it from the ground up
      </CourseGoal>
    </main>
  );
}
