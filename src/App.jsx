import { useState } from "react";

import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSider from "./components/ProjectSiderbar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState ({
    selectedProjectId : undefined,
    projects : [],
    tasks : [],
  });


   function handleAddTasks (text){
    setProjectsState (prevState => {
      const newTask = {
        text : text,
        id : Math.random(),
      };
      return {
        ...prevState,
        selectedProjectId : undefined,
        tasks : [...prevState.tasks, newTask]
      }
    });
   }

   function handleDeleteTasks () {

   }

   function handleSelectProject (id) {
    setProjectsState (prevState => {
      return {
        ...prevState,
        selectedProjectId : id,
      }
    });
   }
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

   function handleDeleteTask (id) {
    setProjectsState (prevState => {
      return {
        ...prevState,
        tasks : prevState.tasks.filter((task) => task.id !== id)
      }
    });
   }

   function handleDeleteProject () {
    setProjectsState (prevState => {
      return {
        ...prevState,
        selectedProjectId : undefined,
        projects : prevState.projects.filter((project) => project.id !== prevState.selectedProjectId )
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
        projects : [...prevState.projects, newProject]
      }
    });
   }
    
    let selectedProject = projectsState.projects.find(project =>  project.id === projectsState.selectedProjectId);
    console.log("Selected Project");
    console.log(selectedProject);
   let content = <SelectedProject project={selectedProject} onDelete = {handleDeleteProject} onAddTask = {handleAddTasks} onDeleteTask = {handleDeleteTask} tasks = {projectsState.tasks} />;

   if (projectsState.selectedProjectId === null) {
     content = <NewProject onAdd={handleAddProject} onCancel = {handleCancelProject}  />
   }else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartProject}   />
   }

  return (
    <main className="h-screen my-8 flex gp-8">
      <ProjectsSider onStartAddProject={handleStartProject} projects = {projectsState.projects} onSelectProject = {handleSelectProject} selectProjectId={projectsState.selectedProjectId}/>
      {/* <NewProject /> */}
      {content}
    </main>
  );
}

export default App;
