import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line, Pie } from "react-chartjs-2";

interface OrdersByCategoryData {
  datasets: {
    data: number[];
    backgroundColor: string[];
    label: string;
  }[];
  labels: string[];
}

interface RevenueOverTimeData {
  datasets: {
    data: (number | null)[];
    label: string;
    borderColor: string;
    fill: boolean;
  }[];
  labels: string[];
}

const Dashboard: React.FC = () => {
  const [ordersByCategoryData, setOrdersByCategoryData] =
    useState<OrdersByCategoryData>({
      datasets: [],
      labels: [],
    });
  const [revenueOverTimeData, setRevenueOverTimeData] = useState<RevenueOverTimeData>({
    datasets: [],
    labels: [],
  });
  const [filter, setFilter] = useState("month");

  useEffect(() => {
    fetchData();
  }, [filter]);

  const fetchData = async () => {
    try {
      const ordersByCategoryResponse = await axios.get(
        `/api/ordersByCategory?filter=${filter}`
      );
      setOrdersByCategoryData(ordersByCategoryResponse.data);

      const revenueOverTimeResponse = await axios.get(
        `/api/revenueOverTime?filter=${filter}`
      );
      setRevenueOverTimeData(revenueOverTimeResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="month">Month</option>
        <option value="year">Year</option>
      </select>

      <Pie data={ordersByCategoryData} />

      <Line data={revenueOverTimeData} />
    </div>
  );
};

export default Dashboard;
