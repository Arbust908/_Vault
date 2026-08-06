// You are a developer for Disney Streaming Services, and your current project is to develop a system that helps users identify which shows (series, movies, etc.) they have in 
// common with all other users across different streaming platforms (Hulu, Disney+, ESPN+, etc.).

// Each platform has a system for querying shows that users are watching, returned as a list of (user ID, show name) pairs.


// ##Task
// Write a function that takes in a collection of (user ID, show name) pairs and returns a dictionary where:
// Each key is a user pair (sorted numerically and represented as "userA,userB").
// The value is the list of shared shows.
// If two users do not share any shows, they should still appear in the output with an empty list ([]).


// ##1. Example Input 
const user_show_pairs_1 = [
  ["17", "Loki"],
  ["58", "The Mandalorian"],
  ["94", "The Simpsons"],
  ["94", "SportsCenter"],
  ["17", "Andor"],
  ["58", "Family Guy"],
  ["58", "ESPN FC"],
  ["17", "The Mandalorian"],
  ["94", "ESPN FC"],
  ["25", "ESPN FC"],
  ["58", "Andor"],
];

// ##1. Example Output 
// find_friends_common_shows(user_show_pairs_1) =>
// {
//   "17,58": ["The Mandalorian", "Andor"],
//   "58,94": ["ESPN FC"],
//   "94,25": ["ESPN FC"],
//   "17,94": [],
//   "17,25": [],
//   "58,25": ["ESPN FC"]
// }


// ##2. Example Input 
const user_show_pairs_2 = [
  ["42", "The Mandalorian"],
  ["0", "Welcome to Wrexham"],
  ["9", "The Simpsons"],
]
// ##2. Example Output
// find_friends_common_shows(user_show_pairs_2) =>
// { '42,0': [], '42,9': [] }

// Function Signature
const find_friends_common_shows = (data) => {
    const user_show_map = new Map();
    for (let i = 0; i < data.length; i++) {
        const [userId, show] = data[i];
        if (user_show_map.get(userId)) {
            const showList = [...user_show_map.get(userId), show]
            user_show_map.set(userId, showList)
        } else {
            user_show_map.set(userId, [show])
        }
    }
    const friendList = {};
    console.log('user_show_map: ', user_show_map);
    const mapKeys = Array.from(user_show_map.keys());
    console.log(mapKeys);
    for (let j = 0; j < mapKeys.length; j++) {
        for (let k = j + 1; k < mapKeys.length; k++) {
            const pairKeys = `${mapKeys[j]},${mapKeys[k]}`
            const user1Shows = user_show_map.get(mapKeys[j]);
            const user2Shows = user_show_map.get(mapKeys[k]);
            const match = user1Shows.filter((show) => user2Shows.includes(show))
            
            friendList[pairKeys] = match;
        }
    }
    

    console.log('friendList: ', friendList);
    return friendList;
};

find_friends_common_shows(user_show_pairs_1);