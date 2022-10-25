export const fetchTeamInfo = async (teamId) => {
    const response = await fetch(`${process.env.REACT_APP_TEAM_URL}${teamId}`, {
        method: "GET",
        headers: {
            "X-Auth-Token": `${process.env.REACT_APP_MATCHES_TOKEN}`,
        },
    });
    const result = await response.json();

    return result;
};

export const getArsenalPlayers = async () => {
    const response = await fetch(`${process.env.REACT_APP_PLAYERS_URL}`);
    const result = await response.json();

    return result;
};

export const getPremTeamsAltIDs = async () => {
    const response = await fetch(
        `${process.env.REACT_APP_PREM_TEAMS_ALTID_URL}`
    );
    const result = await response.json();
    return result;
};

export async function fetchTeams() {
    const response = await fetch(
        `${process.env.REACT_APP_PREM_TEAMS_ALTID_URL}`
    );
    const result = await response.json();
    return result;
}

export async function fetchMatches() {
    const response = await fetch(`${process.env.REACT_APP_MATCHES_URL}`, {
        method: "GET",
        headers: {
            "X-Auth-Token": `${process.env.REACT_APP_MATCHES_TOKEN}`,
        },
    });
    const result = await response.json();
    return result;
}

export async function fetchClubData(teamId) {
    const response = await fetch(`${process.env.REACT_APP_TEAM_URL}${teamId}`, {
        method: "GET",
        headers: {
            "X-Auth-Token": `${process.env.REACT_APP_MATCHES_TOKEN}`,
        },
    });
    const result = await response.json();
    return result;
}

export async function fetchPlayers() {
    const response = await fetch(
        "https://arsenal-players-api.herokuapp.com/players"
    );
    const data = await response.json();
    console.log("called");
    return data;
}
