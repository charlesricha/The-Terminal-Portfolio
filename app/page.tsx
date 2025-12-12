import {Terminal} from "../components/terminal";
import {Clock} from "../components/terminal";
/* import {Dock} from "../components/terminal";
import {DesktopIcons} from "../components/terminal"; */

export default function Page() {
  return (
    <div className="relative w-screen h-screen bg-zinc-950 overflow-hidden">
      {/* Clock in the corner */}
      <Clock>
      </Clock>

     
     {/*  <DesktopIcons />

     
      <Dock /> */}

      {/* Terminal window */}
      <Terminal />
    </div>
  );
}
