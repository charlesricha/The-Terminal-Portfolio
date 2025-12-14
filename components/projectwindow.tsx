import Window from "./window";

export default function ProjectsWindow({ onClose }: { onClose: () => void }) {
    const projectSidebar = (
    <ul className="space-y-1 text-sm">
      <li className="bg-blue-500 rounded-md p-2 text-center">Kuza Kenya Project</li>
    </ul>
  );    

  return (
    <Window title="Projects" onClose={onClose} sidebar={projectSidebar}>
      <h2>My Projects</h2>
      <ul>
        <li>Project 1</li>
        <li>Project 2</li>
        <li>Project 3</li>
      </ul>
    </Window>
  );
}
