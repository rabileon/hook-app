import React from 'react';
import ReactDOM from 'react-dom';
import { MultipleCustomHooks } from './components/examples/MultipleCustomHooks';
import { FormWithCustomHook } from './components/useEffect/FormWithCustomHook';
import { SimpleForm } from './components/useEffect/SimpleForm';
import { CounterApp } from './components/useState/CounterApp';
import { CounterWithCustomHook } from './components/useState/CounterWithCustomHook';

import { HookApp } from './HookApp';

ReactDOM.render(<MultipleCustomHooks />, document.getElementById('root'));
