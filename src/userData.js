const userData = [
  {
    "team": "Cameroon",
    "included": "true",
    "owner": "Jaybee",
    "played": 2,
    "win": 0,
    "draw": 1,
    "loss": 1,
    "red_cards": 0,
    "yellow_cards": 3,
    "goals_for": 3,
    "goals_against": 4,
    "total_points": 0
  },
  {
    "team": "Canada",
    "included": "eliminated",
    "owner": "Angeli",
    "played": 3,
    "win": 0,
    "draw": 0,
    "loss": 3,
    "red_cards": 0,
    "yellow_cards": 2,
    "goals_for": 2,
    "goals_against": 7,
    "total_points": -18
  },
  {
    "team": "Costa Rica",
    "included": "eliminated",
    "owner": "Ray",
    "played": 3,
    "win": 1,
    "draw": 0,
    "loss": 2,
    "red_cards": 0,
    "yellow_cards": 1,
    "goals_for": 3,
    "goals_against": 11,
    "total_points": -10
  },
  {
    "team": "Croatia",
    "included": "true",
    "owner": "Sean",
    "played": 3,
    "win": 1,
    "draw": 2,
    "loss": 0,
    "red_cards": 0,
    "yellow_cards": 2,
    "goals_for": 4,
    "goals_against": 1,
    "total_points": 24
  },
  {
    "team": "Ecuador",
    "included": 'eliminated',
    "owner": "Jaybee",
    "played": 3,
    "win": 1,
    "draw": 1,
    "loss": 1,
    "red_cards": 0,
    "yellow_cards": 3,
    "goals_for": 1,
    "goals_against": 2,
    "total_points": 14
  },
  {
    "team": "Ghana",
    "included": "eliminated",
    "owner": "Shane",
    "played": 3,
    "win": 1,
    "draw": 0,
    "loss": 2,
    "red_cards": 0,
    "yellow_cards": 8,
    "goals_for": 5,
    "goals_against": 7,
    "total_points": 2
  },
  {
    "team": "Iran",
    "included": "eliminated",
    "owner": "Rein",
    "played": 3,
    "win": 1,
    "draw": 0,
    "loss": 2,
    "red_cards": 0,
    "yellow_cards": 7,
    "goals_for": 4,
    "goals_against": 7,
    "total_points": -3
  },
  {
    "team": "Japan",
    "included": "true",
    "owner": "JR",
    "played": 3,
    "win": 2,
    "draw": 0,
    "loss": 1,
    "red_cards": 0,
    "yellow_cards": 6,
    "goals_for": 4,
    "goals_against": 3,
    "total_points": 17
  },
  {
    "team": "Korea Republic",
    "included": "true",
    "owner": "Sasi",
    "played": 3,
    "win": 1,
    "draw": 1,
    "loss": 1,
    "red_cards": 0,
    "yellow_cards": 5,
    "goals_for": 4,
    "goals_against": 4,
    "total_points": 10
  },
  {
    "team": "Mexico",
    "included": "eliminated",
    "owner": "Rein",
    "played": 3,
    "win": 1,
    "draw": 1,
    "loss": 1,
    "red_cards": 0,
    "yellow_cards": 7,
    "goals_for": 2,
    "goals_against": 3,
    "total_points": 6
  },
  {
    "team": "Morocco",
    "included": "true",
    "owner": "Emma",
    "played": 3,
    "win": 2,
    "draw": 1,
    "loss": 0,
    "red_cards": 0,
    "yellow_cards": 2,
    "goals_for": 4,
    "goals_against": 1,
    "total_points": 29
  },
  {
    "team": "Poland",
    "included": "true",
    "owner": "Emma",
    "played": 3,
    "win": 1,
    "draw": 1,
    "loss": 1,
    "red_cards": 0,
    "yellow_cards": 5,
    "goals_for": 2,
    "goals_against": 2,
    "total_points": 12
  },
  {
    "team": "Qatar",
    "included": "eliminated",
    "owner": "DJ",
    "played": 3,
    "win": 0,
    "draw": 0,
    "loss": 3,
    "red_cards": 0,
    "yellow_cards": 3,
    "goals_for": 0,
    "goals_against": 4,
    "total_points": -18
  },
  {
    "team": "Saudia Arabia",
    "included": "eliminated",
    "owner": "Sean",
    "played": 3,
    "win": 1,
    "draw": 0,
    "loss": 2,
    "red_cards": 0,
    "yellow_cards": 14,
    "goals_for": 3,
    "goals_against": 5,
    "total_points": -8
  },
  {
    "team": "Senegal",
    "included": "true",
    "owner": "Ray",
    "played": 3,
    "win": 2,
    "draw": 0,
    "loss": 1,
    "red_cards": 0,
    "yellow_cards": 4,
    "goals_for": 5,
    "goals_against": 1,
    "total_points": 12
  },
  {
    "team": "Serbia",
    "included": "true",
    "owner": "DJ",
    "played": 2,
    "win": 0,
    "draw": 1,
    "loss": 1,
    "red_cards": 0,
    "yellow_cards": 5,
    "goals_for": 3,
    "goals_against": 5,
    "total_points": -4
  },
  {
    "team": "Switzerland",
    "included": "true",
    "owner": "Sasi",
    "played": 2,
    "win": 1,
    "draw": 0,
    "loss": 1,
    "red_cards": 0,
    "yellow_cards": 3,
    "goals_for": 1,
    "goals_against": 1,
    "total_points": 7
  },
  {
    "team": "Uruguay",
    "included": "eliminated",
    "owner": "Shane",
    "played": 3,
    "win": 1,
    "draw": 1,
    "loss": 1,
    "red_cards": 0,
    "yellow_cards": 8,
    "goals_for": 2,
    "goals_against": 2,
    "total_points": 7
  },
  {
    "team": "USA",
    "included": "true",
    "owner": "JR",
    "played": 3,
    "win": 1,
    "draw": 2,
    "loss": 0,
    "red_cards": 0,
    "yellow_cards": 5,
    "goals_for": 2,
    "goals_against": 1,
    "total_points": 17
  },
  {
    "team": "Wales",
    "included": "eliminated",
    "owner": "Angeli",
    "played": 3,
    "win": 0,
    "draw": 1,
    "loss": 2,
    "red_cards": 1,
    "yellow_cards": 3,
    "goals_for": 4,
    "goals_against": 6,
    "total_points": -9
  }
]

export default userData;