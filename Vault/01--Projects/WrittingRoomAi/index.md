Great. I’ll put together a comprehensive plan for building a modular, user-driven novel-writing system using TypeScript. This will include a coordinated set of agents—some for creative writing, some for editing, and some for orchestration—working collaboratively via OpenRouter and Ollama. The plan will outline a full tech stack, architectural approach, and a library of prompts to support genre selection, story structure, character integration, and iterative novel generation, all in English.

I'll get started on this and let you know when it's ready.


# Comprehensive Implementation Plan for a Modular AI Novel-Writing System

## Overview

This plan outlines a **modular, agent-based AI novel-writing system** built with TypeScript. The system will help users generate a short novel (approximately 2,000–5,000 words in English) through a collaborative process between multiple AI “agent” modules. Users begin by specifying or letting the AI decide the **genre** (e.g. fantasy, mystery) and **narrative structure** (e.g. classical 3-act structure or the Hero’s Journey). They can optionally provide key details – such as character names, descriptions, or settings – to guide the story. The AI agents (planner, writer, editor, critic, etc.) will then **iteratively generate the novel**, ensuring the story stays coherent and follows the chosen structure, while still being creative. Crucially, the system supports **human-in-the-loop** intervention: at various stages (outline creation, chapter drafts, edits), the user can review and edit content before the process continues.

This approach draws inspiration from real-world writing workflows where an author drafts content and an editor reviews it. By assigning specialized roles to different AI agents, we can simulate a collaborative author-editor dynamic. *Writing is inherently iterative, and different perspectives (creative vs. critical) lead to better outcomes.* The multi-agent setup will encourage creativity (through a dedicated writer agent) while another agent ensures coherence and quality (editor/critic), mimicking the tension between creativity and criticism that often yields strong writing.

## Proposed Tech Stack

**Front-End:** A web-based UI built with TypeScript – for example, a React or Next.js application. This interface will allow users to input their choices (or delegate them to the AI), provide optional story elements, and view/edit the generated content. A rich text editor component can be used to display the novel as it’s written and allow inline edits by the user. The front-end will manage UI state (using a state management library like Redux or React Context for current story state) and communicate with the backend orchestrator via HTTP or WebSocket (for real-time updates).

**Backend Orchestration:** A Node.js backend (written in TypeScript, possibly using frameworks like Express or NestJS) will serve as the **orchestrator**. This backend coordinates the agent workflow and holds the main story state. It exposes API endpoints that the front-end can call (e.g. “start generation”, “generate next chapter”, “edit chapter”). The backend will sequentially invoke the AI agents in the correct order, manage their inputs/outputs, and integrate any user edits at each step. By centralizing orchestration on the backend, we can maintain consistency of the story state and handle long-running AI generation tasks without blocking the UI.

**AI Integration Layer:** The system will integrate with language models via two avenues: **OpenRouter** and **Ollama**. **OpenRouter** provides a unified API to access various large language models (LLMs) from different providers (OpenAI, Anthropic, etc.). Using OpenRouter’s API, the user (or system) can select which model to use for each agent – for example, GPT-4 for the writer agent, Claude or another model for the critic, etc. OpenRouter acts as a router that forwards requests to the chosen model and provider, abstracting away the differences and consolidating billing/keys. This gives flexibility to use high-quality hosted models, with the option to switch or fallback as needed.

For local or private inference, the system will integrate **Ollama**, which allows running open-source LLMs on the user’s machine or a private server. *Ollama is a lightweight, extensible framework for running language models locally*, and it offers a simple REST API for generating text completions. By running an Ollama server (which can host models like Llama 2, etc.), our TypeScript backend can send requests to `http://localhost:11434/api/generate` or `/api/chat` to get model outputs. This setup gives users concerned with privacy an option to use the system entirely offline with local models, or to reduce costs by using open-source models.

We will design an **AI driver module** in TypeScript to abstract these calls. It might expose functions like `generateText(prompt, modelConfig)` which internally either calls OpenRouter’s API (for cloud models) or the Ollama API (for local models), depending on user settings. This driver can handle model selection logic and unify the response format. It will also incorporate proper error handling (network issues, API errors, timeouts) and logging. The OpenRouter integration requires managing API keys and model IDs (the user might supply an OpenRouter API key and choose a model like `openai/gpt-4` or `anthropic/claude-v1`), whereas Ollama integration requires ensuring an Ollama server is running with the desired model loaded.

**State Management and Persistence:** Maintaining the story state is crucial for coherence and for allowing the user to pause/resume. The backend orchestrator will keep an in-memory representation of the *novel state* (including the chosen genre/structure, the outline, character list, and chapters as they are drafted). For persistence and collaboration, we can also store this state in a database. A lightweight option is to use a JSON document store or a NoSQL DB (like MongoDB) to save the state of each “story project” or a relational DB (like PostgreSQL) with tables for projects, characters, chapters, etc. The state should include references to all user inputs and all outputs generated by agents. This allows the user to come back later and continue editing or generation. It also enables versioning – for example, saving different drafts or iterations if needed (for simplicity, versioning can be an enhancement).

On the front-end, state management will ensure the UI reflects the latest story content. For example, after the backend generates a new chapter, the front-end state is updated to display it. If using Next.js, we might use API routes that return the latest state, and SWR or React Query for syncing state. If using a single-page app, WebSocket or SSE can push updates as they stream in (especially if we stream token-by-token generation). This provides real-time feedback to the user.

**Additional Tools/Libraries:** We can leverage libraries like **LangChain.js** (the TypeScript version of LangChain) to manage prompt templates and sequencing of LLM calls, although we may implement the orchestration logic manually for transparency. LangChain could be useful for its prompt template management and memory utilities – for instance, it can help format multi-turn interactions or maintain a vector-based memory of the story so far. However, given our custom multi-agent setup, we might implement a tailor-made solution. Another useful library is **Zod or TypeScript interfaces** for defining the structure of our story state (outline schema, chapter schema, etc.), ensuring type safety as agents produce outputs that we parse.

## High-Level Architecture

The system is organized into modular components, each with a clear role. Below is a high-level description of the architecture:

* **User Interface (UI):** The user interacts via a web UI to input preferences (genre, structure, characters) and to observe or edit the story as it is generated. For example, the user selects "Hero’s Journey" and "Fantasy", provides two character names with descriptions, and clicks "Generate Outline". They will see the outline generated and can modify it or approve it. Then they proceed to chapter generation, intervening as desired.

* **Backend Orchestrator:** The orchestrator (TypeScript backend) is the controller that manages the workflow. It receives user inputs from the UI and invokes the sequence of agent operations to build the novel. Think of it as the director of the process: it will call the **Planner agent** to create an outline, then loop through each outlined chapter/section to call the **Writer agent** for drafting, the **Editor agent** for refinement, and so on. It also integrates any **user edits**: for instance, if the user edits the outline or a chapter, the orchestrator will use that updated content for subsequent steps instead of the AI’s original output. The orchestrator is also responsible for passing along the relevant context (story state) to each agent call to maintain coherence.

* **AI Agents (Modular Services):** Each agent is implemented as a separate module or class in the code, encapsulating its prompting logic and responsibilities. These agents are not independent server processes but logical components invoked by the orchestrator. Each agent will call the LLM (via the integration layer) with a tailored prompt and return the result. By isolating their logic, we ensure the system is **modular** – we can upgrade or change one agent’s behavior (or the model it uses) without affecting the others. The main agents include:

  * **Story Planner** – outlines the narrative structure.
  * **Story Writer** – generates the prose for each chapter/section.
  * **Story Editor** – revises and improves the prose.
  * **Story Critic** – analyzes the content for issues or provides feedback.

  (We define these roles in detail in the next section.) This modular design also means we could add or remove agents. For example, one could introduce a **Character Developer** agent to flesh out character backstories, or a **Fact Checker** agent for consistency, without redesigning the whole system.

* **Central Story State (Memory):** A data structure (managed by the orchestrator, possibly stored in a DB or in-memory) acts as the “single source of truth” for the story as it is being created. It contains:

  * *User inputs:* genre, structure, any provided characters or world info.
  * *Outline:* a structured representation of the narrative plan (acts, chapters, or key plot points).
  * *Characters database:* a list of characters with their descriptions and any attributes (some provided by user, others invented by the planner if needed).
  * *Chapters:* each chapter’s text content as generated (and possibly edited), plus metadata like which outline section it fulfills, summary of key events in that chapter, etc.
  * *Global context:* notes or a knowledge base of facts established so far (to check consistency, e.g. Character A’s eye color or the magic system rules). This can be updated by the agents (for example, if the writer introduces a new important detail, we add it to the knowledge base).

  This state is updated after each agent’s output. For instance, after the Planner produces an outline, the outline is stored and passed into the subsequent writer steps. After the Writer produces chapter 1, that text is stored, and a summary might be computed for easy reference later. The **state serves to maintain coherence**, since each agent will consult it (either by direct data access or by including parts of it in the prompt). We will persist this state (e.g. save to database or local file) at checkpoints so the process can be resumed or reviewed.

* **LLM Models Backend:** This refers to the actual large language model instances that power each agent’s text generation. Through the integration layer, agents’ prompts are sent either to remote models via OpenRouter or to a local model via Ollama. The architecture allows the **user to choose the model per agent or globally**. For example, the user might select a more **creative model** for the Story Writer (to get imaginative prose) and a more **analytical model** for the Story Critic (to get logical feedback). OpenRouter’s unified API simplifies switching between models, while Ollama enables privacy by running an open model locally. The system will need to handle the different latency and context length characteristics of these models. (For instance, a local 7B model might have a smaller context window, so the prompts need to include condensed context.)

Below is a conceptual flow of how these components interact (from start to finish):

1. **User Input Stage:** The user selects a genre (or chooses random/surprise), a narrative structure template (3-Act, Hero’s Journey, etc.), and optionally enters character info or setting details. They then initiate the generation process. *(If the user prefers, they could delegate genre or structure selection to the AI – in which case the Story Planner can decide those based on a creative suggestion step.)*

2. **Outline Planning Stage:** The orchestrator invokes the **Story Planner agent** with a prompt that includes the chosen (or AI-selected) genre and structure, as well as any user-specified elements. The Planner (via an LLM) returns a high-level outline for the novel. For example, if 3-act structure was chosen, the outline might have Act I, II, III with summaries; if Hero’s Journey, it might list stages like Call to Adventure, Crisis, Return, etc., adapted to the story. The outline also defines the chapters or scenes. This outline is saved to the story state. The user can then review the outline in the UI – they might edit descriptions, reorder points, or accept it as-is.

3. **Iterative Chapter Generation:** For each chapter or section defined in the outline, the orchestrator triggers a sequence of agent calls to produce the chapter content:

   * The **Story Writer agent** is called to draft the chapter. The writer’s prompt includes the specific outline segment (e.g. a summary of what this chapter should accomplish, according to the plan) and relevant context from previous chapters (to maintain continuity). The writer generates several paragraphs of narrative that fulfill the outline’s goals, introducing characters and events accordingly.
   * Next, the **Story Critic agent** can optionally be invoked to review the draft. The critic’s prompt includes the draft text and asks for an analysis of issues or suggestions (plot holes, inconsistent character behavior, boring pacing, etc.). The critic’s output is a list of feedback points. If significant issues are found (e.g. the draft went off-track from the outline or has contradictions), the system can decide to have the writer agent revise the draft **before** editing. In an iterative loop, the writer could be prompted to “revise the chapter considering the following feedback from an editor/critic”. This back-and-forth cycle may repeat until the critic has no major complaints or a fixed number of iterations is reached. *(This design follows the idea from DuoDraft where a creator agent writes a draft, an editor agent critiques it, and the creator revises accordingly, possibly over multiple iterations. Each iteration should improve the story’s quality and coherence.)*
   * After the draft is satisfactory, the **Story Editor agent** is invoked. The editor’s job is to polish the chapter text – fixing grammar or style issues, ensuring the tone matches the genre, and making the prose more engaging or clear. The editor sees the current draft (post any revisions from the writer) and produces an edited version. For example, the editor might rephrase awkward sentences, correct tense consistency, or enhance descriptions. The resulting edited chapter is saved as the final version of that chapter.
   * Now the system may present the edited chapter to the user via the UI. The user can read it and optionally make manual edits or additions if they desire (human-in-the-loop). They might correct factual aspects of the setting or tweak dialogue to their liking. The system will accept these changes (overwriting the AI output for that chapter if edited) before proceeding.

   This process repeats for each subsequent chapter. Importantly, as the story progresses, the agents always incorporate the **accumulated context**: the outline (to know overall direction), the already-written chapters (to maintain continuity of plot and character), and the character profiles. The context might be passed by including summaries or important details in the prompt (given token limit considerations). The story state is continuously updated – after each chapter, a summary of events in that chapter might be added to a context cache, and any new characters or important items introduced are logged.

4. **Finalization Stage:** Once all chapters are generated and edited, the full novel is compiled. The **Story Critic agent** can optionally do a final review of the entire novel. This final critique could check global consistency (e.g., does the ending satisfy the setup? Did the hero’s arc complete per Hero’s Journey stages?). Any last changes could be made based on this (perhaps by the editor agent or by suggesting the user to tweak manually). Finally, the completed novel is output to the user. The user may export it (e.g. copy text, or download as a file). The system could also provide the structured data (outline + chapters) for further editing in other tools.

**Architectural Diagram Description:** In summary, the architecture behaves like a pipeline with feedback loops:

* *UI layer* -> sends user selections to -> *Backend Orchestrator* -> calls -> *Planner (LLM via OpenRouter/Ollama)* -> returns outline -> saves state -> UI might show outline.
* Then for each chapter: Orchestrator -> *Writer (LLM)* -> draft -> *Critic (LLM)* -> feedback -> (potential loop Writer->Critic if needed) -> *Editor (LLM)* -> edited chapter -> save state -> UI shows chapter.
* After all chapters: Orchestrator -> possibly *Critic (LLM)* overall review -> finalize story -> UI presents final story.

The orchestration logic can be visualized as a flowchart where the output of one agent is passed into the next. All agents communicate **through the shared story state** (managed by the orchestrator) – this is akin to a “blackboard” system where each agent writes its contributions and reads what others have written. This design ensures modularity (agents don’t call each other directly, they only interface with the orchestrator and state) and clarity in how information flows.

## Agent Roles and Responsibilities

Each AI agent in the system has a distinct role that contributes to the writing process. Below we define each role, including what input it uses, what output it produces, and how it interacts with other components. All agents use **LLM prompts** under the hood, tailored to their specific task (we provide prompt template examples in the next section). The agents are implemented as classes or modules in TypeScript, each possibly with a method like `generate(outputType, inputs)`. The orchestrator invokes these methods with the appropriate context.

### 1. Story Planner (Outline Planner Agent)

**Role:** The Story Planner is responsible for plotting out the high-level narrative structure of the novel. This agent essentially acts as a story architect or an outline generator.

**Responsibilities:**

* **Select Genre/Structure (if delegated):** If the user did not choose a specific genre or narrative structure, the planner can suggest one. For example, it might randomly or creatively decide on a genre mix (e.g. “a sci-fi adventure”) and a structure (e.g. “Hero’s Journey”) based on a prompt like “suggest an interesting genre and narrative template for a story.” This suggestion would be confirmed by the user before proceeding.
* **Generate Outline:** Using the provided or chosen genre and structure, along with any user-specified story elements, the planner creates a detailed outline. This outline breaks the story into parts: acts and chapters or key plot points.

  * For a **Three-Act Structure**, the planner will outline Act I (setup), Act II (confrontation/rising action), Act III (resolution) with descriptions of what happens in each act, possibly subdividing into chapters or scenes. For instance, Act I might introduce the protagonist and conflict, Act II develops the conflict with challenges, Act III leads to a climax and resolution.
  * For a **Hero’s Journey**, the planner might list the classic stages (Call to Adventure, Meeting the Mentor, Trials, Abyss, Return, etc.) adapted to the user’s context. Not all stages need to be used, but it will provide a progression for the hero character.
* **Incorporate User Inputs:** The agent ensures that any characters or settings the user provided are woven into the outline. If the user listed characters, the planner will assign roles or arcs to them in the outline (e.g. “Alice, the user’s provided protagonist, responds to the Call to Adventure in Chapter 1”). If no characters are given, the planner will invent one or two main characters appropriate to the genre and include their introduction in the outline. Similarly, if a specific setting or theme was provided, the outline will reflect that (e.g. “Set in medieval kingdom X facing a dragon threat”).
* **Output:** A structured outline, likely in a JSON-like format or markdown list. For example, an outline could be a list of chapters each with a title and a brief description of its events. This outline is saved in the story state and presented to the user for approval or editing.

**Interaction:** The Planner runs once at the start (unless the user requests a re-plan). The orchestrator will supply it with the necessary prompt context (genre, structure, etc.) and receive the outline. After this, the Planner’s job is done unless a re-plan is triggered (which would typically restart the process). The clarity of the outline is crucial, as it guides the writer agent; thus the planner may be instructed via its prompt to be **detailed and structured**. The user can modify the outline, which the system will accept as the final outline for the next phase.

### 2. Story Writer (Creative Writer Agent)

**Role:** The Story Writer is the creative engine that turns the outline into narrative text. This agent writes the actual story content (drafts) for each chapter or scene.

**Responsibilities:**

* **Chapter Drafting:** For each chapter (or section) in the outline, the writer agent generates a draft of the story content. It takes the specific outline entry (e.g. “Chapter 2: The hero enters the enchanted forest and faces a trial…”) as a guiding prompt. It also receives context about what has happened *before* in the story to maintain continuity. For example, when writing Chapter 3, the agent should know the summary or key points of Chapter 1 and 2 (which are stored in the state) to avoid reintroducing characters or contradicting earlier events.
* **Genre and Style Adherence:** The writer tailors its writing style to the chosen genre. If the genre is horror, the prose should be suspenseful and dark; if it’s comedy, it might include humor. The prompt given to the writer will include instructions about the style (“Write in the tone of a classic horror novel” or “use whimsical and lighthearted language” for a children’s fantasy, etc.). It ensures that the output is consistent with genre conventions.
* **Incorporate Characters & Settings:** The writer must utilize the characters and setting details in the actual narrative. If the planner or user established that *“John is a brave knight from Avalon”*, the writer will bring John into scenes with that background in mind, and keep his character traits consistent. It will also describe settings as per provided details (e.g. if a castle was described in the outline, it will vividly depict that castle).
* **Encourage Creativity:** We will configure this agent to be relatively **open and creative**. For instance, using a higher temperature setting for the LLM can produce more imaginative and diverse text. The idea is that the writer introduces rich descriptions, dialogues, and possibly new but relevant small plot elements to make the story engaging. The outline is a guide, but the writer can “fill in the blanks” with creative liberty (within the bounds of coherence).
* **Output:** A draft text of the chapter, typically a few paragraphs or pages. The length might be tuned so that all chapters combined reach \~2000–5000 words. If there are, say, 5 chapters, each chapter might be around 500–1000 words in draft form.

**Interaction:** The orchestrator calls the Writer agent for each chapter sequentially. It provides the outline segment for that chapter, the global story info (e.g. a short synopsis of previous chapters, character list), and any user instructions. The writer returns the chapter text which is then passed on to the critic/editor. If a critic suggests major changes, the writer might be called again with a revised prompt (including the critique) to adjust the text. Otherwise, it moves forward. The writer does not need to remember everything on its own – the orchestrator always feeds it the necessary context from the story state (which might include the entire story written so far if the model’s context window allows, or a summary if not).

### 3. Story Editor (Refinement/Editing Agent)

**Role:** The Story Editor acts as a copy-editor or rewriting agent to refine the prose created by the writer. This agent’s focus is on **clarity, style, and correctness** rather than generating new story content (except minor additions or modifications to improve readability).

**Responsibilities:**

* **Proofreading and Grammar:** The editor checks the writer’s draft for any grammatical errors, typos, or awkward phrasing and corrects them. It ensures consistency in tense and perspective (e.g., if the story is in third-person past tense, the editor will fix any sentence that accidentally slipped into present tense).
* **Stylistic Improvements:** The editor can enhance descriptions and dialogue to better fit the tone. For example, if a sentence is technically correct but clunky, the editor will rewrite it more eloquently. It might vary sentence structure for better flow, or improve word choice (e.g., avoid repetitive words, use more vivid verbs). The editor keeps the **voice** consistent – if the story is meant to be in a casual, first-person voice, it will maintain that, or if it’s an epic narrative voice, it ensures all text aligns with that style.
* **Continuity and Consistency:** Although major continuity issues should be caught by the critic or the writer using context, the editor serves as a final check within the chapter. For instance, if within the chapter a character’s name was misspelled or a detail contradicts an earlier sentence, the editor can fix it. The editor has access to the outline and current chapter context as needed, so it knows what the intention of the scene is.
* **Length & Pacing Adjustments:** If the writer’s draft is too long-winded or too brief, the editor might trim unnecessary filler or elaborate on a rushed section. The goal is to keep each chapter engaging and appropriately paced. (We can encode some rules in the prompt, like “If any part of the text seems too slow or too fast, adjust accordingly.”)
* **Output:** A polished version of the chapter text. Ideally, this is ready-to-read prose, requiring no further changes. However, the user may still edit it if they desire different phrasing. The editor’s changes might sometimes slightly alter content (for clarity), but it should not remove essential plot points. If the editor notices a significant issue (like a plot hole that was missed), it could flag it (but primary flagging is the critic’s role; the editor mostly fixes local issues).

**Interaction:** The editor is invoked after the writer (and after any writer revisions prompted by the critic). It takes the latest draft of the chapter as input. The prompt for the editor agent typically includes instructions to not change the meaning of the text, only improve form. We might use a lower temperature (more deterministic output) for the editor to ensure it doesn’t introduce randomness – it should be fairly consistent in its corrections. After editing, the orchestrator saves the edited chapter to state. The user then sees this final AI-edited text. If the user makes manual edits, those edits override the AI’s version for the record. The editor runs for each chapter and potentially could run once on the entire compiled novel at the end as well (to ensure the overall flow between chapters is smooth).

### 4. Story Critic (Quality Assurance/Feedback Agent)

**Role:** The Story Critic is an agent that evaluates the story content (either chapter by chapter, or as a whole) and provides feedback, much like a beta reader or a literary critic. This agent’s purpose is to ensure **coherence, logical consistency, and fulfillment of the narrative structure**.

**Responsibilities:**

* **Critique Drafts for Issues:** When called on a chapter draft, the critic will analyze it for any issues such as:

  * **Logical inconsistencies:** e.g. a character knowing something they shouldn’t yet, or an event that contradicts the outline or earlier chapter.
  * **Plot holes or Missing Elements:** Did the writer forget to include a resolution to a setup from the outline? Is something happening too conveniently without foreshadowing?
  * **Character consistency:** Are the characters acting in ways consistent with their established personalities and the story’s events? (If the hero was described as timid but suddenly acts very brave without development, the critic would note that.)
  * **Narrative structure alignment:** The critic checks if the chapter is fulfilling its role in the overall structure. For instance, if this is the climax chapter (Act III), is the tension at its highest and is the conflict being resolved? If it’s supposed to be a midpoint twist, did one occur?
  * **Engagement and Style issues:** The critic might point out if a section is boring or if the tone shifted improperly (though these are subjective, a clever prompt can make the critic focus on obvious issues).
* **Suggest Improvements:** The critic doesn’t just find fault; it typically also **recommends changes**. For example, “Character X’s reaction seems inconsistent; perhaps add an earlier scene to justify it” or “The pacing in this chapter is slow – consider shortening the conversation.” These suggestions can be fed back to the Writer agent as guidance for revision.
* **Whole-story Analysis:** When used after the full draft is complete, the critic can review the entire story to ensure the narrative arc is satisfying. It could check that the theme or hero’s journey was carried through. It might output a brief commentary like a review, which can be used to further fine-tune if there’s time.
* **Output:** The critic’s output is usually not directly part of the novel, but rather meta-text. It can be a list of bullet points of feedback or a narrative paragraph analyzing the text. The orchestrator will parse this and decide what to do (e.g. if serious issues are found, trigger a rewrite or alert the user).

**Interaction:** The critic can be employed in two ways:

1. **Inline (Iterative) Critique:** After the writer produces a chapter draft (and before the editor finalizes it), the orchestrator invokes the critic on that draft. If the critic’s feedback is substantial, the system can loop back. For example, the orchestrator may prompt the writer: “The editor has given the following feedback: \[feedback]. Please rewrite the chapter incorporating these suggestions.” Then the writer returns a revised draft. This loop can run for a couple of iterations until the critic either “approves” or at least has only minor notes. *(In the DuoDraft example, they allowed up to 3 iterations of writer-editor exchange before moving on, to balance quality with time.)* We can set a similar limit or allow the user to decide to continue refining or not.
2. **Final Critique:** Once the entire story is completed (all chapters), the orchestrator can give the critic the *summary or full text of the novel* and ask for an overall critique. This can be used as a validation step or to produce a “review” for the user’s interest. If it uncovers a glaring problem, the user might choose to go back and fix it manually, or we could theoretically have an agent fix it (though that could get complex). At minimum, it serves as a quality check.

The critic agent uses an LLM prompt that frames it as an expert reviewer or analyst. It may use a balanced temperature (not too high) because we want consistent, reasoned feedback. The orchestrator interprets the critic’s output: it might search the feedback for keywords like “inconsistent” or “plot hole” to decide if a rewrite is needed, or simply always show the feedback to the user for transparency. In summary, the critic ensures the multi-agent system doesn’t operate blindly; it introduces a self-correcting mechanism where the AI can critique itself, leading to more coherent and high-quality stories.

### Other Potential Agents and Roles

*(Note: The plan focuses on the main four agents above, but the system is modular and extensible. In the future, additional specialized agents could be added. For example, a **Character Developer** agent could take an outline and generate detailed character bios before writing begins, or a **Dialogue Enhancer** agent could specifically improve character dialogues after the writer. These would follow the same design principles and integrate into the workflow as needed.)*

## Prompt Templates for Each Agent

Each agent will use a carefully crafted **prompt template** to guide the LLM in performing its role. Prompt design is critical to ensure the model’s output is in line with expectations and incorporates user inputs correctly. We will use a combination of **system messages** (to define the agent’s persona and instructions) and **user messages** (to provide the specific context and task) in the OpenAI chat API style, or an equivalent formatting for other models. The templates will have placeholders that our code fills in with the dynamic content (like genre, outline details, user-provided names, etc.) before sending to the model.

Below are suggested prompt templates for each agent, with explanations of how they use user input and story state. (These are written in a readable format; in implementation, they might be multi-line strings or objects.)

### Planner Agent Prompt Template

```text
System (Instruction to AI): 
"You are a **Story Planner AI** skilled in plotting novels. You will produce a structured outline for a story. The outline should follow the requested narrative structure and genre, listing major acts/chapters with brief descriptions."

User (Task request with inputs):
"Genre: {{genre_choice}}. 
Narrative Structure: {{structure_choice}}.
User Inputs: {{user_inputs}}.

Based on the above, create a detailed outline for a {{genre_choice}} story following the {{structure_choice}} format. 

- Include all key stages of the structure in the outline (e.g., if Hero’s Journey, include major stages like Call to Adventure, Ordeal, Return, etc.).
- If characters or setting details are provided, weave them into the outline (ensure those characters play roles in the plot).
- If no characters are provided, invent suitable main characters and note them in the outline.
- Make the outline comprehensive but concise, with titles or labels for each act or chapter and 1-3 sentences describing what happens."

Assistant (Output): 
"1. **Act I: Introduction** – The protagonist {{protagonist_name}} is introduced in {{setting}}... 
2. **Act II: Trials** – ... 
3. **Act III: Climax and Resolution** – ..." (and so on, in a structured format)
```

**Explanation:** In this template, we first set the system message to ensure the LLM adopts the role of an expert story planner. The user prompt then provides the specific parameters: the `{{genre_choice}}` (e.g. “mystery” or “fantasy”), the `{{structure_choice}}` (e.g. “3-Act Structure” or “Hero’s Journey”), and `{{user_inputs}}` which would include any characters or settings the user gave (for example: *“Main characters: Alice (a curious girl), Bob (a wise old man). Setting: a small village in a forest.”*). The prompt explicitly instructs how to format the outline and what to include. Bulleted guidelines help the model remember to include key structure stages and integrate provided elements. The output is expected to be a numbered or bullet list outline. The orchestrator will parse this (or even directly use it if formatted cleanly) to create the internal representation of the outline. The user inputs placeholders ensure that if the user said “I want a detective and a sidekick as characters,” the outline will incorporate “Detective \[Name] and their sidekick \[Name]” in the Act I description.

### Writer Agent Prompt Template

```text
System:
"You are a **Creative Writing AI** (novelist) tasked with writing story chapters based on a provided outline. Write in an engaging, coherent style, keeping the genre and tone in mind. Stay true to the outline's events and the established facts of the story."

User:
"Outline (Chapter {{chapter_number}} - {{chapter_title}}): {{chapter_outline_description}}
Story Context: {{summary_of_previous}} 
Characters: {{relevant_character_info}}

Now write the full text of **Chapter {{chapter_number}}: "{{chapter_title}}"**. 
- This chapter should cover: {{chapter_outline_description}} 
- Write in a style appropriate for {{genre_choice}} genre. 
- Ensure continuity from previous chapters (see context above). 
- Include dialogue, description, and character actions as needed to make the story vivid.
- Length: Aim for around {{target_length}} words.

[If this is the first chapter, you can start with a hook in the first line to grab the reader’s attention. If not the first, maintain narrative flow from the last chapter.]"

Assistant:
"(The full prose of Chapter X goes here, e.g., 'Chapter 2: The Enchanted Forest'\n\n The morning sun filtered through the dense canopy as Alice stepped into the Enchanted Forest... )"
```

**Explanation:** The writer’s prompt provides the model with everything it needs to write the chapter. We include:

* **Outline info for this chapter:** e.g. chapter number and title (if any) and the description from the Planner’s outline that corresponds to this chapter. This guides the content.
* **Story context:** a brief summary of previous chapters or key points (e.g. “Previously, Alice agreed to help find the lost treasure. She and Bob set out from the village. They encountered a hint of magic in the woods…”). For Chapter 1, this might be empty or just background setup. For later chapters, we generate a short summary of what happened before, pulled from our state. This helps maintain continuity.
* **Characters:** a list of relevant character info (could be all main characters or just those in this chapter). For example, “Alice – a brave but naive village girl; Bob – a wise old mentor guiding Alice.” This reminds the model of personalities and relationships.
* **Instructions:** We clearly ask for the chapter text, indicate the tone/genre, and continuity. We also specify format (the assistant shouldn’t number this output or outline it, it should be narrative text). The note about first chapter vs subsequent ensures a good opening and continuity transitions.
* **Target length:** We can give a word count hint. The model might not hit it exactly, but it helps to say "around 800 words" to avoid too short outputs. Since the novel length is max \~5000 words, if we have 5 chapters we might say \~1000 each, etc.

This prompt would be filled in by the orchestrator for each chapter. For example, for Chapter 2, `{{summary_of_previous}}` would contain a quick summary of Chapter 1 events. We maintain a summary to keep the prompt size manageable instead of always including full text of previous chapters (especially if using smaller-context models). The writer model, with these instructions, will output a narrative. The orchestrator captures that and moves to the next step.

### Editor Agent Prompt Template

```text
System:
"You are a **Story Editor AI**, an expert at proofreading and refining text. Your goal is to improve the given chapter of a novel without changing its meaning. Fix any grammar or spelling errors, improve clarity and style, and ensure the tone remains consistent. Do not add new content unrelated to the original."

User:
"Original Chapter Text:
\"\"\" 
{{chapter_draft_text}} 
\"\"\"

Instructions:
- Correct any grammatical mistakes or typos.
- Rephrase awkward or confusing sentences.
- Maintain the narrative voice and tense ({{tense}}, {{POV}}).
- Ensure consistency with earlier chapters (for example, terminology or character voice).
- Do NOT remove any important events or facts. Only modify the wording for improvement.
- If any detail seems inconsistent or incorrect, you may adjust it **slightly** or flag it in a comment.

Now provide the **edited version** of the chapter text, well-polished and ready for the reader."
```

**Explanation:** The editor’s prompt gives the raw draft (`{{chapter_draft_text}}`) as input inside a quoted block (to clearly delineate it). The system message makes the role clear – an expert proofreader that must not stray from the given text’s meaning. The user instructions bullet out what to do: fix grammar, clarity, maintain voice, etc. We explicitly say not to introduce changes to story facts. (We trust the critic/writer already handled content issues; editor should focus on form, but minor continuity fixes like a name spelling can be considered a “typo”.) If we allow it, the editor could flag issues in comments, but since we have a critic, probably not needed; so we mainly instruct *if something seems off, gently fix*. The output expected is the full chapter text, just improved. This could be returned as plain text. The orchestrator will take this edited text as the final chapter content (unless user edits further). We use a deterministic style (could set temperature low) to ensure the editor’s output is stable.

### Critic Agent Prompt Template

```text
System:
"You are a **Story Critic AI**. You analyze narrative text for logical consistency, plot development, and engagement. Provide honest, constructive feedback as if you are an editor reviewing the story."

User:
"Text to Review:
\"\"\" 
{{text_to_review}} 
\"\"\"

Context:
- This is a {{genre_choice}} story following a {{structure_choice}} structure.
- Current point in story: {{where_we_are}} (e.g. 'Draft of Chapter 3 out of 5', or 'Full draft of the novel').

Please **critique the above text**. Focus on:
- Consistency with the plot and characters (does anything feel out of character or contradictory?).
- Alignment with the intended narrative structure (are we hitting the right plot points for this stage?).
- Engagement and clarity (any part boring or confusing?).

List any **issues or suggestions**:
1. ...
2. ...

If the text is excellent as is, you may say so and highlight what works well. Otherwise, be specific in your critique."

Assistant:
"1. The protagonist’s reaction in this scene seems inconsistent with her timid nature established earlier.
2. The chapter doesn’t clearly address the ‘ordeal’ stage of the Hero’s Journey – consider intensifying the challenge.
3. The pacing is a bit slow during the forest description; maybe shorten it to keep action moving.

Overall, the writing style is good, but addressing the above points could improve the story's coherence and engagement."
```

**Explanation:** The critic’s prompt is structured to yield a list of feedback points. We give it the text to review, which could be a chapter draft or the entire story concatenated (though entire story might require summarization for length). We remind it of the genre and structure to frame its expectations (for example, if structure is Hero’s Journey and we’re at chapter 3, the critic knows around the middle the hero should be facing ordeals or approaching a big trial). The instructions ask for focus on consistency, structure alignment, and engagement – covering logical and literary aspects. The output format requested is a numbered list of issues/suggestions. The example assistant answer shows how it might respond with specific points. This makes it easier for the orchestrator or user to parse the critique. If the story is fine, it can also respond positively (so we know no changes needed).

During implementation, we might adjust the critic’s tone to be either softer or more strict based on user preference (maybe even allowing different “editor personalities” like the DuoDraft project did, such as a strict editor vs. a supportive coach). For now, we assume a balanced constructive critic.

Each prompt template will be stored (possibly as a template string or in a config file) and populated with actual values at runtime. We will test these prompts with sample inputs to ensure the outputs are as expected, tweaking phrasing as needed. Prompt engineering is iterative – for instance, we might find the writer tends to stray from the outline unless we emphasize certain things more strongly, or the editor might need a reminder not to over-compress the text. We will refine the templates accordingly.

## Maintaining Coherence Across Chapters

Maintaining story coherence is a primary challenge in multi-stage generated text. Our system addresses this through both **design decisions** and **technical mechanisms** that ensure each part of the story is consistent with the rest. Here are the strategies we implement for coherence:

* **Central Story State & Memory:** The system keeps an updated repository of story information (the state) that all agent prompts draw from. Characters, settings, and plot points are persistent data. For example, if in Chapter 1 the protagonist is revealed to have a magical sword, this fact will be stored and every later chapter’s prompt will remind the model of it (either through a summary or including that item in the context) to avoid forgetting. This is essentially a form of explicit memory. We might maintain a **story bible** object with entries for each character (name, traits, current status), major plot threads, and world details. The Planner initially populates some of this (characters, initial world setup), and subsequent agents update it. By always referencing this state when generating new content, we reduce contradictions.

* **Outline as a Guiding Blueprint:** The outline itself is a high-level coherence tool. It ensures the narrative has a logical progression from the start. Because the writer agent always receives the outline segment for the chapter, the output should logically follow from previous events and lead into the next. The outline is like a scaffold that the story is built around, keeping the writer from going off on irrelevant tangents. If something in generation starts to drift, the critic or editor will catch it and compare against the outline, bringing it back on track. Essentially, the outline ties together the chapters by predefined checkpoints.

* **Including Previous Context in Prompts:** As described earlier, when generating chapter N, we include a summary of chapters 1 to N-1 in the writer’s prompt. This reminds the model what has happened so far. The summary is carefully curated to include names of characters that are in play, unresolved plot points that need addressing, and other salient details. For example: “Summary so far: Alice left her village and started her quest. She acquired a magical sword that glows near orcs. She befriended Bob. They are now entering the enchanted forest looking for the lost key.” This ensures Chapter N knows that Alice has a glowing sword (so if orcs appear, the sword might glow). The summary is updated after each chapter. This approach is a manual form of context management – straightforward to implement with small text blobs. For longer stories or if using smaller models with limited context length, we could integrate a **vector-based memory**: e.g., store all chapters or important paragraphs as embeddings in a vector store and retrieve the top relevant ones to include in prompts. However, given the target length (max 5000 words), a concise summary will likely suffice.

* **Consistency Checks via Critic:** The Story Critic agent explicitly looks for consistency issues. By design, after each chapter draft, the critic’s feedback will flag things like “Character X suddenly knew Y which hasn’t been revealed” or “This event contradicts what happened in Chapter 2”. This is a safety net to catch things that slip through. The writer then revises those points. Additionally, the Editor agent, while primarily focusing on language, will also be given context to catch minor consistency errors at the line-by-line level (like a day of week name changed or a measure of time inconsistent). Having multiple agents review the content means coherence is checked from different angles.

* **Prompt Templates Maintaining Context:** We ensure that each agent’s prompt template includes necessary context. The prompt templates are structured to pass along relevant information. For instance, the StoryPromptTemplate concept from the DuoDraft system *“maintains consistent context across iterations and structures the communication between agents”*. We emulate this by designing our prompts to always carry over the needed pieces of context (outline, previous chapter summary, etc.) when calling the next agent. This consistent inclusion of context in the chain of prompts is crucial for maintaining coherence throughout the iterative generation.

* **Controlled Creativity with Temperature & Instructions:** To balance coherence with creativity, we will tune the LLM generation settings per agent. The Writer agent can have a moderately higher temperature to allow creative details, but we won’t set it so high that it introduces wild deviations. The Editor and Critic can use lower temperature for deterministic, focused analysis. Also, the system and user instructions in prompts explicitly tell the model to be consistent (e.g., “ensure continuity” is mentioned in the writer’s prompt). These instructions act as guardrails on the model’s creativity, nudging it to remember and align with prior content.

* **Testing and Iteration:** We will test the system on example story scenarios to see if any coherence issues arise. If, for instance, we find that the model tends to forget a minor character that hasn’t appeared for two chapters, we might enforce that the summary includes all characters each time or reintroduce characters in the narrative intentionally. The system can be adjusted as needed (like adding a rule that if a character hasn’t appeared in a while, the next chapter’s prompt reminds the model of their existence explicitly if they should still be around).

By combining a solid outline, shared state, context-rich prompts, and a critic feedback loop, the system keeps the story internally consistent and logically flowing from start to finish. Coherence is further supported by the human-in-loop capability: the user might also catch an inconsistency and edit it. The system should then incorporate the user’s correction into the state (for example, if the user fixes a character detail in one chapter, we update the character profile so subsequent chapters use the corrected info).

## Inter-Agent Communication and State Persistence

The modular agents need to work together in a coordinated fashion. This is achieved through the orchestrator mediating their communication and a persistent state that records each contribution. Key considerations for inter-agent communication and how we manage the state are:

* **Orchestrator as the Message Broker:** Agents do not call or talk to each other directly; the orchestrator orchestrates (hence the name) the sequence and passes the outputs as inputs to the next agent. After each agent finishes, the orchestrator interprets the result and decides the next step. For example, when the Writer returns a chapter draft, the orchestrator stores it and then calls the Critic: `criticFeedback = Critic.review(chapterDraft, context)`. It then examines `criticFeedback`. If it contains significant suggestions, the orchestrator might decide to loop back: `revisedDraft = Writer.write(chapterOutline, context + criticFeedback)`. This can be done by including the critic’s points in the writer’s prompt (as demonstrated in the prompt template section). Once satisfied, it moves forward to `editedChapter = Editor.edit(revisedDraft)`. In code, this could be a simple sequence within an `async` function for each chapter, with conditionals for the loop. By having the orchestrator hold this logic, we centralize the workflow and make it easier to modify (for instance, to disable the critic loop if using a model that tends to already be good or if time is short).

* **Shared Data Structures:** All agents have access to the story state via the orchestrator. In practice, the orchestrator can pass portions of the state to agents. We might design a `StoryState` TypeScript class or interface with fields like `genre`, `structure`, `characters`, `outline`, `chapters`. Each chapter could be an object with `number`, `title`, `outlineSummary`, `draftText`, `editedText`, `summary`. The Planner fills `outline`; the Writer fills `draftText` (and maybe initial `summary` of that chapter’s events for memory); the Editor fills `editedText`; the Critic might append a `needsRevision: boolean` or add notes somewhere (or just return feedback that is processed immediately). By structuring the data, we can easily persist it or transform it (e.g., output to JSON for saving).

* **Persistence Mechanism:** For persistence, we will implement a way to save the story state between sessions or at checkpoints. Options include:

  * Saving to a database: e.g. a `Stories` collection/document storing the entire state as JSON (if using NoSQL), or multiple tables if relational (Stories table for high-level info, Chapters table for chapter texts linked by story\_id, Characters table, etc.). Using a DB is robust if we expect multiple users or long-term storage.
  * Saving to a file: for a single-user local app scenario, writing the state to a JSON or Markdown file on disk (or browser’s IndexedDB if it's a client-side heavy app) could suffice. The user could even download the outline and chapters as separate files.
  * The system should assign an ID to each story/project for retrieval. If multi-user, user authentication and story ownership should be handled (though that’s beyond scope, we note it for completeness).

  State persistence ensures that if the user stops halfway (maybe after outline and first 2 chapters) and comes back later, they can load the project and continue from chapter 3. It also means after the novel is finished, the data is there to export or edit further.

* **Concurrency and Session Management:** If this system is deployed for multiple users, the orchestrator needs to handle separate sessions. Each user’s story state should be isolated (by an ID or in separate DB entries). The backend can spawn parallel orchestrator processes or threads if needed. However, since each story generation might be resource-intensive (LLM calls), some queuing or limiting might be required depending on the infrastructure. In a single-user scenario or during development, this is not a big issue.

* **Human-in-the-Loop Edits:** When the user makes an edit, how do agents get informed? Suppose the user changes a character’s name in Chapter 1 after it was generated. The system should update the `characters` list in the state and perhaps mark that change in the summary of Chapter 1. Downstream, the orchestrator will ensure to use the updated name in prompts. Similarly, if the user rewrites a sentence in the outline or a chapter, that new text becomes the source of truth for subsequent agent calls (we won’t regenerate that part unless user asks). Essentially, any user edits trigger an update in the central state. We will have to be careful to merge these edits – for example, if a user only lightly edits a chapter, we keep the rest of the AI content intact. We might consider locking certain things from automatic changes once user has touched them (so the AI doesn’t override user’s text on a later pass).

* **Communication Format between Agents:** The information passed between agents can sometimes be large (e.g., the entire chapter text from Writer to Editor). We ensure our system can handle these strings. The backend, being in Node, can pass these in memory without issue (just be mindful of memory usage, but a few thousand words is trivial). If we were to distribute agents as microservices, we’d need an API contract, but since our design keeps them within one process, we can call functions and methods directly with rich data. Logging each agent’s input/output is useful for debugging and could be stored for transparency (maybe the user can even toggle a “show intermediate outputs” to see the raw draft vs edited version, etc.).

* **State Updates and Notifications:** After each major step, the orchestrator will update the state and likely notify the front-end of progress. For example, once the outline is ready, it can send a message or response so the UI can display it. After each chapter, do similarly. This could be done via incremental HTTP responses (server-sent events) or periodic polling from the client asking “what’s the latest state for story X?”. In real-time usage, a WebSocket connection pushing events like `{"chapter": 2, "status": "edited", "text": "..."}` would make the UI feel responsive. We can implement a simple progress bar or step indicator on the front-end to reflect which stage is in progress (Outline -> Chapter 1 writing -> Chapter 1 editing -> etc.). This improves user experience for a process that might take a few minutes to generate a whole story.

* **Modularity and Extensibility:** Because each agent is separate, inter-agent communication is essentially the orchestrator calling agent functions with certain parameters. If in the future we add a new agent (say a **Fact-Checker** after Editor that checks for contradictions or continuity again), the orchestrator can be updated to call it in the sequence. The new agent can use the same state (since everything is logged) and perhaps attach its findings or modifications to the state. This modular approach means agents need a well-defined interface (input and output). We will document that interface. For example:

  * Planner: input (genre, structure, any seed content), output (outline object).
  * Writer: input (chapter info, context summary, characters), output (draft text).
  * Critic: input (text to review, context on story progress), output (feedback list, perhaps with a flag if rewrite suggested).
  * Editor: input (draft text, context if needed), output (edited text).

  Each agent could throw an error or return a special result if it cannot complete (like if the model fails). The orchestrator should handle such cases gracefully – maybe retry or ask a simpler model to try, or inform the user.

* **Persistence of AI Outputs and Reproducibility:** It might be useful to store not just the final state but intermediate ones for reproducibility or analysis. For instance, saving the first draft vs final edited chapter. This can be helpful if we want to trace back why a certain change happened. Also, logging the prompts used (with their random seeds or model IDs) can help reproduce the exact story later. This is more of a development concern, but given the creative nature, reproducibility might not be crucial. Instead, focusing on final output is fine, with maybe saving one draft version if needed.

* **Cleaning Up State:** At the end of generation, the state contains everything. If the user starts a new story, a new state is created. We should isolate states per story to avoid any bleed-over (ensuring a fresh state for a fresh story). If this is a web service with many users, memory management might involve cleaning up states that are done or inactive for a long time (maybe save to DB and remove from memory).

**Summary:** The orchestrator-mediated communication ensures each agent works on the right task at the right time with the right data. By persisting the story state and all relevant info, the system maintains continuity and allows pausing/resuming and user edits. The design is robust in that if one agent fails or produces unsatisfactory output, we can intervene (either automatically via another agent or manually via the user) and then continue the pipeline.

Overall, this implementation plan provides a clear blueprint to follow. The next steps would involve setting up the development environment with the chosen stack (e.g., initializing a Next.js app for the front-end, a Node/Express server for the backend), writing the agent classes with their prompt logic, integrating the OpenRouter and/or Ollama API calls, and then testing the entire flow with example inputs. By breaking the problem into these modular components and ensuring good state management, we can build a novel-writing AI system that is both flexible and effective, allowing human creativity to guide AI creativity in a seamless loop.
