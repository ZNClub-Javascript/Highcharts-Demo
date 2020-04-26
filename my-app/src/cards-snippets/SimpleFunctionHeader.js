import React from 'react';

const Header = props => (
<div className="header">Title</div>
);

const SimpleFunctionHeaderApp = props => (
 <Header/>
 <h2>Hello {props.name}</h2>
);

/*

https://jscomplete.com/playground
ReactDOM.render(
  <App name="Nevil" />
  , mountNode
);*/
