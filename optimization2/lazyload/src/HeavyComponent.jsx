import React from "react";

const HeavyComponent = () => {
    console.log("HeavyComponent rendered");

    return (
        <div style={{ marginTop: "20px", padding: "10px", border: "1px solid gray" }}>
            <h3>Heavy UI Component</h3>
            <p>This component simulates a heavy UI section.</p>
        </div>
    );
};

export default React.memo(HeavyComponent);
