// installing dependencies
import React from "react";
import { createRoot } from "react-dom/client";

// 2. Create a React element

const element = React.createElement("p", { id: "hello" }, "Hello World !");

console.log(element);

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(element);
