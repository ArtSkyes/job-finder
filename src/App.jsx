import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import FindJobs from './pages/FindJobs';
import CompaniesPage from './pages/CompaniesPage';
import NotFoundPage from './pages/NotFoundPage';
import AddJobPage from './pages/AddJobPage';

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' >
        <Route index element={<FindJobs />} />
        <Route path='/companies' element={<CompaniesPage />} />
        <Route path='/add-job' element={<AddJobPage />} />
        <Route path='*' element={<NotFoundPage />} />

      </Route >
    )
  );

  return (
    <RouterProvider router={router} />
  )
}

export default App;