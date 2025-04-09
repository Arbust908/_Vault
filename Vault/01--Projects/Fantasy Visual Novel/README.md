# Fantasy Visual Novel

A visual novel set in a fantasy world, built with the Narrat Engine.

## Tech Stack

*   **Engine:** [Narrat Engine](https://narrat.dev/)
*   **Language:** Narrat Script (YAML-based), potentially TypeScript for plugins/custom logic.

## Getting Started

### Prerequisites

*   Node.js (LTS version recommended)
*   npm or yarn package manager

### Setup

1.  **Initialize a new Narrat project:**
    *   Open your terminal or command prompt.
    *   Navigate to the `Vault/01--Projects/Fantasy Visual Novel/` directory (or choose where you want the project files to reside).
    *   Run the Narrat creation command:
        ```bash
        npm create narrat@latest
        # or
        yarn create narrat
        ```
    *   Follow the prompts:
        *   Choose a project name (e.g., `fantasy-vn`).
        *   Select a template (e.g., "Default").

2.  **Navigate into the project directory:**
    ```bash
    cd fantasy-vn
    ```
    *(Replace `fantasy-vn` with the actual project name you chose)*

3.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

### Development

1.  **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
2.  Open your browser to the local address provided (usually `http://localhost:5173`).

### Project Structure (Typical Narrat Project)

*   `public/`: Static assets (images, audio).
    *   `img/characters/`: Character sprites.
    *   `img/backgrounds/`: Background images.
    *   `audio/`: Sound effects and music.
*   `src/`: Source code (if customizing).
*   `narrat/`: Core game configuration and scripts.
    *   `config.yaml`: Main game configuration (characters, settings, UI).
    *   `buttons.yaml`: UI button definitions.
    *   `screens.yaml`: Screen layouts.
    *   `scripts.yaml`: Main game script file (or includes other script files).
    *   `skills.yaml`: Skill definitions (if using RPG features).
    *   `items.yaml`: Item definitions (if using RPG features).
    *   `quests.yaml`: Quest definitions (if using RPG features).

## Next Steps

*   **Define Characters:** Add character definitions (names, sprites) in `narrat/config.yaml`.
*   **Add Assets:** Place character sprites, background images, and audio files in the `public/` directory.
*   **Write the Story:** Edit `narrat/scripts.yaml` (or create new `.yaml` script files and include them) to write dialogue, choices, and logic using Narrat's scripting language.
*   **Customize UI:** Modify `narrat/buttons.yaml` and `narrat/screens.yaml` to change the look and feel.
*   **Implement Choices and Branching:** Use Narrat's syntax for player choices that affect the narrative.
*   **Leverage Worldbuilding:** Incorporate lore, characters, and settings from the Fantasy Worldbuilding project.
