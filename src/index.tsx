import React from 'react';
import {createRoot} from 'react-dom/client';
import 'semantic-ui-less/semantic.less';

const divRoot = document.getElementById('root');
if (divRoot) {
  const reactRoot = createRoot(divRoot);
  reactRoot.render(<div>hello</div>);
}
