import { Github } from "lucide-react";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Todofy API</a>
      </div>
      <div className="navbar-end">
        <a href="https://github.com/Osiris8/todofy" target="__blanck">
          <Github className="mr-4" />
        </a>
        <a href="mailto:miganosiris8@gmail.com" className="btn btn-primary">
          Primary
        </a>
      </div>
    </div>
  );
}
