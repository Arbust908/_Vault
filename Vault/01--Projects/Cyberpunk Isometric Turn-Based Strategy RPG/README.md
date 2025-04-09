# Cyberpunk Isometric Turn-Based Strategy RPG

An isometric turn-based strategy RPG set in a cyberpunk future, built with Godot.

## Tech Stack

*   **Engine:** [Godot Engine](https://godotengine.org/) (Version 4.x recommended)
*   **Language:** GDScript or C# (Choose based on preference)

## Getting Started

### Prerequisites

*   [Godot Engine](https://godotengine.org/download/) installed.
*   Understanding of isometric projection and turn-based game logic.

### Setup

1.  **Create a new Godot Project:**
    *   Open the Godot Engine Project Manager.
    *   Click "New Project".
    *   Set the "Project Name" to `Cyberpunk Isometric TBS RPG`.
    *   Choose a "Project Path" (e.g., inside this directory, perhaps in a `godot_project` subfolder).
    *   Select a "Renderer" (e.g., "Forward+" or "Mobile").
    *   Click "Create & Edit".

2.  **Initial Scene Setup:**
    *   Create a main 2D or 3D scene (depending on whether you want true 3D isometric or pseudo-isometric 2D). A 2D scene using `TileMap` with isometric mode is common.
    *   **If using TileMap (2D):**
        *   Create a `TileSet` resource.
        *   Configure the `TileSet` for isometric mode (Tile Shape: Isometric).
        *   Import isometric tiles (environment, potentially characters as tiles initially).
        *   Add a `TileMap` node to your main scene and assign the `TileSet`.
    *   **If using 3D:**
        *   Set up a 3D scene with an orthographic `Camera3D` positioned to create an isometric view.
        *   Import 3D models for the environment and characters.
    *   Save the scene (e.g., `battle_map_01.tscn`).
    *   Set this scene as the main scene (Project -> Project Settings -> Application -> Run -> Main Scene).

## Next Steps

*   **Import Assets:** Isometric tiles, character sprites/models suitable for the isometric view, UI elements, sound effects, music.
*   **Grid System:** Implement logic for the game grid (movement range, pathfinding, targeting). Godot's `AStarGrid2D` (for TileMap) or `AStar3D` might be useful.
*   **Turn-Based System:** Create a state machine or manager to handle turns (player turn, enemy turn), actions per turn, initiative order.
*   **Character Units:**
    *   Create scenes for player and enemy units (`CharacterBody2D/3D` or `Node2D/3D`).
    *   Implement character stats (HP, AP - Action Points, movement speed, attack power, etc.).
    *   Add visual representation (Sprite/AnimatedSprite or 3D model).
    *   Write scripts for unit behavior, actions (move, attack, use ability), and interaction with the grid/turn system.
*   **Input Handling:** Implement controls for selecting units, choosing actions, targeting squares or enemies.
*   **AI:** Develop basic AI for enemy units (movement decisions, target selection, ability usage).
*   **Combat Mechanics:** Implement attack logic, damage calculation, status effects, cover systems.
*   **UI:** Design and implement UI for displaying unit info, action menus, turn order, objectives.
*   **Leverage Worldbuilding:** Use cyberpunk lore, factions, and characters to inform the game's setting, story, and unit design.
