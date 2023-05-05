import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const DashBoard = () => {
    const subjectsMarks = [
        { id: 1, name: "John", physics: 75, chemistry: 85, math: 80 },
        { id: 2, name: "Emily", physics: 80, chemistry: 78, math: 92 },
        { id: 3, name: "James", physics: 90, chemistry: 82, math: 88 },
        { id: 4, name: "Sarah", physics: 87, chemistry: 89, math: 85 },
        { id: 5, name: "David", physics: 85, chemistry: 90, math: 91 },
        { id: 6, name: "Linda", physics: 91, chemistry: 87, math: 83 },
        { id: 7, name: "Oliver", physics: 89, chemistry: 84, math: 89 },
        { id: 8, name: "Mia", physics: 82, chemistry: 90, math: 85 },
        { id: 9, name: "Ethan", physics: 93, chemistry: 85, math: 89 },
        { id: 10, name: "Ava", physics: 86, chemistry: 93, math: 91 },
        { id: 11, name: "Jacob", physics: 80, chemistry: 91, math: 92 },
        { id: 12, name: "Sophia", physics: 87, chemistry: 83, math: 90 },
    ];

    return (
        <div>
            <LineChart
                width={1000}
                height={300}
                data={subjectsMarks}

            >
                <Line dataKey='physics'></Line>
                <Line stroke="#8884d8" dataKey='chemistry'></Line>
                <Line dataKey='math'></Line>
                <XAxis dataKey="name" />
                <Tooltip></Tooltip>
                <YAxis></YAxis>
            </LineChart>
        </div>
    );
};

export default DashBoard;