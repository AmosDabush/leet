function solution(moves) {
  const currentPoints = { x: 0, y: 0 };
  const moveCounter = { "^": 0, v: 0, "<": 0, ">": 0 };

  for (const move of moves) {
    switch (move) {
      case "^":
        currentPoints.y++; //up
        break;
      case "v":
        currentPoints.y--; // down
        break;
      case "<": // left
        currentPoints.x--;
        break;
      case ">": //right
        currentPoints.x++;
        break;
    }
    moveCounter[move]++;
  }

  return (
    currentPoints.x === 0 &&
    currentPoints.y === 0 &&
    moveCounter["^"] === moveCounter["v"] &&
    moveCounter["<"] === moveCounter[">"]
  );
}

// Test cases
console.log(solution("^^^<<<<vvv>>>>")); // true
console.log(solution("<vvv>>^^^<")); // true
console.log(solution("<^^^>v")); // false
console.log(solution("")); // true (no moves, starting position)
console.log(solution("^")); // false (one move, not returning to the starting position)
console.log(solution("><")); // true (two moves cancel each other out, return to the starting position)
console.log(solution("^^vv<<>>")); // true (various moves, return to the starting position)
console.log(solution("^^^<<<vvv>>>>>")); // false (unequal count of left and right moves)
console.log(solution("^^^<<<vvv>>>")); // true (unequal count of up and down moves)
console.log(solution("<<<<<vvvv>>>>>")); // false (starting position is not (0,0))
console.log(solution("><^v")); // true (moves cancel each other out, but not returning to the starting position)
