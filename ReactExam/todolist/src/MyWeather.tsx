import React from 'react';
import { Component } from "react";

interface MyProps {
    weather : string;
    children : React.ReactNode;
}

// const MyWeather : React.FC<MyProps> = ({children, weather}) => {
//     return (
//         <div>
//             {children}<p />
//             오늘의 날씨는 {weather} 입니다. 
//         </div>
//     )
// }

class MyWeather extends Component<MyProps> {
    render() {
        const {children, weather} = this.props;
        return (
            <div>
                {children}<p />
                오늘의 날씨는 {weather} 입니다.
            </div>
        )
    }
}

export default MyWeather;
