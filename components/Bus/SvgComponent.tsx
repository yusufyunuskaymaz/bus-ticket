import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    baseProfile="full"
    {...props}
  >
    <g
      style={{
        stroke: "#50a4f3",
        fill: "#c7e2fb",
      }}
    >
      <rect width={45} height={40} x={1} y={4} rx={10} ry={10} />
      <rect width={25} height={7} x={15} y={2} rx={5} ry={5} />
      <rect width={25} height={7} x={15} y={39} rx={5} ry={5} />
      <rect width={12} height={46} x={36} y={1} rx={6} ry={6} />
      {/* <text
        x={20}
        y={25}
        alignmentBaseline="middle"
        className="s-seat-n"
        style={{
          stroke: "none",
          fill: "#666",
          fontFamily: "&quot",
          fontSize: 21,
        }}
        textAnchor="middle"
      >
        {"\r\n                        17\r\n                    "}
      </text> */}
    </g>
  </svg>
)
export default SvgComponent
