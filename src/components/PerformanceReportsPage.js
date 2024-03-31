import React, { useState, useEffect } from 'react';


const PerformanceReportsPage = () => {
    const dummyData = [
        { id: 1, name: 'Report 1', date: '2024-03-31', performance: 85 },
        { id: 2, name: 'Report 2', date: '2024-03-30', performance: 70 },
        { id: 3, name: 'Report 3', date: '2024-03-29', performance: 90 },
        { id: 4, name: 'Report 4', date: '2024-03-28', performance: 75 },
    ];

    const [reports, setReports] = useState([]);

    useEffect(() => {
        setReports(dummyData);
    }, []);

    return (
        <div className="performance-reports-container">
            <h2 className="performance-reports-heading">Performance Reports</h2>
            <table className="performance-reports-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Performance</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.map((report) => (
                        <tr key={report.id}>
                            <td>{report.id}</td>
                            <td>{report.name}</td>
                            <td>{report.date}</td>
                            <td>{report.performance}%</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PerformanceReportsPage;
