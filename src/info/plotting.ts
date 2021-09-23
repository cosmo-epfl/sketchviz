import Plotly from '../map/plotly/plotly-scatter';

import { Data } from '../map/plotly/plotly-scatter';

/**
 * wrapper around scatter plots of Plotly.js for 2D and 3D properties
 */
export function plot_multidim_properties(
    x: number[],
    y: number[],
    my_div: HTMLElement,
    title: string,
    xlabel?: string,
    ylabel?: string,
): void {
    const trace = {
        x: x,
        y: y,
        type: 'scatter',
        mode: 'lines',
    };

    const layout = {
        title: title,
        xref: 'paper',
        yref: 'paper',
        xaxis: {
            title: xlabel,
            showgrid: false,
            zeroline: true,
            showline: true,
        },
        yaxis: {
            title: ylabel,
            showgrid: false,
            showline: true,
            zeroline: false,
        },
        showlegend: false,
        x: 0.2,
        legend: {
            y: 0.5,
        },
        autosize: true,
        margin: {
            l: 40,
            r: 40,
            b: 40,
            t: 40,
            pad: 2,
        },
        width: 400,
        height: 300, // to be changed after deciding on the popup fromat
        tracetoggle: false,

    };

    const config = {
        displayModeBar: false,
        responsive: true,
    };

    const data = [trace] as Data[];

    void Plotly.plot(my_div, data, layout, config);
}