import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Categories from './pages/Categories'
import Users from './pages/Users'
import Orders from './pages/Orders'
import Settings from './pages/Settings'
import Registrazione from './pages/Registrazione';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { update } from './redux/userSlice';






function App() {

  const token = localStorage.getItem('token')
  const dispatch = useDispatch();

  const getUserDetails = async (tokenUser) => {
    const req = await fetch("http://localhost:3001/getUserDetails", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-access-token': tokenUser },
      body: JSON.stringify({
        tokenUser,
      })
    })

    const data = await req.json();

    console.log(data)
    if (data.status === 'ok') {
      dispatch(update({ nome: data.nome, email: data.email, token: data.token }))
    }

  }

  useEffect(() => {
    if (token) {
      getUserDetails(token)
    }
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/products' element={<Products />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/users' element={<Users />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/register' element={<Registrazione />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
