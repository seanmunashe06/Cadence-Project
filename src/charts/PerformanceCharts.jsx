const barData = [
  { label: 'Sales', value: 79 },
  { label: 'Customer Success', value: 71 },
  { label: 'Marketing', value: 66 },
  { label: 'Engineering', value: 84 },
  { label: 'Finance', value: 91 },
  { label: 'Operations', value: 41 },
]

const healthStats = [
  { label: 'Completed', value: 63, color: 'var(--forest)' },
  { label: 'In progress', value: 24, color: 'var(--sky)' },
  { label: 'Needs attention', value: 13, color: 'var(--amber)' },
]

function PerformanceCharts() {
  return (
    <div className="chart-grid">
      <div className="card card-pad chart-card">
        <div className="section-heading">Cycle progress by division</div>
        <div className="chart-bars" aria-label="Division progress chart">
          {barData.map((item) => (
            <div key={item.label} className="chart-bar-item">
              <div className="chart-bar-meta">
                <span>{item.label}</span>
                <strong>{item.value}%</strong>
              </div>
              <div className="chart-track">
                <div className="chart-fill" style={{ width: `${item.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card card-pad chart-card">
        <div className="section-heading">Review health</div>
        <div className="ring-chart" aria-label="Review health chart">
          <div className="ring-center">
            <strong>63%</strong>
            <span>On track</span>
          </div>
        </div>
        <div className="chart-legend">
          {healthStats.map((item) => (
            <div key={item.label} className="legend-item">
              <span className="legend-dot" style={{ background: item.color }} />
              <span>{item.label}</span>
              <strong>{item.value}%</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PerformanceCharts
