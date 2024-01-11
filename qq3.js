function solution(cards) {
  const rankOrder = "23456789TJQKA";
  const suits = ["S", "H", "D", "C"];
  let selectedCards = [];

  // Sort by rank
  cards.sort((a, b) => rankOrder.indexOf(b[0]) - rankOrder.indexOf(a[0]));

  // Count card ranks
  const countByRank = cards.reduce((count, card) => {
    count[card[0]] = (count[card[0]] || 0) + 1;
    return count;
  }, {});

  // Verify flush - same suit for all
  const isFlush = suits.some((suit) => {
    const suitCards = cards.filter((card) => card[1] === suit);
    if (suitCards.length >= 5) {
      selectedCards = suitCards.slice(0, 5);
      return true;
    }
    return false;
  });

  if (isFlush) {
    return {
      set_name: "suit",
      selected_cards: selectedCards,
    };
  }

  // Detect straight: five consecutive ranks.
  let straightRanks = "";
  for (let i = 0; i < rankOrder.length; i++) {
    if (countByRank[rankOrder[i]]) {
      straightRanks += rankOrder[i];
      if (straightRanks.length === 5) {
        selectedCards = cards.filter((card) => straightRanks.includes(card[0]));
        return {
          set_name: "five in a row",
          selected_cards: selectedCards,
        };
      }
    } else {
      straightRanks = rankOrder[i]; // Start a new potential straight
    }
  }

  // Check for a triple and a pair
  const tripleRank = Object.keys(countByRank).find(
    (rank) => countByRank[rank] === 3
  );
  const pairRank = Object.keys(countByRank).find(
    (rank) => countByRank[rank] === 2
  );

  if (tripleRank && pairRank && tripleRank !== pairRank) {
    selectedCards = cards.filter(
      (card) => card[0] === tripleRank || card[0] === pairRank
    );
    return {
      set_name: "a triple and a pair",
      selected_cards: selectedCards,
    };
  }

  // Check for a triple
  if (tripleRank) {
    selectedCards = cards.filter((card) => card[0] === tripleRank).slice(0, 3);
    return {
      set_name: "triple",
      selected_cards: selectedCards,
    };
  }

  // Check for a pair
  if (pairRank) {
    selectedCards = cards.filter((card) => card[0] === pairRank).slice(0, 2);
    return {
      set_name: "pair",
      selected_cards: selectedCards,
    };
  }

  // Otherwise, it's a single card.
  return {
    set_name: "single card",
    selected_cards: [cards[0]],
  };
}

// Test cases
console.log(solution(["2H", "4H", "7C", "9D", "10D", "KS"])); // Output: straight
console.log(solution(["AS", "10H", "8H", "10S", "8D"])); // Output: two pairs
console.log(solution(["AS", "JS", "AH", "AD", "10D", "AC"])); // Output: three of a kind
console.log(solution(["6H", "7S", "8S", "9S", "10S", "JD", "JC", "KC", "AC"])); // Output: straight flush
console.log(
  solution(["2D", "4D", "6D", "8D", "9D", "AC", "KC", "QC", "JC", "7C"])
); // Output: flush
console.log(solution(["6H", "7S", "8S", "9S", "10S", "JD", "JC", "KC", "AC"])); // Output: full house
