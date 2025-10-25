interface Campaign {
  title: string;                // Name of the campaign
  cover_image?: string | null;  // Cover image for the whole campaign
  bbeg: string;                 // Big Bad Evil Guy / main antagonist
  description?: string;         // General overview of the campaign
  adventures: Adventure[];      // Ordered set of adventures
}

interface Adventure {
  title: string;                  
  icon?: string;                  
  cover_image?: string | null;    
  theme?: string;                 
  setting: string;                
  summary_for_players: string;    
  main_bad?: string;              
  verb?: string;                  
  factions_or_elements?: string[]; 

  level: number;                 // Recommended level or level range for this adventure

  mechanics: {
    exploration: number; // 0–5 rating
    politics: number;    // 0–5 rating
    roleplay: number;    // 0–5 rating
    tactics: number;     // 0–5 rating
  };

  player_commitment?: string;    
  key_locations?: string[];      
  challenges?: Challenge[];      
}

interface Challenge {
  id: number;         
  name: string;       
  type: string;       
}

// 1. Game Review Schema
{
  "id": "string",  
  "title": "string",
  "year": "number",
  "publisher": "string",
  "system_family": "string | null",
  "identity": {
    "target_audience": "string",
    "inspirations": ["string"]
  },
  "theme": {
    "setting": "string",
    "tone": "string",
    "fantasy_promise": "string"
  },
  "mechanics": {
    "character_creation": "class-based | skill-based | freeform | hybrid",
    "resolution": {
      "type": "string", 
      "details": "string",
      "examples": ["game_id"]
    },
    "complexity": "light | medium | heavy",
    "special_mechanics": ["string"]
  },
  "player_experience": {
    "agency": "low | medium | high",
    "gm_role": "heavy | shared | light | none",
    "replayability": "string",
    "mode": "campaign | one-shot | hybrid"
  },
  "design": {
    "book_quality": "string",
    "layout": "string",
    "art_style": "string",
    "support_materials": ["string"]
  },
  "evaluation": {
    "strengths": ["string"],
    "weaknesses": ["string"],
    "best_for": "string"
  },
  "tags": {
    "attributes": ["string"],
    "resolution_system": ["string"],
    "other": ["string"]
  }
}

// 2. Attributes / Roles / Skills Taxonomy
{
  "attribute_systems": [
    {
      "name": "Classic Six",
      "examples": ["D&D", "OSR"],
      "common_attributes": ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"]
    },
    {
      "name": "Role-Based",
      "examples": ["PBTA", "Forged in the Dark"],
      "common_roles": ["Playbooks", "Archetypes", "Careers"]
    },
    {
      "name": "Skill-Based",
      "examples": ["BRP", "Call of Cthulhu"],
      "skills": "percentage- or rating-driven"
    },
    {
      "name": "Freeform/Narrative",
      "examples": ["Fate", "Microscope"],
      "traits": "aspects, descriptors, tags"
    }
  ]
}

// 3. Base Resolution Systems Taxonomy
{
  "resolution_systems": [
    {
      "name": "Roll Under d20",
      "description": "Roll a d20 under stat or TN",
      "examples": ["Dragonbane", "The Black Hack", "Crown & Skull", "Cosmere RPG"]
    },
    {
      "name": "Roll Over d20",
      "description": "Roll equal to or above TN",
      "examples": ["Vagabond", "Shadowdark", "Distal", "Brimstone"]
    },
    {
      "name": "D6 Pool",
      "description": "Roll multiple d6, count successes",
      "examples": ["Mistborn"]
    },
    {
      "name": "Single D6",
      "description": "All outcomes from one d6",
      "examples": ["ICONS"]
    },
    {
      "name": "Power Roll (2d10)",
      "description": "Roll 2d10, compare to tiered success bands",
      "examples": ["Draw Steel"]
    }
  ]
}
