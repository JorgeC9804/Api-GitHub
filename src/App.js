import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GitHubFetch from './gitHubFetch/GitHubFetch';
import { GitHubProvider } from './gitHubContext/GitHubContext';
import Header from './header/Header';
import Followers from './pages/followers/Followers';
import GeneralInformation from './pages/GeneralInformation/GeneralInformation';
import Repositories from './pages/repositories/Repositories';
import './App.css';


function App() {   

  return (
    <div className="App h-screen">
      <BrowserRouter>
        <GitHubProvider>
            <Header />
            <Routes>
              <Route path='/' element={<GitHubFetch />}/>
              <Route path='/followers/:login' element={<Followers />} />
              <Route path='/repositories/:userName' element={<Repositories />} />
              <Route path='/user/:userName' element={<GeneralInformation />} />
              <Route path='*' element={<>Not found</>} />
            </Routes>
        </GitHubProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
