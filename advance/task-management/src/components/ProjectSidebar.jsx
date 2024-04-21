import Button from "./Button";

function ProjectSidebar({
  projects,
  onStartAddProject,
  onSelect,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-md">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((p) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:bg-stone-200";
          if (p.id === selectedProjectId) {
            cssClasses += "bg-stone-800 text-stone-200";
          } else {
            cssClasses += "text-stone-400";
          }
          return (
            <li key={p.id}>
              <button className={cssClasses} onClick={onSelect(p.id)}>
                {p.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default ProjectSidebar;
