import AddClientModal from "../components/AddClientModal";
import AddProjectModal from "../components/AddProjectModal";
import Projects from "../components/Projects";
import Client from "../components/Clients";

export default function Home() {
  return (
      <>
        <div className="d-flex gap-3 mb-4">
          <AddClientModal />
          <AddProjectModal/>
        </div>
        <Projects />
        <hr/>
        <Client />
      </>
  )
}