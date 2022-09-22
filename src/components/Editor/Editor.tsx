import React, { useEffect, useRef } from 'react'
import '../../style/editor.scss';
import Dropdown from './Dropdown';
import Draggable from 'react-draggable';

export default function Editor() {
    const typingText = useRef<HTMLDivElement>(null)
    useEffect(() => {
        // set up text to print, each item in array is new line
        let aText = new Array(
            "I am so glad you found your way to my site.",
            "My name is Dude",
            `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,

        );
        let iSpeed = 100; // time delay of print out
        let iIndex = 0; // start printing array at this position
        let iArrLength = aText[1].length; // the length of the text array
        let iScrollAt = 20; // start scrolling up at this many lines

        let iTextPos = 0; // initialise text position
        let sContents = ''; // initialise contents variable
        let iRow; // initialise current row

        function typewriter() {
            sContents = ' ';
            iRow = Math.max(0, iIndex - iScrollAt);
            let destination = typingText.current;

            while (iRow < iIndex) {
                sContents += aText[iRow++] + '<br />';
            }
            if (destination) {
                destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_".split('').reverse().join('');
            }
            if (iTextPos++ == iArrLength) {
                iTextPos = 0;
                iIndex++;
                if (iIndex != aText.length) {
                    iArrLength = aText[iIndex].length;
                    setTimeout(() => typewriter(), 100);
                }
            } else {
                setTimeout(() => typewriter(), iSpeed);
            }
        }
        typewriter();
    }, [])
    return (

        <div className='editor'>
            <Draggable
                handle=".space-between">
                <div>
                    <div id="window">
                        <div className='flex space-between'>
                            <div id="title"></div>
                            <div id="title">prodyut@linux-core :~</div>
                            <div id="buttons">
                                <span id="minimize"></span>
                                <span id="resize"></span>
                                <span id="close"></span>
                            </div>
                        </div>
                        <div className="navbar">
                            <ul className="nav-menu arrange">
                                <li className="nav-item">File
                                    <Dropdown></Dropdown>
                                </li>
                                <li className="nav-item"> Edit
                                    <Dropdown></Dropdown>
                                </li>
                                <li className="nav-item">Terminal
                                    {/* <Dropdown></Dropdown> */}
                                </li>
                            </ul>
                        </div>
                        <div className="textarea" ref={typingText}></div>
                    </div>
                </div>
            </Draggable>

            {/* <div id='typedtext' ref={typingText} ></div> */}
        </div>
    )
}
