// Importing necessary components from 'react', 'react-chartjs-2', and 'chart.js' libraries
import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

// Registering the ArcElement for customization with Chart.js
Chart.register(ArcElement);

// Data configuration for the Pie chart

// Functional component 'PieChart' to render the Pie chart
const PieChart = ({
    voteCount,
    voteLabel,
}: {
    voteCount: number[];
    voteLabel: string[];
}) => {
    console.log(voteLabel);
    const data = {
        labels: voteLabel,
        datasets: [
            {
                // Label for the dataset
                label: "New dataset",

                // Data values for each section of the pie chart
                data: voteCount,

                // Colors for each section of the pie chart
                backgroundColor: [
                    "rgb(250, 242, 150)",
                    "rgb(150, 250, 153)",
                    "rgb(150, 245, 250)",
                ],

                // Offset when hovering over sections of the pie chart
                hoverOffset: 4,
            },
        ],
    };

    return (
        <div>
            {/* Render a Pie chart using provided data and options */}
            {/* <Pie
                data={data}
                width={75}
                height={25}
            /> */}
            <Pie
                data={data}
                width={75}
                height={25}
            />
        </div>
    );
};

// Export 'PieChart' component as the default export
export default PieChart;
