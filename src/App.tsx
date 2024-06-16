import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <main
      className="dark flex flex-col gap-6 overflow-y-auto px-8 pb-6 text-foreground [&>*]:mx-auto [&>*]:w-full [&>*]:max-w-[1954px]"
      style={{
        backgroundImage: 'url("/bg-mesh.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <nav className="mx-auto flex items-center justify-center gap-6 divide-background py-4">
        <Link to="/">Home</Link>
        <Link to="tree">Tree</Link>
        <Link to="dashboard">Dashboard</Link>
      </nav>
      <Outlet />
    </main>
  );
}

export default App;
