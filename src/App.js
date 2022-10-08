import { Fragment } from 'react';
import { DefaultLayout } from '~/layouts';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { publicRoutes } from '~/routes';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes.map((route, index) => {
                    let Layout = route.layout;
                    if (Layout === null) {
                        Layout = Fragment;
                    } else if (!Layout) {
                        Layout = DefaultLayout;
                    }
                    let Element = route.element;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Element />
                                </Layout>
                            }
                        ></Route>
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
