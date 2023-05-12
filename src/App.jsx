import { Route, Routes } from "react-router-dom";
import LutfilloTiket from "./pages/lutfilloTiket";
import Sms from "./pages/sms";






export default function App() {
  return (
    <div>
      

      <div>
        <Routes>
          <Route path="/" element></Route>
          <Route path="/sms" element={<Sms />}></Route>
          <Route path="/lutfilloTiket" element={<LutfilloTiket />}></Route>



        </Routes>
        

      </div>

    </div>


  )
}