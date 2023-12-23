import Header from './components/Header';
import Footer from './components/Footer';
import BlogForm from './components/BlogForm';
import View from './components/View';
import BlogList from './components/BlogList';
import BlogHistory from './components/BlogHistory';
import { Routes, Route } from 'react-router-dom';
import './App.css'
function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<BlogList />}></Route>
        <Route path='/blogform' element={<BlogForm />}></Route>
        <Route path='/singleBlog/:id' element={<View />}></Route>
        <Route path='/blogDetails' element={<BlogHistory />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
