/* Styles */
import './styles.less';

import {
    useRootApplication,
    StorageType, Screen, Direction, Row, Decorator, BorderSide, Spacer, Units, Column,
} from '@dhampirjs/core';
import {FunctionComponent} from 'react';
import {Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";

export const AppRouter: FunctionComponent = () => {

    return <>
        ROUTER
        <BrowserRouter>
        <Routes>
            <Route path={'/*'} element={<Screen direction={Direction.VERTICAL} fullScreen={true}>
                <Row>
                    <Decorator
                        borderPosition={[BorderSide.BOTTOM]}
                        borderColor={'#ccc'} borderWidth={1}
                        fillColor={'#dedcdc'} fill={true}
                    >
                        <Spacer space={0.5} units={Units.EM}>
                            <Routes>
                                <Route path={'one/'} element={<div>
                                    One
                                    <Routes>
                                        <Route path={'a'} element={<div>One A Header</div>} />
                                        <Route path={'b'} element={<div>One B Header</div>} />
                                        <Route path={'c'} element={<div>One C Header</div>} />
                                        <Route path={'d'} element={<div>One D Header</div>} />
                                        <Route path={'e'} element={<div>One E Header</div>} />
                                    </Routes>
                                </div>}/>
                                <Route path={'two'} element={<div>Twee</div>}/>
                                <Route path={'three'} element={<div>Three</div>}/>
                                <Route path={'four'} element={<div>Four</div>}/>
                            </Routes>
                        </Spacer>
                    </Decorator>
                </Row>
                <Row greedy={true}>
                    <Column>
                        <Routes>
                            <Route path={'one/*'} element={<div>
                                One Left Bar
                                <Routes>
                                    <Route path={'a'} element={<div>One A Left Bar</div>} />
                                    <Route path={'b'} element={<div>One b</div>} />
                                    <Route path={'c'} element={<div>One c</div>} />
                                    <Route path={'d'} element={<div>One d</div>} />
                                    <Route path={'e'} element={<div>One e</div>} />
                                </Routes>

                            </div>}/>
                            <Route path={'two'} element={<div>Two Left Bar</div>}/>
                            <Route path={'three'} element={<div>Three Left Bar</div>}/>
                            <Route path={'four'} element={<div>Four Left Bar</div>}/>
                        </Routes>
                    </Column>
                    <Column greedy={true}>
                        <Decorator fill={true}>
                            <Routes>
                                <Route path={'one'} element={<div>One Page Content</div>}/>
                                <Route path={'two'} element={<div>Two Page Content</div>}/>
                                <Route path={'three'} element={<div>Three Page Content</div>}/>
                                <Route path={'four'} element={<div>Four Page Content</div>}/>
                            </Routes>
                        </Decorator>

                    </Column>
                </Row>
                <Row>
                    <Decorator fill={true} borderPosition={[BorderSide.TOP]} borderWidth={1}>
                        <Spacer space={0.5} units={Units.EM}>
                            <Routes>
                                <Route path={'one/*'} element={<div>
                                    One
                                    <Routes>
                                        <Route path={'a'} element={<div>One a</div>} />
                                        <Route path={'b'} element={<div>One b</div>} />
                                        <Route path={'c'} element={<div>One c</div>} />
                                        <Route path={'d'} element={<div>One d</div>} />
                                        <Route path={'e'} element={<div>One e</div>} />
                                    </Routes>
                                </div>}/>
                                <Route path={'two'} element={<div>
                                    Two:
                                    <Routes>
                                        <Route path={'a'} element={<div></div>} />
                                        <Route path={'b'} element={<div></div>} />
                                        <Route path={'c'} element={<div></div>} />
                                        <Route path={'d'} element={<div></div>} />
                                        <Route path={'e'} element={<div></div>} />
                                    </Routes>
                                </div>}/>
                                <Route path={'three'} element={<div>
                                    Three
                                    <Routes>
                                        <Route path={'a'} element={<div></div>} />
                                        <Route path={'b'} element={<div></div>} />
                                        <Route path={'c'} element={<div></div>} />
                                        <Route path={'d'} element={<div></div>} />
                                        <Route path={'e'} element={<div></div>} />
                                    </Routes>
                                </div>}/>
                                <Route path={'four'} element={<div>
                                    Four
                                    <Routes>
                                        <Route path={'a'} element={<div></div>} />
                                        <Route path={'b'} element={<div></div>} />
                                        <Route path={'c'} element={<div></div>} />
                                        <Route path={'d'} element={<div></div>} />
                                        <Route path={'e'} element={<div></div>} />
                                    </Routes>
                                </div>}/>
                            </Routes>
                        </Spacer>
                    </Decorator>
                </Row>
            </Screen>}/>
        </Routes>
        </BrowserRouter>
    </>
};
