import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MasterLayout from '../MasterLayout/Main';
import routes from './routes';


const RoutePage = () => {
    return (
        <Router>
            <Routes>
                {routes.map(({ path, component: Component }, i) => {
                    return <Route path={path}
                        element={
                            <MasterLayout
                                ptitle={Component.props.title}
                              />
                        }
                        key={i}>
                        <Route exact path={path} element={Component} />
                    </Route>
                })}


            </Routes>
        </Router>
    )
}
export default RoutePage;