//Blocks animation section
const wrapper = document.getElementById("blocks");
let columns = Math.floor(document.body.clientWidth / 50);
let rows = Math.floor(document.body.clientHeight / 50);

const colors = [
  "rgb(220, 60, 50)",
  "rgb(250, 220, 50)",
  "rgb(240, 80, 30)",
  "rgb(75, 175, 80)",
  "rgb(30, 150, 240)",
  "rgb(160, 30, 175)",
];

let count = -1;

const handleOnClick = (index) => {
  count = count + 1;
  anime({
    targets: ".block",
    background: colors[count % (colors.length - 1)],
    delay: anime.stagger(75, {
      grid: [columns, rows],
      from: index,
    }),
  });
};

const createBlock = (index) => {
  const block = document.createElement("div");

  block.classList.add("block");

  block.onclick = (event) => handleOnClick(index);
  return block;
};

const createBlocks = (quantity) => {
  Array.from(Array(quantity)).map((block, index) => {
    wrapper.appendChild(createBlock(index));
  });
};

//Window resize
const createGrid = () => {
  wrapper.innerHTML = "";

  columns = Math.floor(document.body.clientWidth / 50);
  rows = Math.floor(document.body.clientHeight / 50);

  wrapper.style.setProperty("--columns", columns);
  wrapper.style.setProperty("--row", rows);

  createBlocks(columns * rows);
};
createGrid();
window.onresize = () => createGrid();

//Cursor animation section
const cursor = document.getElementById("cursor");

//Cursor tracking with mouse
window.onmousemove = (event) => {
  const x = event.clientX - cursor.offsetWidth / 2;
  const y = event.clientY - cursor.offsetHeight / 2;
  const cursorMoveAnimation = {
    targets: "#cursor",
    translateX: `${x}px`,
    translateY: `${y}px`,
  };
  anime(cursorMoveAnimation);
};

const cursorIdleAnimation = {
  targets: "#cursor",
  //Testade scale: 0.9-1.1, funkade inte som jag trodde att den skulle pulsa
  keyframes: [
    { height: "57px", width: "57px" },
    { height: "58px", width: "58px" },
    { height: "59px", width: "59px" },
    { height: "60px", width: "60px" },
    { height: "61px", width: "61px" },
    { height: "62px", width: "62px" },
    { height: "63px", width: "63px" },
    { height: "64px", width: "64px" },
    { height: "65px", width: "65px" },
    { height: "66px", width: "66px" },
    { height: "67px", width: "67px" },
    { height: "68px", width: "68px" },
    { height: "67px", width: "67px" },
    { height: "66px", width: "66px" },
    { height: "65px", width: "65px" },
    { height: "64px", width: "64px" },
    { height: "63px", width: "63px" },
    { height: "62px", width: "62px" },
    { height: "61px", width: "61px" },
    { height: "60px", width: "60px" },
    { height: "59px", width: "59px" },
    { height: "58px", width: "58px" },
    { height: "57px", width: "57px" },
  ],
  duration: 650,
  loop: true,
};
anime(cursorIdleAnimation);

