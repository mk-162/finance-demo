import React from 'react';
import { 
  TrendingUp, 
  Target, 
  DollarSign, 
  BarChart3, 
  ShieldCheck, 
  Activity, 
  Info 
} from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const App = () => {
  const months = ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9', 'M10', 'M11', 'M12'];

  const trafficData = {
    labels: months,
    datasets: [
      {
        label: 'Refined Organic (4%)',
        data: [800, 832, 865, 900, 936, 973, 1012, 1053, 1095, 1139, 1184, 1232],
        borderColor: '#00e5ff',
        backgroundColor: 'rgba(0, 229, 255, 0.1)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Original Organic (15%)',
        data: [800, 920, 1058, 1217, 1399, 1609, 1850, 2128, 2447, 2814, 3236, 3721],
        borderColor: '#9c27b0',
        borderDash: [5, 5],
        fill: false,
        tension: 0.4,
      }
    ],
  };

  const cpcData = {
    labels: months,
    datasets: [
      {
        label: 'Stress Test CPC (£)',
        data: [2.08, 2.09, 2.10, 2.11, 2.12, 2.13, 2.14, 2.15, 2.16, 2.17, 2.18, 2.19],
        backgroundColor: '#00e676',
        borderRadius: 8,
      }
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: { color: '#a0aec0', font: { family: 'Inter' } }
      },
      tooltip: {
        backgroundColor: '#1a202c',
        titleColor: '#ffffff',
        bodyColor: '#a0aec0',
        borderColor: '#2d3748',
        borderWidth: 1,
      }
    },
    scales: {
      y: {
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
        ticks: { color: '#a0aec0' }
      },
      x: {
        grid: { display: false },
        ticks: { color: '#a0aec0' }
      }
    }
  };

  return (
    <div className="container">
      <header>
        <span className="badge badge-blue">Executive Summary</span>
        <h1>Strategic Assumptions Dashboard</h1>
        <p>GTSE Portfolio | 12-Month Performance Base Case</p>
      </header>

      <section className="grid">
        <div className="card">
          <h3><TrendingUp size={20} color="#00e5ff" /> Organic Growth</h3>
          <div className="value">4.0%</div>
          <div className="label">Monthly Compound Rate (Mature)</div>
          <p className="reasoning">
            <Info size={14} style={{ marginRight: 4 }} />
            Adjusted from 15% to 4%. Reflects healthy growth for established domains without 
            over-estimating compounding traffic that often plateaus in competitive B2B niches.
          </p>
        </div>

        <div className="card">
          <h3><Activity size={20} color="#00e676" /> CPC Trend</h3>
          <div className="value">+0.5%</div>
          <div className="label">Monthly Inflation Benchmark</div>
          <p className="reasoning">
            <ShieldCheck size={14} style={{ marginRight: 4 }} />
            Shifted from -3% (efficiency gains) to +0.5% (stress test). Protects margins against 
            rising platform competition and Q4 seasonal demand spikes.
          </p>
        </div>

        <div className="card">
          <h3><Target size={20} color="#9c27b0" /> Conversion Ceiling</h3>
          <div className="value">3.5%</div>
          <div className="label">Max Realistic Threshold</div>
          <p className="reasoning">
            <BarChart3 size={14} style={{ marginRight: 4 }} />
            Capped at 3.5% to avoid 'best-case' revenue inflation. Ensures business viability even 
            if CRO gains hit a natural market resistance point.
          </p>
        </div>
      </section>

      <section className="chart-section">
        <div className="chart-header">
          <div>
            <h2>Traffic Growth Modeling</h2>
            <p style={{ color: '#a0aec0', fontSize: '0.9rem' }}>Comparative: Stress Test vs. Original Projections</p>
          </div>
          <span className="badge badge-purple">Source: Ahrefs Benchmarks</span>
        </div>
        <div className="chart-container">
          <Line data={trafficData} options={chartOptions} />
        </div>
      </section>

      <section className="chart-section">
        <div className="chart-header">
          <div>
            <h2>Cost Per Click Inflation</h2>
            <p style={{ color: '#a0aec0', fontSize: '0.9rem' }}>Stress testing margin against platform competition</p>
          </div>
          <span className="badge badge-green">Source: WordStream 2024</span>
        </div>
        <div className="chart-container">
          <Bar data={cpcData} options={chartOptions} />
        </div>
      </section>

      <footer style={{ textAlign: 'center', color: '#4a5568', paddingBottom: '2rem', fontSize: '0.8rem' }}>
        &copy; 2026 GTSE Group Finance Operations - Strategy-Grade Projections
      </footer>
    </div>
  );
};

export default App;
