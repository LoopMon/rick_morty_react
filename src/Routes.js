import React from 'react'
import { Home } from './Pages/Home'
import { Personagens } from './Pages/Personagens'
import { Personagem } from './Pages/Personagem'
import { 
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'


export function Routes() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/personagens" exact>
                        <Personagens />
                    </Route>
                    <Route path="/personagem/:id" exact>
                        <Personagem />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}