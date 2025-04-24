"use client";
import * as SortingAlgorithms from "./SortingAlgorithms/Sorting";
import React from "react";
import './AlgorithmVisualizer.css';
import { mergeSort } from './SortingAlgorithms/Sorting';

export default class AlgorithmVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            animationSpeed: 3, // Default animation speed
        };
    }

    componentDidMount() {
        this.resetArray();
    }
    resetArray() {
        const array = [];
        const isMobile = window.innerWidth <= 768; // or another breakpoint
        const maxValue = isMobile ? 100 : 750;
    
        for (let i = 0; i < 100; i++) {
            array.push(this.randomIntFromInterval(5, maxValue));
        }
        this.setState({ array });
    }

    adjustAnimationSpeed() {
        const speed = prompt("Enter animation speed (1-10, where 10 is fastest and 1 is slowest):", this.state.animationSpeed);
        if (speed !== null) {
            const numSpeed = parseInt(speed);
            if (!isNaN(numSpeed) && numSpeed >= 1 && numSpeed <= 10) {
                this.setState({ animationSpeed: numSpeed });
                alert(`Animation speed set to ${numSpeed}`);
            } else {
                alert("Please enter a valid number between 1 and 10");
            }
        }
    }

    mergeSort() {
        const { animationSpeed } = this.state;
        const MILLISECONDS = 11 - animationSpeed; // Invert the scale so 1 is fastest (10ms) and 10 is slowest (1ms)

        const animations = mergeSort(this.state.array.slice());
        const arrayBars = document.getElementsByClassName('array-bar');
        
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? '#fdfadb' : 'rgb(122, 153, 114)';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * MILLISECONDS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * MILLISECONDS);
            }
        }
    }
    
    bubbleSort(){}

    insertionSort(){}

    render() {
        const { array, animationSpeed } = this.state;
        return (
            <div className="array-container">
                <div className="array-bars-container">
                    {array.map((value, idx) => (
                        <div
                            className="array-bar"
                            key={idx}
                            style={{ height: `${value}px` }}
                        ></div>
                    ))}
                </div>
                <div className="buttons">
                    <button className="Settingbutton"  onClick={() => this.adjustAnimationSpeed()}>Adjust Animation Speed (Current: {animationSpeed})</button>
                    <button className="Settingbutton"  onClick={() => this.resetArray()}>Generate New Array</button>
                    <button className="Newbutton" onClick={() => this.mergeSort()}>Run Merge Sort</button>
                    <button className="Newbutton" onClick={() => this.bubbleSort()}>Run Bubble Sort</button>
                    <button className="Newbutton" onClick={() => this.insertionSort()}>Run Insertion Sort</button>
                </div>
            </div>
        );
    }

    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}