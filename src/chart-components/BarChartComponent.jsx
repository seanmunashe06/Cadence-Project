// src/charts/BarChartComponent.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';
import { BarChart3 } from 'lucide-react';

// Sample data for the chart (e.g., Weekly activity performance)
const data = [
  { name: 'Mon', revenue: 4000, profit: 2400 },
  { name: 'Tue', revenue: 3000, profit: 1398 },
  { name: 'Wed', revenue: 2000, profit: 9800 },
  { name: 'Thu', revenue: 2780, profit: 3908 },
  { name: 'Fri', revenue: 1890, profit: 4800 },
  { name: 'Sat', revenue: 2390, profit: 3800 },
  { name: 'Sun', revenue: 3490, profit: 4300 },
];

export default function BarChartComponent() {
  return (
    <div style={{
      background: '#fff',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '600px',
      margin: '20px auto'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
        <BarChart3 size={24} color="#4f46e5" />
        <h2 style={{ margin: 0, fontSize: '1.25rem', fontFamily: 'sans-serif', color: '#1f2937' }}>Weekly Performance</h2>
      </div>

      {/* ResponsiveContainer ensures the chart resizes nicely with the window */}
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} />
            <YAxis stroke="#888888" fontSize={12} tickLine={false} />
            <Tooltip 
              contentStyle={{ background: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb' }}
            />
            <Legend />
            <Bar dataKey="revenue" fill="#4f46e5" radius={[4, 4, 0, 0]} name="Revenue ($)" />
            <Bar dataKey="profit" fill="#06b6d4" radius={[4, 4, 0, 0]} name="Profit ($)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}