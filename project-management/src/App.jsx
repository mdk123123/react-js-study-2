import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjecstSidebar from "./components/ProjectsSideBar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, //not add or select any project - donothing
    projects: []
  })
  let content; 
if(projectsState.selectedProjectId === null) {
  content =<NewProject onAdd={handleAddProject}/> //lift stateup
}
else if(projectsState.selectedProjectId === undefined) {
  content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
}
function handleStartAddProject() {
  setProjectsState(prevState => {
    return {
      ...prevState,
      selectedProjectId: null, //signal to add new project
    }
  })
}

function handleAddProject(projectData) {
  setProjectsState(prevState => {
    const newProject={
        ...projectData,
        id: Math.random() //generate id
    };

    return {
      ...prevState,
      selectedProjectId: undefined,
      projects: [...prevState.projects, newProject]
    }
  })
}

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjecstSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects}/>
      {content}
    </main>
  );
}

export default App;
