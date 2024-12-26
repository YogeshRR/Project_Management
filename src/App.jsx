import { useState } from "react";

import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSider from "./components/ProjectSiderbar";

function App() {
  const [projectsState, setProjectsState] = useState ({
    selectedProjectId : undefined,
    projects : [],
  });
   function handleStartProject () {
    setProjectsState (prevState => {
      return {
        ...prevState,
        selectedProjectId : null,
      }
    });
   }

   function handleCancelProject () {
    setProjectsState (prevState => {
      return {
        ...prevState,
        selectedProjectId : undefined,
      }
    });
   }

   function handleAddProject (projectData) {
    setProjectsState (prevState => {
      const newProject = {
        ...projectData,
        id : Math.random(),
      };
      return {
        ...prevState,
        selectedProjectId : undefined,
        projects : [...prevState.projects, newProject ]
      }
    });
   }
    console.log(projectsState);
   let content;

   if (projectsState.selectedProjectId === null) {
     content = <NewProject onAdd={handleAddProject} onCancel = {handleCancelProject} />
   }else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartProject}   />
   }

  return (
    <main className="h-screen my-8 flex gp-8">
      <ProjectsSider onStartAddProject={handleStartProject} projects = {projectsState.projects} />
      {/* <NewProject /> */}
      {content}
    </main>
  );
}

export default App;
