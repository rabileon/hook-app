import React from 'react';
import ReactDOM from 'react-dom';
import { MultipleCustomHooks } from './components/examples/MultipleCustomHooks';
import { MemoHook } from './components/memos/MemoHook';
import { Memorize } from './components/memos/Memorize';
import { FormWithCustomHook } from './components/useEffect/FormWithCustomHook';
import { SimpleForm } from './components/useEffect/SimpleForm';
import { Layout } from './components/useLayoutEffect/Layout';
import { FocusScreen } from './components/useRef/FocusScreen';
import { RealExampleRef } from './components/useRef/RealExampleRef';
import { CounterApp } from './components/useState/CounterApp';
import { CounterWithCustomHook } from './components/useState/CounterWithCustomHook';

import { HookApp } from './HookApp';

ReactDOM.render(<MemoHook />, document.getElementById('root'));
