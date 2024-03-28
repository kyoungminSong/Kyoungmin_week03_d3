import * as d3 from "d3";

const svg = d3
  .select("body")
  .append("svg")
  .attr("width", 500)
  .attr("height", 500)
  .attr("opacity", 0.7);

const data = [
  {
    fruit: "사과",
    quantity: 20,
    details: {
      color: "red",
      price: 1.2,
    },
  },
  {
    fruit: "바나나",
    quantity: 40,
    details: {
      color: "yellow",
      price: 0.8,
    },
  },
  {
    fruit: "체리",
    quantity: 60,
    details: {
      color: "red",
      price: 2.5,
    },
  },
  {
    fruit: "딸기",
    quantity: 80,
    details: {
      color: "red",
      price: 1.8,
    },
  },
  {
    fruit: "포도",
    quantity: 100,
    details: {
      color: "purple",
      price: 2.0,
    },
  },
];

const rect = svg
  .selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", (d) => d.details.price * 150)
  .attr("y", 30)
  .attr("width", 25)
  .attr("height", (d) => d.quantity * 4)
  .attr("fill", (d) => d.details.color)
  .attr("stroke", "white")
  .attr("stroke-width", 1);
