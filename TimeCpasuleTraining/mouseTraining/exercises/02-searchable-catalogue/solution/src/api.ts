export type Title = {
  uuid: string;
  name: string;
  year: number;
  genre: string;
  description: string;
};

const titles: Title[] = [
  {
    "uuid": "550e8400-e29b-41d4-a716-446655440001",
    "name": "The Shawshank Redemption",
    "year": 1994,
    "genre": "Drama",
    "description": "A banker serving a life sentence forms an unlikely friendship while quietly searching for hope and freedom."
  },
  {
    "uuid": "550e8400-e29b-41d4-a716-446655440002",
    "name": "The Godfather",
    "year": 1972,
    "genre": "Crime",
    "description": "The reluctant son of a powerful crime boss is gradually drawn into his family's criminal empire."
  },
  {
    "uuid": "550e8400-e29b-41d4-a716-446655440003",
    "name": "The Dark Knight",
    "year": 2008,
    "genre": "Action",
    "description": "Batman faces a chaotic criminal mastermind who pushes Gotham and its heroes to their moral limits."
  },
  {
    "uuid": "550e8400-e29b-41d4-a716-446655440004",
    "name": "Pulp Fiction",
    "year": 1994,
    "genre": "Crime",
    "description": "Several intertwined stories follow criminals, hitmen, and unexpected encounters in Los Angeles."
  },
  {
    "uuid": "550e8400-e29b-41d4-a716-446655440005",
    "name": "Fight Club",
    "year": 1999,
    "genre": "Drama",
    "description": "An unhappy office worker meets a charismatic stranger and creates an underground fighting club."
  },
  {
    "uuid": "550e8400-e29b-41d4-a716-446655440006",
    "name": "Forrest Gump",
    "year": 1994,
    "genre": "Drama",
    "description": "A kindhearted man unexpectedly finds himself involved in several defining moments of American history."
  },
  {
    "uuid": "550e8400-e29b-41d4-a716-446655440007",
    "name": "Inception",
    "year": 2010,
    "genre": "Science Fiction",
    "description": "A skilled thief enters people's dreams to steal secrets and attempts an unprecedented form of manipulation."
  },
  {
    "uuid": "550e8400-e29b-41d4-a716-446655440008",
    "name": "The Matrix",
    "year": 1999,
    "genre": "Science Fiction",
    "description": "A programmer discovers that the reality he knows is an artificial simulation controlled by machines."
  },
  {
    "uuid": "550e8400-e29b-41d4-a716-446655440009",
    "name": "Interstellar",
    "year": 2014,
    "genre": "Science Fiction",
    "description": "Explorers travel through a wormhole searching for a new home as Earth's environment becomes increasingly hostile."
  },
  {
    "uuid": "550e8400-e29b-41d4-a716-446655440010",
    "name": "Gladiator",
    "year": 2000,
    "genre": "Action",
    "description": "A betrayed Roman general becomes a gladiator and seeks justice against the emperor responsible for his downfall."
  },
  {
    "uuid": "550e8400-e29b-41d4-a716-446655440011",
    "name": "Goodfellas",
    "year": 1990,
    "genre": "Crime",
    "description": "A young man rises through the ranks of organized crime and discovers the dangers of the life he idolized."
  },
  {
    "uuid": "550e8400-e29b-41d4-a716-446655440012",
    "name": "The Silence of the Lambs",
    "year": 1991,
    "genre": "Thriller",
    "description": "An FBI trainee seeks help from an imprisoned killer while hunting another dangerous criminal."
  },
  {
    "uuid": "550e8400-e29b-41d4-a716-446655440013",
    "name": "Se7en",
    "year": 1995,
    "genre": "Thriller",
    "description": "Two detectives investigate a series of murders inspired by the seven deadly sins."
  },
  {
    "uuid": "550e8400-e29b-41d4-a716-446655440014",
    "name": "Jurassic Park",
    "year": 1993,
    "genre": "Adventure",
    "description": "Visitors to an experimental theme park must survive after genetically recreated dinosaurs escape containment."
  },
  {
    "uuid": "550e8400-e29b-41d4-a716-446655440015",
    "name": "Alien",
    "year": 1979,
    "genre": "Horror",
    "description": "The crew of a commercial spacecraft encounters a deadly extraterrestrial organism during their journey home."
  },
  {
    "uuid": "550e8400-e29b-41d4-a716-446655440016",
    "name": "Back to the Future",
    "year": 1985,
    "genre": "Science Fiction",
    "description": "A teenager accidentally travels into the past and must ensure his parents meet before returning home."
  },
  {
    "uuid": "550e8400-e29b-41d4-a716-446655440017",
    "name": "The Lord of the Rings: The Fellowship of the Ring",
    "year": 2001,
    "genre": "Fantasy",
    "description": "A young hobbit begins a dangerous journey to destroy a powerful ring before it falls into evil hands."
  },
  {
    "uuid": "550e8400-e29b-41d4-a716-446655440018",
    "name": "Spirited Away",
    "year": 2001,
    "genre": "Animation",
    "description": "A young girl enters a mysterious spirit world and must find a way to rescue her transformed parents."
  },
  {
    "uuid": "550e8400-e29b-41d4-a716-446655440019",
    "name": "The Departed",
    "year": 2006,
    "genre": "Crime",
    "description": "An undercover officer and a criminal informant attempt to expose each other while infiltrating opposing organizations."
  },
  {
    "uuid": "550e8400-e29b-41d4-a716-446655440020",
    "name": "Whiplash",
    "year": 2014,
    "genre": "Drama",
    "description": "An ambitious jazz drummer faces an obsessive instructor whose brutal methods push him toward his limits."
  },
  {
    "uuid": "550e8400-e29b-41d4-a716-446655440021",
    "name": "Parasite",
    "year": 2019,
    "genre": "Thriller",
    "description": "A struggling family gradually enters the lives of a wealthy household with increasingly unpredictable consequences."
  },
  {
    "uuid": "550e8400-e29b-41d4-a716-446655440022",
    "name": "Mad Max: Fury Road",
    "year": 2015,
    "genre": "Action",
    "description": "Fugitives race across a ruined wasteland while escaping a tyrant and his relentless army."
  },
  {
    "uuid": "550e8400-e29b-41d4-a716-446655440023",
    "name": "Blade Runner",
    "year": 1982,
    "genre": "Science Fiction",
    "description": "A detective in a dystopian future hunts artificial humans while questioning the nature of identity and humanity."
  },
  {
    "uuid": "550e8400-e29b-41d4-a716-446655440024",
    "name": "The Prestige",
    "year": 2006,
    "genre": "Mystery",
    "description": "Two rival magicians become consumed by competition as each tries to create the ultimate illusion."
  },
  {
    "uuid": "550e8400-e29b-41d4-a716-446655440025",
    "name": "The Truman Show",
    "year": 1998,
    "genre": "Comedy",
    "description": "A man slowly discovers that his entire life has secretly been constructed as a television program."
  },
  {
    "uuid": "550e8400-e29b-41d4-a716-446655440026",
    "name": "Eternal Sunshine of the Spotless Mind",
    "year": 2004,
    "genre": "Romance",
    "description": "A man undergoing a procedure to erase a failed relationship realizes that he may not want to forget it."
  },
  {
    "uuid": "550e8400-e29b-41d4-a716-446655440027",
    "name": "No Country for Old Men",
    "year": 2007,
    "genre": "Thriller",
    "description": "A man who discovers stolen money becomes the target of a relentless killer across rural Texas."
  },
  {
    "uuid": "550e8400-e29b-41d4-a716-446655440028",
    "name": "The Grand Budapest Hotel",
    "year": 2014,
    "genre": "Comedy",
    "description": "A hotel concierge and his young apprentice become caught in a dispute involving an inheritance and a valuable painting."
  },
  {
    "uuid": "550e8400-e29b-41d4-a716-446655440029",
    "name": "Arrival",
    "year": 2016,
    "genre": "Science Fiction",
    "description": "A linguist is recruited to communicate with mysterious extraterrestrial visitors whose arrival challenges humanity's understanding of time."
  },
  {
    "uuid": "550e8400-e29b-41d4-a716-446655440030",
    "name": "The Thing",
    "year": 1982,
    "genre": "Horror",
    "description": "Researchers at an isolated Antarctic station face a shape-shifting organism capable of perfectly imitating its victims."
  }
];

export function searchTitles(query: string): Promise<Title[]> {
  return new Promise((resolve, reject) => {
    const delay = 300 + Math.random() * 900;
    window.setTimeout(() => {
      if (query.toLowerCase().includes("error")) {
        reject(new Error("Catalogue service unavailable"));
        return;
      }

      const normalized = query.trim().toLowerCase();
      resolve(titles.filter((title) => title.name.toLowerCase().includes(normalized)));
    }, delay);
  });
}
