import React from "react";
import "./Tabs.css";

const Tabs = ({ tabs, activeTab, onTabClick }) => {
    return (
        <div className="tabs">
            {tabs.map((tab) => (
                <div
                    key={tab.label}
                    className={`tab ${activeTab === tab.label ? "active" : ""}`}
                    onClick={() => onTabClick(tab.label)}
                >
                    {tab.label} ({tab.count})
                </div>
            ))}
        </div>
    );
};

export default Tabs;
