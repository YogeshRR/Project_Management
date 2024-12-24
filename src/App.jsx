import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSider from "./components/ProjectSiderbar";

function App() {
  return (
    <main className="h-screen my-8 flex gp-8">
      <ProjectsSider />
      {/* <NewProject /> */}
      <NoProjectSelected />
    </main>
  );
}

export default App;
