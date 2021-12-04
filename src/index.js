import './index.css'
// O import React é necessário, pois usamos ele indiretamente ao utilizar
// as sintaxes HTML, como "<h1>". E com isso usamos os arqivos "jsx" dele para conversão.
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

ReactDOM.render(
    <App></App>,
    document.getElementById('root')
)