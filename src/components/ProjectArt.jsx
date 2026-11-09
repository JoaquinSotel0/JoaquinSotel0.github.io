import Icon from "./Icon";

// Original conceptual illustrations, not application screenshots or real data.
export default function ProjectArt({ type }) {
  if (type === "planner")
    return (
      <div className="project-art planner-art" aria-hidden="true">
        <div className="plan-sheet">
          <div className="art-toolbar">
            <span>
              <Icon name="code" size={16} /> project.plan
            </span>
            <span>01 / 03</span>
          </div>
          <div className="plan-body">
            <div className="plan-title">
              A plan for every
              <br />
              moving part<span>.</span>
            </div>
            <div className="timeline">
              <div className="timeline-head">
                <span>Scope</span>
                <span>Build</span>
                <span>Deliver</span>
              </div>
              <i />
              <i />
              <i />
              <span className="timeline-marker" />
            </div>
            <div className="plan-bottom">
              <span>
                <i /> Structured to move forward
              </span>
              <Icon name="diagonal" size={17} />
            </div>
          </div>
        </div>
        <span className="art-caption">
          CONCEPT ILLUSTRATION / PROJECT PLANNING
        </span>
      </div>
    );
  if (type === "dashboard")
    return (
      <div className="project-art dashboard-art" aria-hidden="true">
        <div className="dashboard-graphic">
          <div className="dashboard-side">
            <span className="mini-brand">
              p<span>.</span>
            </span>
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="dashboard-body">
            <div className="art-toolbar">
              <span>Workspace overview</span>
              <span className="mini-avatar">JS</span>
            </div>
            <div className="dashboard-welcome">Everything in one place.</div>
            <div className="dashboard-stats">
              <span />
              <span />
              <span />
            </div>
            <div className="dashboard-chart">
              <span>Activity overview</span>
              <div className="bars">
                {[35, 58, 42, 76, 60, 90, 73, 100, 88].map((height, i) => (
                  <i key={i} style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <span className="art-caption">CONCEPT ILLUSTRATION / SAMPLE DATA</span>
      </div>
    );
  return (
    <div className="project-art analysis-art" aria-hidden="true">
      <div className="analysis-graphic">
        <div className="analysis-heading">
          <span className="r-mark">
            R<span>_</span>
          </span>
          <span>
            DURANGO
            <br />
            <strong>2020</strong>
          </span>
        </div>
        <div className="analysis-chart">
          <svg viewBox="0 0 450 130" fill="none" preserveAspectRatio="none">
            <path
              d="M0 30h450M0 65h450M0 100h450"
              stroke="currentColor"
              opacity=".15"
            />
            <path
              d="m0 118 22-3 22 1 22-10 22 3 22-19 22 6 22-21 22 7 22-32 22 7 22-18 22 13 22-30 22 10 22-16 22 8 22-20 22 13 32-16v132H0Z"
              fill="url(#chart-fill)"
            />
            <path
              d="m0 118 22-3 22 1 22-10 22 3 22-19 22 6 22-21 22 7 22-32 22 7 22-18 22 13 22-30 22 10 22-16 22 8 22-20 22 13 32-16"
              stroke="currentColor"
              strokeWidth="2"
            />
            <defs>
              <linearGradient
                id="chart-fill"
                x1="0"
                x2="0"
                y1="0"
                y2="130"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#a8bce3" stopOpacity=".2" />
                <stop offset="1" stopColor="#a8bce3" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="analysis-footer">
          <span>OBSERVE. EXPLORE. UNDERSTAND.</span>
          <Icon name="diagonal" size={17} />
        </div>
      </div>
      <span className="art-caption">
        CONCEPT ILLUSTRATION / NOT RESEARCH RESULTS
      </span>
    </div>
  );
}
