
import { JobContext } from "./context/JobContext"
import StatsBar from "./component/StatsBar"
import { JobProvider } from "./context/JobContext"
import FilterJob from "./component/FIlterJob"
function App() {

  return (
    <>
      <JobProvider>
        <div>
          <div className="bg-green-200 mx-auto flex justify-start items-start p-3 "> <span className="text-6xl font-bold text-black">Job Tracker</span></div>
        </div>
        <StatsBar />
        <FilterJob />
      </JobProvider>
    </>
  )
}

export default App
