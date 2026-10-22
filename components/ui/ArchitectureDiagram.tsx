import React from "react";

export interface DiagramNode {
  id: string;
  label: string;
  sublabel?: string;
  badge?: string;
  x: number;
  y: number;
  width: number;
  height: number;
  color?: string;
  textColor?: string;
}

export interface DiagramEdge {
  from: string;
  to: string;
  label?: string;
  dashed?: boolean;
}

export interface ArchitectureDiagramProps {
  title?: string;
  subtitle?: string;
  nodes?: DiagramNode[];
  edges?: DiagramEdge[];
  isPlaceholder?: boolean;
  placeholderText?: string;
  viewBoxWidth?: number;
  viewBoxHeight?: number;
  className?: string;
}

export function ArchitectureDiagram({
  title = "System Architecture",
  subtitle,
  nodes = [],
  edges = [],
  isPlaceholder = false,
  placeholderText = "[DIAGRAM_PLACEHOLDER]",
  viewBoxWidth = 840,
  viewBoxHeight = 360,
  className = "",
}: ArchitectureDiagramProps) {
  if (isPlaceholder || nodes.length === 0) {
    return (
      <div className={`border-2 border-dashed border-ink/40 dark:border-cream/30 bg-cream/30 dark:bg-[#1A1A1A]/40 p-8 sm:p-12 text-center my-6 ${className}`}>
        <div className="inline-block px-3 py-1 bg-sunny text-ink border-2 border-ink shadow-hard-sm font-mono text-xs font-black uppercase tracking-wider mb-3">
          {placeholderText}
        </div>
        <p className="font-mono text-xs text-ink/70 dark:text-cream/70 max-w-md mx-auto leading-relaxed">
          Subsystem architecture graph pending structure specification. Inline SVG will render nodes, protocol edges, and hardware-software boundaries here.
        </p>
      </div>
    );
  }

  // Lookup map for fast node coordinates
  const nodeMap = new Map<string, DiagramNode>();
  nodes.forEach((n) => nodeMap.set(n.id, n));

  return (
    <div className={`border-2 border-ink dark:border-cream bg-white dark:bg-[#1C1C1C] shadow-hard dark:shadow-hard-dark p-4 sm:p-6 my-6 overflow-x-auto ${className}`}>
      {/* Diagram Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b-2 border-ink/15 dark:border-cream/15">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-tomato border border-ink" />
          <h4 className="font-display font-extrabold text-base text-ink dark:text-cream tracking-tight">
            {title}
          </h4>
        </div>
        {subtitle && (
          <span className="font-mono text-xs text-ink/70 dark:text-cream/70">
            {subtitle}
          </span>
        )}
      </div>

      {/* SVG Canvas */}
      <div className="min-w-[680px]">
        <svg
          viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
          className="w-full h-auto select-none"
          role="img"
          aria-label={title}
        >
          <defs>
            {/* Arrow marker for regular ink edges */}
            <marker
              id="ink-arrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#1A1A1A" />
            </marker>
            {/* Arrow marker for dark mode */}
            <marker
              id="ink-arrow-dark"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#FFF6E5" />
            </marker>
          </defs>

          {/* Render Edges */}
          {edges.map((edge, idx) => {
            const source = nodeMap.get(edge.from);
            const target = nodeMap.get(edge.to);
            if (!source || !target) return null;

            // Compute connection points: from right edge of source to left edge of target
            // or vertical connections if aligned vertically
            const isHorizontal = target.x > source.x;
            const startX = isHorizontal ? source.x + source.width : source.x + source.width / 2;
            const startY = isHorizontal ? source.y + source.height / 2 : source.y + source.height;
            const endX = isHorizontal ? target.x : target.x + target.width / 2;
            const endY = isHorizontal ? target.y + target.height / 2 : target.y;

            // Curve control points for organic hand-crafted look
            const midX = (startX + endX) / 2;
            const midY = (startY + endY) / 2;
            const pathD = `M ${startX} ${startY} C ${midX} ${startY}, ${midX} ${endY}, ${endX} ${endY}`;

            return (
              <g key={`edge-${idx}`}>
                {/* Edge line */}
                <path
                  d={pathD}
                  fill="none"
                  stroke="#1A1A1A"
                  strokeWidth="2"
                  strokeDasharray={edge.dashed ? "5 4" : undefined}
                  markerEnd="url(#ink-arrow)"
                  className="dark:stroke-cream"
                />

                {/* Edge Label Badge */}
                {edge.label && (
                  <g transform={`translate(${midX}, ${midY})`}>
                    <rect
                      x={-edge.label.length * 3.3 - 6}
                      y="-11"
                      width={edge.label.length * 6.6 + 12}
                      height="18"
                      rx="3"
                      fill="#FFF6E5"
                      stroke="#1A1A1A"
                      strokeWidth="1.5"
                      className="dark:fill-[#252525] dark:stroke-cream"
                    />
                    <text
                      x="0"
                      y="2"
                      textAnchor="middle"
                      fill="#1A1A1A"
                      className="dark:fill-cream font-mono text-[10px] font-bold"
                    >
                      {edge.label}
                    </text>
                  </g>
                )}
              </g>
            );
          })}

          {/* Render Nodes */}
          {nodes.map((node) => {
            const bgColor = node.color || "#FFF6E5";
            const textColor = node.textColor || "#1A1A1A";

            return (
              <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
                {/* Hard offset shadow */}
                <rect
                  x="4"
                  y="4"
                  width={node.width}
                  height={node.height}
                  rx="6"
                  ry="6"
                  fill="#1A1A1A"
                  className="dark:fill-black"
                />

                {/* Node Box */}
                <rect
                  x="0"
                  y="0"
                  width={node.width}
                  height={node.height}
                  rx="6"
                  ry="6"
                  fill={bgColor}
                  stroke="#1A1A1A"
                  strokeWidth="2"
                  className="dark:stroke-cream"
                />

                {/* Optional Badge */}
                {node.badge && (
                  <g transform={`translate(10, -8)`}>
                    <rect
                      x="0"
                      y="0"
                      width={node.badge.length * 6.5 + 10}
                      height="16"
                      rx="2"
                      fill="#FFD13B"
                      stroke="#1A1A1A"
                      strokeWidth="1.5"
                    />
                    <text
                      x={node.badge.length * 3.25 + 5}
                      y="11"
                      textAnchor="middle"
                      fill="#1A1A1A"
                      className="font-mono text-[9px] font-black uppercase tracking-wider"
                    >
                      {node.badge}
                    </text>
                  </g>
                )}

                {/* Node Label */}
                <text
                  x={node.width / 2}
                  y={node.sublabel ? node.height / 2 - 4 : node.height / 2 + 5}
                  textAnchor="middle"
                  fill={textColor}
                  className="font-display font-bold text-sm tracking-tight"
                >
                  {node.label}
                </text>

                {/* Node Sublabel */}
                {node.sublabel && (
                  <text
                    x={node.width / 2}
                    y={node.height / 2 + 13}
                    textAnchor="middle"
                    fill={textColor}
                    className="font-mono text-[10px] opacity-80"
                  >
                    {node.sublabel}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
