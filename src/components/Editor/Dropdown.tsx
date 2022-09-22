import React from 'react'

export default function Dropdown(props: any) {
    return (
        <ul className="dp-menu level-1">
            <li className="dp-item">
                Text
                <ul className="dp-menu level-2">
                    <li className="dp-item"> Hello</li>
                </ul>
            </li>
            <li className="dp-item">
                Text
                <ul className="dp-menu level-2">
                    <li className="dp-item">
                        text
                    </li>
                </ul>
            </li>
            <li className="dp-item">
                text
            </li>
        </ul>
    )
}
