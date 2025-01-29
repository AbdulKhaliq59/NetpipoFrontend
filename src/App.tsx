import React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import { store } from './store/store';
import { client } from './services/api';
import { EpisodeList } from './components/EpisodeList';
import { Pagination } from './components/Pagination';
import { Filter } from './components/Filter';
import { ToastContainer } from 'react-toastify';
import "./App.css";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <div className="min-h-screen bg-gray-50">
          <header className="bg-blue-600 text-white py-6 mb-6">
            <h1 className="text-3xl font-bold text-center">
              Rick and Morty Episodes
            </h1>
          </header>
          <main className="container mx-auto px-4">
            <Filter />
            <EpisodeList />
            <Pagination />
          </main>
        </div>
      </ApolloProvider>
      <ToastContainer
        position='top-center'
        autoClose={5000}
      />
    </Provider>
  );
};

export default App;