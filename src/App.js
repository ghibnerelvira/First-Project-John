import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import BlogsPage from './pages/BlogsPage';
import WorksPage from './pages/WorksPage';
import ContactsPage from './pages/ContactsPage';
import SingleWorkPage from './pages/SingleWorkPage';


export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/blogs' element={<BlogsPage/>}/>
          <Route path='/works' element={<WorksPage/>}/>
          <Route path='/work/:work_id' element={<SingleWorkPage/>}/>
          <Route path='/contacts' element={<ContactsPage/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Route>
      </Routes>

    </div>
  );
}

