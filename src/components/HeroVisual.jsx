import { useId } from "react";
import "./HeroVisual.css";

export default function HeroVisual() {
  const id = useId().replaceAll(":", "");
  const ref = (name) => `url(#${id}-${name})`;

  return (
    <figure className="hero-architecture">
      <div className="architecture-heading" aria-hidden="true">
        <span>
          <i /> CONNECTED BY DESIGN
        </span>
        <span className="architecture-mark">JS / 01</span>
      </div>
      <svg
        className="architecture-art"
        viewBox="0 0 600 520"
        role="img"
        aria-labelledby={`${id}-title ${id}-description`}
      >
        <title id={`${id}-title`}>From interface to intelligence</title>
        <desc id={`${id}-description`}>
          Three floating layers connect a web interface, application logic, and
          data. A processor at the center represents machine learning.
        </desc>
        <defs>
          <radialGradient id={`${id}-glow`}>
            <stop stopColor="#9fc85e" stopOpacity=".17" />
            <stop offset="1" stopColor="#9fc85e" stopOpacity="0" />
          </radialGradient>
          <linearGradient id={`${id}-glass`} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#354233" />
            <stop offset=".5" stopColor="#222d23" />
            <stop offset="1" stopColor="#18201b" />
          </linearGradient>
          <linearGradient id={`${id}-edge`} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#c3f377" stopOpacity=".9" />
            <stop offset=".55" stopColor="#6c8659" stopOpacity=".4" />
            <stop offset="1" stopColor="#a3b995" stopOpacity=".7" />
          </linearGradient>
          <pattern
            id={`${id}-grid`}
            width="36"
            height="36"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M36 0H0V36"
              fill="none"
              stroke="#a2b59a"
              strokeOpacity=".06"
            />
          </pattern>
          <filter
            id={`${id}-shadow`}
            x="-40%"
            y="-40%"
            width="180%"
            height="200%"
          >
            <feDropShadow
              dx="0"
              dy="18"
              stdDeviation="18"
              floodColor="#000"
              floodOpacity=".35"
            />
          </filter>
        </defs>

        <ellipse cx="310" cy="265" rx="290" ry="245" fill={ref("glow")} />
        <rect x="24" y="30" width="552" height="455" fill={ref("grid")} />
        <g fill="none" stroke="#78936a" strokeOpacity=".16">
          <path d="M58 310 304 453 566 338M58 218 304 361 566 246" />
          <path d="m336 44 0 423" strokeDasharray="3 8" />
        </g>
        <ellipse cx="310" cy="447" rx="172" ry="33" fill="#000" opacity=".18" />

        {/* Data layer. Every mark is decorative, with no simulated results. */}
        <g filter={ref("shadow")}>
          <path
            d="m96 352 200 112 240-104v12L296 476 96 364Z"
            fill="#131b16"
            stroke="#40533b"
          />
          <g transform="matrix(.857 -.371 .714 .4 96 352)">
            <rect
              width="280"
              height="280"
              rx="12"
              fill="#1b251e"
              stroke="#5b7350"
              strokeWidth="1.5"
            />
            <rect
              x="24"
              y="24"
              width="232"
              height="232"
              rx="7"
              fill="none"
              stroke="#344b37"
            />
            {[0, 1, 2, 3].map((row) => (
              <g key={row} transform={`translate(40 ${48 + row * 49})`}>
                <rect
                  width="25"
                  height="25"
                  rx="4"
                  fill="#81976a"
                  opacity={row === 3 ? ".75" : ".25"}
                />
                <path
                  d="M43 5h128M43 19h92"
                  stroke="#566e4d"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <circle cx="188" cy="12" r="4" fill="#b9dc88" />
              </g>
            ))}
          </g>
        </g>

        {/* Logic layer with a central processor and branching connections. */}
        <g filter={ref("shadow")}>
          <path
            d="m96 266 200 112 240-104v12L296 390 96 278Z"
            fill="#17221a"
            stroke="#4a6340"
          />
          <g transform="matrix(.857 -.371 .714 .4 96 266)">
            <rect
              width="280"
              height="280"
              rx="12"
              fill="#233226"
              stroke="#7b9e62"
              strokeWidth="1.5"
            />
            <g fill="none" stroke="#688c53" strokeWidth="2">
              <path d="M110 110H59V49M140 102V39M170 110h52V59M178 140h61M170 170h52v52M140 178v62M110 170H59v52M102 140H39" />
              <path
                d="M90 79H42M201 79h37M90 201H42M201 201h37"
                strokeOpacity=".4"
              />
            </g>
            <rect
              x="96"
              y="96"
              width="88"
              height="88"
              rx="12"
              fill="#17251b"
              stroke="#b4dd7d"
              strokeWidth="2"
            />
            <rect
              x="110"
              y="110"
              width="60"
              height="60"
              rx="7"
              fill="#344b2e"
              stroke="#789c5c"
            />
            <path
              d="m121 140 13-14 12 27 13-14"
              fill="none"
              stroke="#d2f6a3"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {[
              [59, 49],
              [140, 39],
              [222, 59],
              [239, 140],
              [222, 222],
              [140, 240],
              [59, 222],
              [39, 140],
            ].map(([cx, cy]) => (
              <circle
                key={`${cx}-${cy}`}
                cx={cx}
                cy={cy}
                r="5"
                fill="#a6ce75"
              />
            ))}
          </g>
        </g>

        {/* Interface layer: abstract browser geometry, not an app screenshot. */}
        <g filter={ref("shadow")}>
          <path
            d="m96 180 200 112 240-104v12L296 304 96 192Z"
            fill="#273427"
            stroke="#698450"
          />
          <g transform="matrix(.857 -.371 .714 .4 96 180)">
            <rect
              width="280"
              height="280"
              rx="12"
              fill={ref("glass")}
              stroke={ref("edge")}
              strokeWidth="2"
            />
            <path d="M0 43h280" stroke="#7b9466" strokeOpacity=".5" />
            <g fill="#a7bb90">
              <circle cx="23" cy="22" r="4" />
              <circle cx="38" cy="22" r="4" opacity=".65" />
              <circle cx="53" cy="22" r="4" opacity=".3" />
            </g>
            <rect
              x="197"
              y="18"
              width="58"
              height="7"
              rx="3.5"
              fill="#617455"
            />
            <rect x="24" y="64" width="45" height="192" rx="5" fill="#16221b" />
            <rect x="37" y="80" width="19" height="19" rx="4" fill="#c3f377" />
            <path
              d="M39 120h15m-15 20h15m-15 20h15"
              stroke="#718767"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <rect x="89" y="69" width="113" height="12" rx="4" fill="#d0dcc3" />
            <rect x="89" y="92" width="153" height="6" rx="3" fill="#718267" />
            <rect
              x="89"
              y="117"
              width="164"
              height="78"
              rx="6"
              fill="#18251b"
              stroke="#567146"
            />
            <path d="M106 178v-44m0 44h128" fill="none" stroke="#506346" />
            <path
              d="m117 165 20-16 24 7 25-23 34 8"
              fill="none"
              stroke="#bce98a"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="220" cy="141" r="4" fill="#d4f6a9" />
            <rect x="89" y="213" width="75" height="43" rx="5" fill="#3d5130" />
            <rect
              x="178"
              y="213"
              width="75"
              height="43"
              rx="5"
              fill="#2b3b29"
              stroke="#4c6340"
            />
            <path
              d="M103 229h29m-29 12h43m45-12h29m-29 12h43"
              stroke="#90a77b"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </g>
        </g>

        <g className="architecture-labels" fill="#9cae92">
          <path
            d="M60 95h64l45 41"
            fill="none"
            stroke="#718864"
            strokeOpacity=".6"
          />
          <text x="27" y="80">
            01 / INTERFACE
          </text>
          <path
            d="M482 291h63v31"
            fill="none"
            stroke="#718864"
            strokeOpacity=".6"
          />
          <text x="463" y="343">
            02 / LOGIC
          </text>
          <path
            d="M68 418h64l30-32"
            fill="none"
            stroke="#718864"
            strokeOpacity=".6"
          />
          <text x="27" y="444">
            03 / DATA
          </text>
          <circle cx="169" cy="136" r="3" fill="#c3f377" />
          <circle cx="482" cy="291" r="3" fill="#c3f377" />
          <circle cx="162" cy="386" r="3" fill="#c3f377" />
        </g>
      </svg>
      <figcaption className="architecture-caption">
        <span>
          From interface
          <br />
          <strong>to intelligence.</strong>
        </span>
        <span className="architecture-disciplines">
          WEB DEVELOPMENT
          <br />
          DATA & MACHINE LEARNING
        </span>
      </figcaption>
    </figure>
  );
}
