import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    project: [],
  });
  const handleStartAddProject = () => {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  };
  const handleAddProject = (projectData) => {
    setProjectState((prev) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prev,
        selectedProjectId: undefined,
        project: [...prev.project, newProject],
      };
    });
  };

  const handleCancelAddProject = () => {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
      };
    });
  };
  const handleSelectedProject = (id) => {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: id,
      };
    });
  };
  const selectedProject = projectState.project.find(
    (p) => p.id === projectState.selectedProjectId
  );
  let content = <SelectedProject project={selectedProject}/>;
  if (projectState.selectedProjectId === null)
    content = (
      <NewProject
        onAddProject={handleAddProject}
        onCancel={handleCancelAddProject}
      />
    );
  else if (projectState.selectedProjectId === undefined)
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        projects={projectState.project}
        onStartAddProject={handleAddProject}
        onSelect={handleSelectedProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
