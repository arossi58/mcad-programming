const faveGames = [
    {
      title: "Uno",
      type: "card game",
      numberOfPlayers: "2-10",
      rating: 1,
      shortDescription: "A classic card game where players match colors and numbers to win."
    },
    {
      title: "Monopoly",
      type: "board game",
      numberOfPlayers: "2-8",
      rating: 2,
      shortDescription: "A property trading game where players buy, sell, and build to dominate the board."
    },
    {
      title: "Phase Ten",
      type: "card game",
      numberOfPlayers: "2-6",
      rating: 3,
      shortDescription: "A rummy-style game where players complete phases to progress and win."
    },
    {
      title: "Quest",
      type: "strategy game",
      numberOfPlayers: "4-10",
      rating: 4,
      shortDescription: "A social deduction game where players take on roles to uncover hidden identities."
    },
    {
        title: "Life",
        type: "board game",
        numberOfPlayers: "2-6",
        rating: 5,
        shortDescription: "A family-friendly board game where players navigate through life's milestones to win."
      }
  ];
  
let userGame = prompt("Pick a numer 1-5 to learn about my top 4 favorite games! 🎲🎴🃏");

alert("You selected " + faveGames[userGame-1].title + " which is a " + faveGames[userGame-1].type + " with " + faveGames[userGame-1].numberOfPlayers + " players. It can be described as a: " + faveGames[userGame-1].shortDescription);