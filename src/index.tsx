import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Provider } from 'react-redux';

import '../styles/styles.scss';
import '../styles/tailwind.css';

import { store } from 'store';

import { Users, UserInfo, AddUser } from './components';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="user-info" element={<UserInfo />} />
        <Route path="add-user" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
);
