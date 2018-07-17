import React from 'react';
import { render } from 'react-dom';

import Layout from './components/Layout';
import Month from './components/Month';
import './index.html';

//render(<Layout />, document.getElementById('app'));

render(<Month />, document.getElementById('app'));