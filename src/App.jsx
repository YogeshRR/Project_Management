import NewProject from "./components/NewProject";
import ProjectsSider from "./components/ProjectSiderbar";

function App() {
  return (
    <main className="h-screen my-8 flex gp-8">
      <ProjectsSider />
      <NewProject />
    </main>
  );
}

export default App;
