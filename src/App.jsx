
import { JobContext } from "./context/JobContext"
import StatsBar from "./component/StatsBar"
import { JobProvider } from "./context/JobContext"
import FilterJob from "./component/FIlterJob"
import { useContext } from "react"
import JobList from "./component/JobList"
import AddToForm from "./component/AddToForm"
import Header from "./component/Header"
function App() {

  return (
    <>
      <JobProvider>
        <Header />
        <AddToForm />
        <StatsBar />
        <FilterJob />
        <JobList />

      </JobProvider>
    </>
  )
}

export default App
