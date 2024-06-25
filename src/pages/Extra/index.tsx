import React from "react";
import AnyChart from "anychart-react";

const ExtraPge: React.FC = () => {
  return (
    <div>
      <AnyChart
        type='waterfall'
        data={[
          { x: "Start", value: 23 },
          { x: "Jan", value: 22 },
          { x: "Feb", value: -46 },
          { x: "Mar", value: -91 },
          { x: "Apr", value: 37 },
          { x: "May", value: -21 },
          { x: "Jun", value: 53 },
          { x: "Jul", value: 31 },
          { x: "Aug", value: -15 },
          { x: "Sep", value: 42 },
          { x: "Oct", value: 53 },
          { x: "Nov", value: -15 },
          { x: "Dec", value: 51 },
          { x: "End", isTotal: true },
        ]}
        title='Simple pie chart'
      />
    </div>
  );
};

export default ExtraPge;
