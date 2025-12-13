import Window from "./window";

export default function AboutWindow({ onClose }: { onClose: () => void }) {
  return (
    <Window title="About" onClose={onClose}>
      <h2>About Me</h2>
      <p>This is the content for my about page.</p>
    </Window>
  );
}
