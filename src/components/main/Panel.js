import React, {Component} from 'react';
import SplitPane, {Pane} from 'react-split-pane';
import './Panel.css';
import {ReflexContainer, ReflexElement, ReflexSplitter} from "react-reflex";

export const Panel = () => {

    return (


                <SplitPane split="horizontal" minSize={50} defaultSize={50}>
                    <Pane className='pane2'   >
                        header
                    </Pane>

                        <SplitPane split="horizontal" minSize={0} defaultSize={100}>

                            <Pane className='pane2'>
                                <ReflexContainer orientation="vertical">
                                    <ReflexElement>
                                        <div>1111</div>
                                    </ReflexElement>
                                    <ReflexSplitter/>
                                    <ReflexElement>
                                        <div>2222</div>
                                    </ReflexElement>
                                    <ReflexSplitter/>
                                    <ReflexElement>
                                        <div>3333</div>
                                    </ReflexElement>
                                </ReflexContainer>
                            </Pane>
                            <Pane className='pane2'>
                                <div>5555</div>
                                <div>6666</div>
                            </Pane>


                        </SplitPane>

                </SplitPane>



    )
}
