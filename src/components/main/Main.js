import React, {Component} from 'react';
import {ReflexContainer, ReflexElement, ReflexSplitter} from "react-reflex";
// import 'react-reflex/styles.css';
import 'react-reflex/styles.css'
import './main.css';
import SplitPane, {Pane} from 'react-split-pane';

export const Main = () => {

    const onResize = (e) => {
        if (e.domElement) {
            e.domElement.classList.add('resizing')
        }
    };

    const onStopResize = (e) => {
        if (e.domElement) {
            e.domElement.classList.remove('resizing')
        }
    };
    const resizeProps = {
        onStopResize: onStopResize.bind(this),
        onResize: onResize.bind(this)
    }


    return (
        <ReflexContainer orientation="horizontal">
            <ReflexElement   propagateDimensions={true}  resizeHeight={true} minSize={400} direction={-1}>
                <div >header</div>
            </ReflexElement >

            <ReflexSplitter propagate={true} />

            <ReflexElement minSize={40} >
                <ReflexContainer orientation="vertical">
                    <ReflexElement propagateDimensions={true} >
                        <div >1111</div>
                    </ReflexElement>
                    <ReflexSplitter propagate={true}/>
                    <ReflexElement propagateDimensions={true} >
                        <div >2222</div>
                    </ReflexElement>
                    <ReflexSplitter propagate={true} />
                    <ReflexElement propagateDimensions={true} >
                        <div>3333</div>
                    </ReflexElement>
                </ReflexContainer>
            </ReflexElement>

            <ReflexSplitter  />

            <ReflexElement minSize={40}  >
                <div>footer</div>
            </ReflexElement>
        </ReflexContainer>
    );
}

