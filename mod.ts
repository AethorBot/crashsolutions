enum SolutionsTypes {
  solution,
  possible,
}

// Solutions epic
interface Solution {
  //Solution
  s: string;
  // The regex to be tested
  r: RegExp[];
  // If its a answer or just a problem fix
  t: SolutionsTypes;
}
const solutions: Solution[] = [
  {
    s: "Remove xxx",
    r: [/cool|tricked/, /this/],
    t: SolutionsTypes.possible,
  },
];
