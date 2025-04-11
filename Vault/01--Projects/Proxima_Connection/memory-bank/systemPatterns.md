# System Patterns: Proxima Connection

## Architecture (within this Vault Project)
This section focuses on the organization of documentation and planning materials within the `Vault/01--Projects/Proxima_Connection/` directory.

```mermaid
graph TD
    A[Proxima Connection Root] --> B[README.md]
    A --> C[docs]
    A --> D[assets]
    A --> E[scripts]
    A --> F[memory-bank]
    A --> G[External Narrat Project (Link/Reference)]

    C --> C1[characters]
    C --> C2[world]
    C --> C3[story]

    D --> D1[characters]
    D --> D2[backgrounds]
    D --> D3[ui]
    D --> D4[audio]

    F --> F1[projectbrief.md]
    F --> F2[productContext.md]
    F --> F3[systemPatterns.md]
    F --> F4[techContext.md]
    F --> F5[activeContext.md]
    F --> F6[progress.md]
    F --> F7[.clinerules (Optional, Project-Specific)]
```

## Key Technical Decisions (Documentation & Planning)
1.  **Separation of Concerns**: Design/planning docs (`docs/`) are kept separate from potential script drafts (`scripts/`) and asset references (`assets/`).
2.  **External Project Reference**: The actual Narrat engine project exists outside this vault structure and is referenced in the `README.md` and potentially linked elsewhere.
3.  **Vault as Source of Truth**: Documentation within this vault (world-building, character profiles, narrative design) serves as the primary reference for implementation in the external Narrat project.
4.  **Memory Bank**: This dedicated `memory-bank/` folder tracks the specific context, progress, and decisions for the Proxima Connection project.

## Design Patterns (Documentation & Planning)
1.  **Narrative Design**: Utilizing `docs/story/` for branching diagrams, plot outlines, and scene breakdowns.
2.  **Character Development**: Using `docs/characters/` for detailed profiles, relationship maps, and arc planning.
3.  **World Building**: Centralizing lore, location descriptions, faction details, and technology concepts in `docs/world/`.
4.  **Asset Referencing**: Using `assets/` to list requirements and potentially store source files, while final game assets reside externally.
5.  **Script Management**: Using `scripts/` for drafting or organizing larger script sections before implementation in Narrat's `.yaml` files.

## Component Relationships (Documentation & Planning)
-   **World Building (`docs/world`)** informs **Character Profiles (`docs/characters`)** and **Narrative Design (`docs/story`)**.
-   **Character Profiles** are referenced heavily in **Narrative Design** and **Script Drafts (`scripts/`)**.
-   **Narrative Design** dictates the structure of **Script Drafts** and lists requirements for **Asset Planning (`assets/`)**.
-   **Asset Planning** references **World Building** and **Character Profiles** for visual/audio needs.
-   All documentation components inform the implementation within the **External Narrat Project**.
-   This **Memory Bank (`memory-bank/`)** tracks the state and evolution of all documentation components.
