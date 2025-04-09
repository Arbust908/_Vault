# Cyberpunk 2d Side Scroller

A 2D side-scrolling game set in a cyberpunk world.

## Tech Stack

*   **Engine:** [Godot Engine](https://godotengine.org/) (Version 4.x recommended)
*   **Language:** GDScript or C# (Choose based on preference)

## Getting Started

### Prerequisites

*   [Godot Engine](https://godotengine.org/download/) installed.

### Setup

1.  **Create a new Godot Project:**
    *   Open the Godot Engine Project Manager.
    *   Click "New Project".
    *   Set the "Project Name" to `Cyberpunk 2d Side Scroller`.
    *   Choose a "Project Path" (e.g., inside this `Vault/01--Projects/Cyberpunk 2d Side Scroller/` directory). You might want to create a dedicated `godot_project` subfolder within this directory.
    *   Select a "Renderer" (e.g., "Forward+" or "Mobile"). "Compatibility" might be suitable for simpler 2D games if targeting lower-end hardware.
    *   Click "Create & Edit".

2.  **Initial Scene Setup:**
    *   In the Godot editor, create a new 2D scene (Scene -> New Scene -> 2D Scene).
    *   Save the scene (e.g., as `main.tscn` or `level_01.tscn`) within the project folder.
    *   Set this scene as the main scene for the project (Project -> Project Settings -> Application -> Run -> Main Scene).

## Next Steps

*   **Import Assets:** Add character sprites, environment tilesets, sound effects, and music.
*   **Create Player Character:**
    *   Set up a `CharacterBody2D` node for the player.
    *   Add a `Sprite2D` or `AnimatedSprite2D` for visuals.
    *   Add a `CollisionShape2D` for physics.
    *   Write a script (GDScript or C#) for player movement (left/right, jump).
*   **Build Levels:**
    *   Use `TileMap` nodes to design game levels.
    *   Add static collision bodies (`StaticBody2D`) for platforms and walls.
*   **Implement Enemies:** Create enemy scenes and basic AI.
*   **Add Gameplay Mechanics:** Implement shooting, health systems, scoring, etc.
*   **Design UI:** Create menus, HUD elements (health bar, score display).
*   **Leverage Worldbuilding:** Use lore and characters from the Fantasy Worldbuilding project (if applicable and desired) to enrich the game world.
