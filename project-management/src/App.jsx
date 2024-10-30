import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjecstSidebar from "./components/ProjectsSideBar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, //not add or select any project - donothing
    projects: []
  })

  const selectedProject = projectsState.projects.find(project => project.id ===projectsState.selectedProjectId);
  let content = <SelectedProject project={selectedProject}/>; 
if(projectsState.selectedProjectId === null) {
  content =<NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/> //lift stateup
}
else if(projectsState.selectedProjectId === undefined) {
  content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
}

function handleSelectProject(projectId){
  setProjectsState(prevState => {
    return {
      ...prevState,
      selectedProjectId: projectId, //signal to add new project
    }
  })
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

function handleCancelAddProject() {
  setProjectsState((prevState) => {
    return {
      ...prevState,
      selectedProjectId: undefined,
    }
  })
}

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjecstSidebar 
      onStartAddProject={handleStartAddProject} 
      projects={projectsState.projects}
      onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
