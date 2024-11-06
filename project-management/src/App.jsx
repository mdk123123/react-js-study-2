import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjecstSidebar from "./components/ProjectsSideBar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, //not add or select any project - donothing
    projects: [],
    tasks:[] //manage tasks in App components using handleClick in NewTasks
  })

  function handleAddTask(text) {
    // ...
    setProjectsState(prevState => {
      const taskId= Math.random();
      const newTask={
          text: text,
          projectId: prevState.selectedProjectId,
          id: taskId //generate id
      };
  
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      }
    })
  }

  function handleDeleteTask(id) {
    //...
    setProjectsState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task)=> task.id!== id)
      }
    })
  }
  const selectedProject = projectsState.projects.find(project => project.id ===projectsState.selectedProjectId);
  let content = <SelectedProject 
    project={selectedProject} 
    onDelete={handleDeleteProject} 
    onAddTask = {handleAddTask} 
    onDeleteTask={handleDeleteTask}
    tasks={projectsState.tasks}
    />; 
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

function handleDeleteProject() {
  setProjectsState(prevState => {
    return {
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter((project)=> project.id!== prevState.selectedProjectId)
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
      selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
