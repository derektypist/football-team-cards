const footballTeam = {
  team: "Club Norman Park",
  year: 2025,
  headCoach: "John Doe",
  players: [{name: "Andy", position: "defender", isCaptain: false}, {name: "Brian", position: "goalkeeper", isCaptain: false}, {name: "Canon", position: "defender",isCaptain:true}, {name:"Dick", position: "midfielder", isCaptain: false}, {name:"Elvis", position: "forward", isCaptain: false}, {name:"Frank", position: "forward", isCaptain: false},{name:"George", position: "defender", isCaptain: false}, {name:"Harrison", position: "midfielder", isCaptain: false}, {name: "Isaac", position: "midfielder", isCaptain: false}, {name: "James", position: "forward", isCaptain: false}]
};

document.getElementById("team").textContent = footballTeam.team;
document.getElementById("year").textContent = footballTeam.year;
document.getElementById("head-coach").textContent = footballTeam.headCoach;

function displayPlayers(position) {
  const playerCardsDiv = document.getElementById("player-cards");
  playerCardsDiv.innerHTML = "";

  const playersToShow = footballTeam.players.filter(player => position === "all" || player.position === position);

  playersToShow.forEach(player => {
    const card = document.createElement("div");
    card.className = "player-card";
    card.innerHTML = `<h2>${player.isCaptain ? "(Captain) " : ""}${player.name}</h2>
    <p>Position: ${player.position}</p>`;
    playerCardsDiv.appendChild(card);

  });
}

document.getElementById("players").addEventListener("change", (event) => {
  const selectedPosition = event.target.value;
  displayPlayers(selectedPosition);
});

displayPlayers("all");
