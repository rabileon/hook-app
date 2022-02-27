import React from 'react';
import ReactDOM from 'react-dom';
import { FormWithCustomHook } from './components/useEffect/FormWithCustomHook';
import { SimpleForm } from './components/useEffect/SimpleForm';
import { CounterApp } from './components/useState/CounterApp';
import { CounterWithCustomHook } from './components/useState/CounterWithCustomHook';

import { HookApp } from './HookApp';

ReactDOM.render(<FormWithCustomHook />, document.getElementById('root'));
