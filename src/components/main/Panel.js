import React from 'react';
import SplitPane from 'react-split-pane';
import './Panel.css';
import {ReflexContainer, ReflexElement, ReflexSplitter} from "react-reflex";
import {Info} from "../info/Info";
import {Left} from "../left/Left";
import {Right} from "../right/Right";
import {Footer} from "../footer/Footer";

export const Panel = () => {

    return (
        <SplitPane split="horizontal" minSize={50} maxSize={50} defaultSize={50}>
            <div className='product'>
                Product
            </div>
            <SplitPane split="horizontal" minSize={0} defaultSize='75%'>
                <ReflexContainer orientation="vertical">
                    <ReflexElement>
                        <Left/>
                    </ReflexElement>
                    <ReflexSplitter/>
                    <ReflexElement>
                        <Info/>
                    </ReflexElement>
                    <ReflexSplitter/>
                    <ReflexElement>
                        <Right/>
                    </ReflexElement>
                </ReflexContainer>
                <Footer/>
            </SplitPane>
        </SplitPane>
    )
}
