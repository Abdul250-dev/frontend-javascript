// Define brand types for nominal typing
type MajorCredits = {
  credits: number;
  __brand: "MajorCredits";
};

type MinorCredits = {
  credits: number;
  __brand: "MinorCredits";
};

// Function to sum MajorCredits
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "MajorCredits",
  };
}

// Function to sum MinorCredits
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "MinorCredits",
  };
}

const math: MajorCredits = { credits: 3, __brand: "MajorCredits" };
const physics: MajorCredits = { credits: 4, __brand: "MajorCredits" };

const history: MinorCredits = { credits: 2, __brand: "MinorCredits" };
const geography: MinorCredits = { credits: 1, __brand: "MinorCredits" };

console.log(sumMajorCredits(math, physics)); // { credits: 7, __brand: 'MajorCredits' }
console.log(sumMinorCredits(history, geography)); // { credits: 3, __brand: 'MinorCredits' }
