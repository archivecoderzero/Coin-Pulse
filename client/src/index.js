import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import App from './App';
import { BrowserRouter } from 'react-router-dom' //don't need to specify localhost url in axios http address


//style
import 'spectre.css/dist/spectre.min.css';
import 'spectre.css/dist/spectre-icons.css';
import './index.css';

// LIVE CHARTS THEME
const theme = createMuiTheme();
// LIVE CHARTS THEME


ReactDOM.render(
	<MuiThemeProvider theme={theme}>
	<BrowserRouter>
		<App />
	</BrowserRouter>,
  </MuiThemeProvider>,

	document.getElementById('root')
)