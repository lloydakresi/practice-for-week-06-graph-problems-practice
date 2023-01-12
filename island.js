function getNeighbors(row, col, graph) {
let neighbors = [];
  // Check top
  if (row > 0 && (graph[row - 1][col] === 1)){
    let top = [row - 1, col];
    neighbors.push(top);
  }


  // Check bottom
  if(row < graph.length - 1 && (graph[row + 1][col] === 1)){
    let bottom = [row + 1, col];
    neighbors.push(bottom);
  }

  // Check left
  if(col > 0 && graph[row][col - 1] === 1){
    let left = [row, col - 1];
    neighbors.push(left);
  }

  // Check right
  if(col < graph[0].length - 1 && graph[row][col + 1] === 1){
    let right = [row , col + 1];
    neighbors.push(right);
  }

  // Return neighbors
  return neighbors;

  // Your code here
}



function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes
  let visited = new Set();
  let xy = [row, col];
  let stack = [xy];
  visited.add(String(xy));
  let size = 0;

  // Create a stack, put the starting node in the stack

  // Put the stringified starting node in visited

  // Initialize size to 0

  // While the stack is not empty,

    // Pop the first node

    // DO THE THING (increment size by 1)

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!

  // return size

  // Your code here

  while(stack.length > 0){
    let current = stack.pop();
    size++;
    let neighbors = getNeighbors(current[0], current[1], graph);

    for(let i = 0; i < neighbors.length; i++){

      let neighbor = neighbors[i];
      if(!visited.has(String(neighbor))){
      stack.push(neighbor);
      visited.add(String(neighbor));
      };
    }


  }
  return size;
}

let matrix = [
  [1,1,1,0,0],
  [0,1,1,0,1],
  [0,1,1,0,1],
];

console.log(islandSize(1, 1, matrix))

module.exports = [getNeighbors, islandSize];
