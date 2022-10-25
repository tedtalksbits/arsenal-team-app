import "./App.css";
import Header from "./components/Header";
import Table from "./components/Table";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import { ThemeProvider } from "styled-components";
import { appTheme } from "./theme/appTheme";

function App() {
    return (
        <ThemeProvider theme={appTheme}>
            <Router>
                <div className="App">
                    <Nav />
                    <Header />
                    <Switch>
                        <Route path="/" exact component={HomePage}></Route>
                        <Route path="/team" exact component={Table}></Route>
                    </Switch>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
