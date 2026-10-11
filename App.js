import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const mergeSortCode = [
  "function mergeSort(arr) {",
  "  if (arr.length <= 1) return arr;",
  "",
  "  const mid = Math.floor(arr.length / 2);",
  "  const left = mergeSort(arr.slice(0, mid));",
  "  const right = mergeSort(arr.slice(mid));",
  "",
  "  return merge(left, right);",
  "}",
  "",
  "function merge(left, right) {",
  "  const result = [];",
  "  let i = 0, j = 0;",
  "",
  "  while (i < left.length && j < right.length) {",
  "    if (left[i] <= right[j]) {",
  "      result.push(left[i++]);",
  "    } else {",
  "      result.push(right[j++]);",
  "    }",
  "  }",
  "",
  "  return result.concat(left.slice(i), right.slice(j));",
  "}"
];

const bubbleSortCode = [
  "function bubbleSort(arr) {",
  "  const n = arr.length;",
  "  for (let i = 0; i < n - 1; i++) {",
  "    for (let j = 0; j < n - i - 1; j++) {",
  "      if (arr[j] > arr[j + 1]) {",
  "        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];",
  "      }",
  "    }",
  "  }",
  "  return arr;",
  "}"
];

const selectionSortCode = [
  "function selectionSort(arr) {",
  "  for (let i = 0; i < arr.length - 1; i++) {",
  "    let min = i;",
  "    for (let j = i + 1; j < arr.length; j++) {",
  "      if (arr[j] < arr[min]) min = j;",
  "    }",
  "    [arr[i], arr[min]] = [arr[min], arr[i]];",
  "  }",
  "  return arr;",
  "}"
];

const insertionSortCode = [
  "function insertionSort(arr) {",
  "  for (let i = 1; i < arr.length; i++) {",
  "    const key = arr[i];",
  "    let j = i - 1;",
  "    while (j >= 0 && arr[j] > key) {",
  "      arr[j + 1] = arr[j];",
  "      j--;",
  "    }",
  "    arr[j + 1] = key;",
  "  }",
  "  return arr;",
  "}"
];

const algorithms = {
  "Merge Sort": {
    code: mergeSortCode,
    time: "O(n log n)",
    space: "O(n)",
    description:
      "Divide the array into smaller halves, sort each half, and merge the sorted halves."
  },
  "Bubble Sort": {
    code: bubbleSortCode,
    time: "O(n²)",
    space: "O(1)",
    description:
      "Compare adjacent elements and swap them when they are in the wrong order."
  },
  "Selection Sort": {
    code: selectionSortCode,
    time: "O(n²)",
    space: "O(1)",
    description:
      "Find the smallest remaining element and place it in the next sorted position."
  },
  "Insertion Sort": {
    code: insertionSortCode,
    time: "O(n²)",
    space: "O(1)",
    description:
      "Take each element and insert it into its correct position in the sorted portion."
  }
};

const randomArray = (size) =>
  Array.from({ length: size }, () =>
    Math.floor(Math.random() * 90) + 10
  );

function createSteps(input, algorithm) {
  const arr = [...input];
  const steps = [];
  let comparisons = 0;
  let swaps = 0;

  const save = (active = [], sorted = [], line = 0, message = "") => {
    steps.push({
      array: [...arr],
      active,
      sorted,
      line,
      comparisons,
      swaps,
      message
    });
  };

  save([], [], 0, "Ready to start sorting.");

  if (algorithm === "Merge Sort") {
    function mergeSort(start, end) {
      if (end - start <= 1) return;

      const mid = Math.floor((start + end) / 2);

      save(
        Array.from({ length: end - start }, (_, i) => start + i),
        [],
        3,
        `Divide the array into two parts: ${start} to ${mid - 1} and ${mid} to ${end - 1}.`
      );

      mergeSort(start, mid);
      mergeSort(mid, end);

      const left = arr.slice(start, mid);
      const right = arr.slice(mid, end);
      let i = 0;
      let j = 0;
      let k = start;

      while (i < left.length && j < right.length) {
        comparisons++;

        save(
          [start + i, mid + j],
          [],
          14,
          `Compare ${left[i]} and ${right[j]}.`
        );

        if (left[i] <= right[j]) {
          arr[k] = left[i++];
        } else {
          arr[k] = right[j++];
          swaps++;
        }

        save(
          Array.from({ length: k - start + 1 }, (_, x) => start + x),
          [],
          16,
          `Place ${arr[k]} into the merged section.`
        );

        k++;
      }

      while (i < left.length) {
        arr[k] = left[i++];
        save([k], [], 23, `Copy remaining value ${arr[k]}.`);
        k++;
      }

      while (j < right.length) {
        arr[k] = right[j++];
        save([k], [], 23, `Copy remaining value ${arr[k]}.`);
        k++;
      }

      save(
        Array.from({ length: end - start }, (_, x) => start + x),
        [],
        7,
        `Merged section: ${arr.slice(start, end).join(", ")}.`
      );
    }

    mergeSort(0, arr.length);

    save(
      [],
      arr.map((_, i) => i),
      25,
      "Merge Sort completed successfully!"
    );
  } else if (algorithm === "Bubble Sort") {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        comparisons++;

        save(
          [j, j + 1],
          [],
          3,
          `Compare ${arr[j]} and ${arr[j + 1]}.`
        );

        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swaps++;
          save([j, j + 1], [], 5, "Swap the two adjacent values.");
        }
      }
    }

    save([], arr.map((_, i) => i), 9, "Bubble Sort completed!");
  } else if (algorithm === "Selection Sort") {
    for (let i = 0; i < arr.length - 1; i++) {
      let min = i;

      for (let j = i + 1; j < arr.length; j++) {
        comparisons++;
        save([min, j], [], 4, `Compare ${arr[min]} and ${arr[j]}.`);

        if (arr[j] < arr[min]) min = j;
      }

      if (min !== i) {
        [arr[i], arr[min]] = [arr[min], arr[i]];
        swaps++;
      }

      save(
        [i, min],
        Array.from({ length: i + 1 }, (_, x) => x),
        6,
        `Place ${arr[i]} into sorted position ${i}.`
      );
    }

    save([], arr.map((_, i) => i), 8, "Selection Sort completed!");
  } else if (algorithm === "Insertion Sort") {
    for (let i = 1; i < arr.length; i++) {
      const key = arr[i];
      let j = i - 1;

      while (j >= 0) {
        comparisons++;
        save([j, j + 1], [], 4, `Compare ${arr[j]} with ${key}.`);

        if (arr[j] <= key) break;

        arr[j + 1] = arr[j];
        swaps++;
        j--;
        save([j + 1], [], 5, "Move the larger value one position right.");
      }

      arr[j + 1] = key;
      save(
        [j + 1],
        Array.from({ length: i + 1 }, (_, x) => x),
        8,
        `Insert ${key} into its correct position.`
      );
    }

    save([], arr.map((_, i) => i), 10, "Insertion Sort completed!");
  }

  return steps;
}

export default function App() {
  const [algorithm, setAlgorithm] = useState("Merge Sort");
  const [array, setArray] = useState(() => randomArray(24));
  const [size, setSize] = useState(24);
  const [speed, setSpeed] = useState(300);
  const [steps, setSteps] = useState([]);
  const [stepIndex, setStepIndex] = useState(0);
  const [running, setRunning] = useState(false);
  const [mouse, setMouse] = useState({ x: -500, y: -500 });
  const timer = useRef(null);

  const current = steps[stepIndex];
  const info = algorithms[algorithm];

 const [particles, setParticles] = useState([]);


function handleMouseMove(event) {
  const x = event.clientX;
  const y = event.clientY;

  setMouse({ x, y });

  setParticles((previous) => [
    ...previous.slice(-35),
    {
      id: `${Date.now()}-${Math.random()}`,
      x,
      y,
      size: Math.random() * 8 + 3
    }
  ]);
}

useEffect(() => {
  const handleMove = (event) => handleMouseMove(event);

  window.addEventListener("mousemove", handleMove);
  return () => window.removeEventListener("mousemove", handleMove);
}, []);
  useEffect(() => {
    if (!running) return;

    timer.current = setTimeout(() => {
      if (stepIndex >= steps.length - 1) {
        setRunning(false);
        return;
      }
      setStepIndex((previous) => previous + 1);
    }, speed);

    return () => clearTimeout(timer.current);
  }, [running, stepIndex, steps, speed]);

  useEffect(() => {
    return () => clearTimeout(timer.current);
  }, []);

  function reset() {
    setRunning(false);
    clearTimeout(timer.current);
    setSteps([]);
    setStepIndex(0);
  }

  function generateArray(nextSize = size) {
    reset();
    setArray(randomArray(nextSize));
  }

  function chooseAlgorithm(value) {
    reset();
    setAlgorithm(value);
  }

  function startSort() {
    if (running) {
      setRunning(false);
      return;
    }

    let nextSteps = steps;

    if (steps.length === 0 || stepIndex >= steps.length - 1) {
      nextSteps = createSteps(array, algorithm);
      setSteps(nextSteps);
      setStepIndex(0);
    }

    setRunning(true);
  }

  function stepForward() {
    if (steps.length === 0) {
      const nextSteps = createSteps(array, algorithm);
      setSteps(nextSteps);
      setStepIndex(Math.min(1, nextSteps.length - 1));
    } else {
      setRunning(false);
      setStepIndex((previous) =>
        Math.min(previous + 1, steps.length - 1)
      );
    }
  }


 
  const displayArray = current ? current.array : array;
  const maxValue = Math.max(...displayArray, 1);
  const progress =
    steps.length > 1
      ? Math.round((stepIndex / (steps.length - 1)) * 100)
      : 0;

  return (
    <div className="app">
      {/* Interactive background effects */}
<div
  className="interactive-glow"
  style={{ left: mouse.x, top: mouse.y }}
/>

<div className="particle-layer">
  {particles.map((particle) => (
    <span
      key={particle.id}
      className="mouse-particle"
      style={{
        left: particle.x,
        top: particle.y,
        width: particle.size,
        height: particle.size
      }}
    />
  ))}
</div>
      <div
        className="interactive-glow"
        style={{ left: mouse.x, top: mouse.y }}
      />

      <header className="header">
        <div className="brand-icon">✳</div>
        <div>
          <h1>
            SORTING <span>VISUALIZER</span>
          </h1>
          <p>Explore algorithms one step at a time.</p>
        </div>
        <div className="live-tag">● INTERACTIVE LAB</div>
      </header>

      <section className="panel toolbar">
        <label>
          Algorithm
          <select
            value={algorithm}
            onChange={(event) => chooseAlgorithm(event.target.value)}
          >
            {Object.keys(algorithms).map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </label>

        <label>
          Array size: <strong>{size}</strong>
          <input
            type="range"
            min="8"
            max="45"
            value={size}
            onChange={(event) => {
              const nextSize = Number(event.target.value);
              setSize(nextSize);
              generateArray(nextSize);
            }}
          />
        </label>

        <label>
          Speed: <strong>{speed} ms</strong>
          <input
            type="range"
            min="30"
            max="800"
            step="10"
            value={speed}
            onChange={(event) => setSpeed(Number(event.target.value))}
          />
        </label>

        <div className="buttons">
          <button className="primary" onClick={startSort}>
            {running ? "⏸ Pause" : "▶ Start"}
          </button>
          <button onClick={stepForward} disabled={running}>
            Step →
          </button>
          <button onClick={reset}>↺ Reset</button>
          <button className="green" onClick={() => generateArray()}>
            ✦ New Array
          </button>
        </div>
      </section>

      <div className="workspace">
        <main className="main-column">
          <section className="panel chart-panel">
            <div className="legend">
              <span><i className="blue" /> Unsorted</span>
              <span><i className="yellow" /> Comparing</span>
              <span><i className="red" /> Active</span>
              <span><i className="green-dot" /> Sorted</span>
            </div>

            <div className="bars">
              {displayArray.map((value, index) => {
                const isActive = current?.active.includes(index);
                const isSorted = current?.sorted.includes(index);

                let color = "bar-blue";
                if (isActive) color = "bar-yellow";
                if (isSorted) color = "bar-green";
                if (
                  isActive &&
                  algorithm !== "Merge Sort" &&
                  current?.message.startsWith("Swap")
                ) {
                  color = "bar-red";
                }

                return (
                  <div className="bar-wrap" key={index}>
                    {size <= 28 && (
                      <span className="bar-value">{value}</span>
                    )}
                    <div
                      className={`bar ${color} ${isActive ? "active" : ""}`}
                      style={{
                        height: `${(value / maxValue) * 100}%`
                      }}
                      title={`Index ${index}: ${value}`}
                    />
                    {size <= 30 && (
                      <span className="bar-index">{index}</span>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="chart-footer">
              <span>Array size: {size}</span>
              <span>{progress}% complete</span>
            </div>

            <div className="progress-track">
              <div style={{ width: `${progress}%` }} />
            </div>
          </section>

          <div className="stats-grid">
            <section className="panel stat">
              <span className="eyebrow">COMPARISONS</span>
              <div className="progress-number">
                {current?.comparisons ?? 0}
              </div>
              <p>Element comparisons performed</p>
            </section>

            <section className="panel stat">
              <span className="eyebrow">MOVES / SWAPS</span>
              <div className="progress-number">
                {current?.swaps ?? 0}
              </div>
              <p>Values moved during sorting</p>
            </section>
          </div>

          <section className="panel array-panel">
            <span className="eyebrow">CURRENT ARRAY</span>
            <h3>Element values</h3>
            <div className="array-values">
              {displayArray.map((value, index) => (
                <span
                  key={index}
                  className={
                    current?.sorted.includes(index) ? "value-sorted" : ""
                  }
                >
                  {value}
                </span>
              ))}
            </div>
            <p className="code-description">
              {current?.message || "Choose Start to begin sorting."}
            </p>
          </section>
        </main>

        <aside className="panel info-panel">
          <span className="eyebrow">ALGORITHM DETAILS</span>
          <h2>{algorithm}</h2>
          <p>{info.description}</p>
          <hr />
          <div className="complexity">
            Time complexity
            <strong>{info.time}</strong>
          </div>
          <div className="complexity">
            Auxiliary space
            <strong>{info.space}</strong>
          </div>
          <hr />
          <h3>How it works</h3>
          <ol>
            {algorithm === "Merge Sort" ? (
              <>
                <li>Divide the array into halves.</li>
                <li>Sort each half recursively.</li>
                <li>Compare and merge the halves.</li>
              </>
            ) : algorithm === "Bubble Sort" ? (
              <>
                <li>Compare neighboring elements.</li>
                <li>Swap elements in the wrong order.</li>
                <li>Repeat until sorted.</li>
              </>
            ) : algorithm === "Selection Sort" ? (
              <>
                <li>Find the minimum remaining value.</li>
                <li>Swap it into the next position.</li>
                <li>Continue through the array.</li>
              </>
            ) : (
              <>
                <li>Select the next element.</li>
                <li>Shift larger elements to the right.</li>
                <li>Insert the selected element.</li>
              </>
            )}
          </ol>
        </aside>
      </div>

      <section className="code-window">
        <div className="code-header">
          <h2>⌘ {algorithm} — Source Code</h2>
          <span className="code-language">JavaScript</span>
        </div>
        <p className="code-description">
          Follow the implementation while the visualizer runs.
          The highlighted line indicates the current algorithm phase.
        </p>
        <div className="code-content">
          <pre>
            <code>
              {info.code.map((line, index) => {
                const activeLine = current?.line === index;
                return (
                  <span
                    className={`code-line ${
                      activeLine ? "highlight-line" : ""
                    }`}
                    key={index}
                  >
                    <span style={{ color: "#7187a4", display: "inline-block", width: 32 }}>
                      {index + 1}
                    </span>
                    {line || " "}
                  </span>
                );
              })}
            </code>
          </pre>
        </div>
        <div className="code-footer">
          Step {steps.length ? stepIndex + 1 : 0} of {steps.length} ·
          {running ? " Sorting in progress" : " Ready"}
        </div>

 
      </section>

      <footer>
        Sorting Visualizer · Learn algorithms through interactive animation
      </footer>
    </div>
  );
}
