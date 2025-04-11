# Technical Context: Proxima Connection

## Technologies Used
1.  **Obsidian (for Documentation)**
    *   Used for managing all design documents, world-building, character profiles, narrative outlines, and this memory bank.
    *   Leverages Markdown, potentially Templater for documentation templates.
2.  **Narrat Engine (for Implementation - External Project)**
    *   Version: Latest (`npm create narrat@latest`)
    *   Core Features: YAML-based scripting, branching narratives, asset management, UI customization.
    *   Language: Narrat Script, YAML, potentially TypeScript for extensions.
    *   [Narrat Docs](https://narrat.dev/)
3.  **Node.js & npm/yarn (for Narrat Development - External Project)**
    *   Required to run the Narrat development server and manage dependencies for the external project.

## Development Setup (Documentation - This Vault)
1.  **Folder Structure**: Organized structure within `Vault/01--Projects/Proxima_Connection/` including `docs/`, `assets/`, `scripts/`, and `memory-bank/`.
2.  **Templates**: Potential use of Obsidian/Templater templates for character profiles, location descriptions, scene outlines, etc. within `docs/`.
3.  **Linking**: Use of wiki-links or markdown links to connect related documents (e.g., linking characters to factions, scenes to locations).

## Development Setup (Implementation - External Narrat Project)
1.  **Initialization**: Project created using `npm create narrat@latest` in a separate directory.
2.  **Dependencies**: Managed via `package.json` and `npm install` / `yarn install`.
3.  **Configuration**: Core settings managed in `narrat/config.yaml`. UI elements in `narrat/buttons.yaml`, `narrat/screens.yaml`.
4.  **Scripting**: Narrative implemented in `narrat/scripts.yaml` and potentially other included `.yaml` files.
5.  **Assets**: Final game assets (images, audio) placed in the `public/` directory.
6.  **Development Server**: Run using `npm run dev` or `yarn dev`.

## Technical Constraints
1.  **Documentation vs. Implementation**: Maintaining consistency between the design documents in this vault and the implemented code/scripts in the external Narrat project requires discipline.
2.  **Narrat Limitations**: Subject to the features and potential limitations of the Narrat Engine (e.g., complexity of logic achievable purely in YAML).
3.  **Asset Pipeline**: Requires a process for creating/sourcing assets and placing the correct formats/sizes into the external Narrat project's `public/` folder.

## Dependencies (for Documentation in this Vault)
1.  Obsidian application.
2.  Markdown understanding.

## Dependencies (for Implementation in External Narrat Project)
1.  Narrat Engine library.
2.  Node.js runtime environment.
3.  Web browser for testing.
4.  Asset files (images, audio).
