# Chain Starter Project

This project is a starter template for building a Nuxt application with a LangChain backend, AI integration (Ollama, OpenRouter), and Supabase persistence.

---

## TL;DR summary

You’ll bootstrap with **Yarn 4** and `nuxi`, add **@nuxt/ui-pro** (which auto-installs Tailwind v4) and **@nuxtjs/supabase**.  Linting moves to **@antfu/eslint-config**.  On the server you’ll mount a **LangChain.js** backend that can talk to **Ollama** locally and **OpenRouter** remotely, plus a **SupabaseVectorStore** for RAG.  The front-end chat UI is composed from the Nuxt UI Pro Chat\* components.  Citations mark the salient docs for each piece.

---

## 1  Bootstrap the repo with Yarn

```bash
yarn dlx nuxi init . --ts
```

Choose

* **Rendering:** Universal
* **Deployment:** Static (Nitro preset)
* **State management:** Pinia (`@pinia/nuxt` auto-added)([OpenRouter][1])

> **Tip:** Yarn 4 (Berry) keeps dependencies in `.yarn/cache` and uses Plug’n’Play; commit the lockfile for repeatable installs.

---

## 2  Install runtime & dev deps

```bash
# Runtime
yarn add @nuxt/ui-pro @nuxtjs/supabase langchain \
         @langchain/core @langchain/community \
         @supabase/supabase-js

# Dev
yarn add -D @antfu/eslint-config typescript vite vitest
```

* **@nuxt/ui-pro** pulls in `@nuxt/ui` *and* configures `@nuxtjs/tailwindcss`, so no separate Tailwind step needed([Nuxt UI][2], [Answer Overflow][3]).
* Antfu’s flat ESLint config installs with one line and zero Prettier overlap([npm][4]).

---

## 3  Configure `nuxt.config.ts`

```ts
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui-pro',
    '@nuxtjs/supabase',
    '@pinia/nuxt',
  ],

  ui: { /* Nuxt UI Pro theming here */ },

  supabase: {
    redirectOptions: { login: '/', callback: '/confirm' }
  },

  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY
    },
    supabaseServiceKey: process.env.SUPABASE_SERVICE_KEY
  }
})
```

* The Nuxt Supabase module injects composables like `useSupabaseClient()` on the client and server helpers such as `serverSupabaseServiceRole()` for admin-key queries([Nuxt Supabase][5]).

---

## 4  Tailwind v4 & UI

Nuxt UI Pro already wires Tailwind v4 via the module; if you need custom tokens create `tailwind.config.{js,ts}` and rely on the new **CSS-based** config style introduced with v4([Nuxt UI][6]).

---

## 5  Supabase setup

1. Create a project, choose **Region** close to your users.
2. In **Database → Extensions** enable **pgvector** for embeddings.
3. Grab

   * `SUPABASE_URL`
   * `SUPABASE_ANON_KEY` (client)
   * `SUPABASE_SERVICE_KEY` (server—**keep private**).
4. Create tables:

   ```sql
   create table documents (
     id uuid primary key,
     content text,
     embedding vector(1536)
   );
   ```
5. Add appropriate **RLS**; bypass in server routes with `serverSupabaseServiceRole()` when you need admin reads/writes([Nuxt Supabase][5]).

---

## 6  LangChain backend (RAG + LLMs)

### 6.1  Vector store

```ts
import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
```

SupabaseVectorStore uses the pgvector column you created and exposes `addDocuments`, `similaritySearch`, etc.([Langchain][7])

### 6.2  Local LLM (Ollama)

```ts
import { ChatOllama } from "@langchain/community/llms/ollama";
const llama3 = new ChatOllama({ model: "llama3:8b", baseUrl: "http://localhost:11434" });
```

LangChain wraps Ollama for streaming or non-streaming chats([Langchain][8]).

### 6.3  Remote LLMs (OpenRouter)

```ts
import { ChatOpenAI } from "@langchain/openai";

const orChat = new ChatOpenAI({
  modelName: "nousresearch/hermes-3-llama-3.1-405b",
  openAIApiKey: process.env.OPENROUTER_API_KEY,
  basePath: "https://openrouter.ai/api/v1"
});
```

OpenRouter is OpenAI-compatible; you just swap the basePath and key([OpenRouter][1]).

### 6.4  RAG pipeline skeleton

```ts
import { RetrievalQAChain } from "@langchain/community/chains";
import { OpenAIEmbeddings } from "@langchain/openai";

const embeddings = new OpenAIEmbeddings({ apiKey: process.env.OPENROUTER_API_KEY }); // or local model
const vectorStore = await SupabaseVectorStore.fromExistingIndex(
  embeddings,
  { client: serverSupabaseServiceRole(event) }
);

export default eventHandler(async (event) => {
  const chain = RetrievalQAChain.fromLLM(llm, vectorStore.asRetriever());
  const body = await readBody(event);
  return await chain.call({ query: body.prompt });
});
```

LangChain’s RAG tutorial gives the conceptual background and incremental build-up([Langchain][9]).

---

## 7  Front-end chat UI with Nuxt UI Pro

```vue
<script setup lang="ts">
const { messages, input, send } = useChat() // from vercel/ai sdk
</script>

<template>
  <UApp>
    <ChatMessages :messages="messages" class="prose mx-auto max-w-2xl" />
    <ChatPrompt v-model="input" @submit="send" />
  </UApp>
</template>
```

`ChatMessage`, `ChatMessages`, `ChatPalette`, `ChatPrompt`, and `ChatPromptSubmit` are part of Nuxt UI Pro and already themed to match Tailwind v4 tokens([Nuxt UI][10]).

---

## 8  Linting & scripts

* Create `eslint.config.mjs`

  ```js
  import antfu from '@antfu/eslint-config'
  export default antfu()
  ```
* Add scripts:

  ```jsonc
  "scripts": {
    "dev": "nuxt dev",
    "build": "nuxt build",
    "preview": "nuxt preview",
    "lint": "eslint . --fix"
  }
  ```

([npm][4])

---

## 9  Model menu (OpenRouter)

| Model                    | Strength                |
| ------------------------ | ----------------------- |
| Rocinante 12B            | lightweight, runs cheap |
| Mistral Nemo 12B Celeste | balanced creative       |
| WizardLM-2 8×22B         | high-quality reasoning  |
| Nous Hermes-3 405B       | SOTA multilingual       |
| Unslopnemo 12B           | code-friendly           |
| Llama 3.3 Euryale 70B    | strong generalist       |

All are available through the OpenRouter endpoint without SDK changes([OpenRouter][1]).

---

## 10  Back-log / next steps

* Guardrails: add `zod-schema` output parser for structured responses.
* Observability: pipe logs to Supabase `edge_logs` or LangSmith.
* Auth: leverage Supabase Row-Level Security tied to `supabase.auth.getSession()`.

---

### Why we removed Tailwind install steps

Nuxt UI Pro ships with Tailwind v4 and auto-registers the Nuxt Tailwind module, so the old manual `npx tailwindcss init -p` dance is redundant([Answer Overflow][3]).

---

**That should get you to a full-stack, RAG-ready Nuxt application with minimal boilerplate.  Holler if you want code samples for specific server routes or embeddings!**

[1]: https://openrouter.ai/docs/community/frameworks "Integration Frameworks | OpenRouter SDK and Library Support | OpenRouter | Documentation"
[2]: https://ui.nuxt.com/getting-started/installation/pro/nuxt "Installation - Nuxt UI Pro"
[3]: https://www.answeroverflow.com/m/1324518248393211964?utm_source=chatgpt.com "nuxtui tailwind plugin - Nuxt"
[4]: https://www.npmjs.com/package/%40antfu/eslint-config "@antfu/eslint-config - npm"
[5]: https://supabase.nuxtjs.org/services/serversupabaseservicerole "serverSupabaseServiceRole - Nuxt Supabase"
[6]: https://ui.nuxt.com/getting-started/migration?utm_source=chatgpt.com "Migration - Nuxt UI"
[7]: https://js.langchain.com/docs/integrations/vectorstores/supabase/ "SupabaseVectorStore | ️ Langchain"
[8]: https://js.langchain.com/docs/integrations/llms/ollama/ "Ollama | ️ Langchain"
[9]: https://js.langchain.com/docs/tutorials/rag/?utm_source=chatgpt.com "Build a Retrieval Augmented Generation (RAG) App: Part 1 - LangChain"
[10]: https://ui.nuxt.com/components/chat-message "Vue ChatMessage Component - Nuxt UI Pro"
