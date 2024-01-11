function solution(A) {
  const set = new Set(A);

  for (let i = 1; i <= A.length + 1; i++) {
    if (!set.has(i)) {
      return i;
    }
  }
}
