import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Aside from './components/Aside';
import DashboardScreen from './screens/DashboardScreen';
import ProductsScreen from './screens/ProductsScreen';
import CategoryScreen from './screens/CategoryScreen';
import Header from './components/Header'
import CategoryCreateScreen from './screens/CategoryCreateScreen';
import CategoryEditScreen from './screens/CategoryEditScreen';
import ProductCreateScreen from './screens/ProductCreateScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import NotFound from './screens/NotFound';

const App = () => {

  return (
    <Router>
      <Aside />
      <main className="dashboard">
        <Header />
        <Routes>
       
          <Route path="/dashboard" element={<DashboardScreen />} />
          <Route path="produtos" element={<ProductsScreen />} />
          <Route path="produtos/cadastrar" element={<ProductCreateScreen />} />
          <Route path="produtos/editar/:id" element={<ProductEditScreen />} />
          <Route path="categorias" element={<CategoryScreen />} />
          <Route path="categorias/cadastrar" element={<CategoryCreateScreen />} />
          <Route path="categorias/editar/:id" element={<CategoryEditScreen />} />
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />

        </Routes>
      </main>
    </Router>
  )
}

export default App;
