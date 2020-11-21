import React from 'react';
import { ResponsivePie as Pie } from '@nivo/pie';

const Macros = ({ fat, protein, carb }) => {
    const props = {
        width: 500,
        height: 500,
        margin: { top: 80, right: 0, bottom: 80, left: 0 },
    };

    return (
        <Pie
            { ...props }
            innerRadius={0.6}
            padAngle={0.5}
            cornerRadius={5}
            radialLabelsLinkColor={{
                from: 'color',
            }}
            radialLabelsLinkStrokeWidth={3}
            radialLabelsTextColor={{
                from: 'color',
                modifiers: [['darker', 1.2]],
            }}
            animate={true}
            data={[
                {
                    id: 'fat',
                    label: 'fat',
                    value: fat,
                    color: "hsl(97, 70%, 50%)",
                },
                {
                    id: 'protein',
                    label: 'protein',
                    value: protein,
                    color: "hsl(238, 70%, 50%)",
                },
                {
                    id: 'carbs',
                    label: 'carbs',
                    value: carb,
                    color: "hsl(188, 70%, 50%)"
                }
            ]}
        />
    );
};

export default Macros;