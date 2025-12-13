import Window from "./window";

export default function ProjectsWindow({ onClose }: { onClose: () => void }) {
  return (
    <Window title="Projects" onClose={onClose}>
      <h2>My Projects</h2>
      <ul>
        <li>Project 1</li>
        <li>Project 2</li>
        <li>Project 3</li>
      </ul>
    </Window>
  );
}
