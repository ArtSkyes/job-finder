import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import FindJobsPage from './pages/FindJobsPage';
import NotFoundPage from './pages/NotFoundPage';
import CreateJobPage from './pages/CreateJobPage';
import MainLayout from './layout/MainLayout';
import { JobsProvider } from './contexts/JobContext';
import { ThemeProvider } from '@mui/material/styles';
import themes from './assets/theme/themes';

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<FindJobsPage />} />
        <Route path='/create-job' element={<CreateJobPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route >
    )
  );

  return (
    <JobsProvider>
      <ThemeProvider theme={themes}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </JobsProvider>
  )
}

export default App;