
import './App.css';
import { UserContextProvider } from './Component/ContextAPI/ContextProvider';
import { Home } from './Component/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Summary } from './Component/Summary';
import { BookingPage } from './Component/BookingPage';

function App() {
  return (
    <UserContextProvider>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>} />
      <Route path='summary' element={<Summary/>} />
      <Route path='bookingpage' element={<BookingPage/>} />
    </Routes>
    </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
