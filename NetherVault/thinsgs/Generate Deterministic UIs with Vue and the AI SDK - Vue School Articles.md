We've all seen AI generate cool UI components from scratch but, given the freedom to generate HTML, CSS, and JavaScript from nothing, usually makes for unpredictable results. What if you need to empower users to generate UI elements in your apps that are a bit more deterministic?

What do I mean? Here are just a few examples:

1.  Generate the proper UI elements for a questions in a survey. (Radio buttons, checkboxes, dropdowns, etc. that behave in the expected app-specific way)
2.  Generate a list of fake product cards to get a user started with there ecommerce store. (Each product with a name, image, description, etc laid out nicely in a grid or list)
3.  Generate UI elements such as charts, weather widgets, etc in the context of a chat application based on the output of the LLM for a better user experience over just text.

## What “deterministic UI” means

Before moving on, let's examine the term "determistic UI" more closely. I know, I know, maybe you understand already, if so, feel free to skip this but I think it's important to understand how I'm using the term before we move on.

In this context, deterministic means the same inputs always produce the same UI. Sure, that UI may be displaying different information (a different survey question/options, a different product, etc) but the UI should not change based on the model's response. Instead:

-   The model produces structured data.
-   Your app validates it.
-   Vue renders it via an existing component.

This keeps the interface predictable and integratable with the rest of your app while giving users the creativity and speed of an LLM to produce the best results.

## Use the AI SDK’s Object Generation

That's enough conceptual talk, let's get to the good stuff.

### Using the AI SDK on the Backend

Using the AI SDK’s object generation we can stream structured data back from an LLM. This has several advantages over plain text. It gives you structure, schema validation, and reproducibility.

At a high level, the process looks like this:

1.  Define a schema for the UI data [using Zod](https://zod.dev/)
2.  Generate the structured output from the LLM.
3.  Validate and normalize the string response.
4.  Pass structured data to a component to render in Vue

Best of all with the AI SDK, the syntax looks exactly the same no matter which provider you use (Gemini, OpenAI, Anthropic, etc) and handles #3 of the process above for you 100%.

```
const productSchema = z.object({
  id: z.string().describe("The unique identifier for the product"),
  name: z.string().describe("The name of the product"),
  image: z.string().url().describe("The URL of the product image"),
  description: z.string().describe("The description of the product"),
  price: z.number().describe("The price of the product"),
});

const result = streamText({
  model: google("gemini-2.5-flash"),
  // this would also work for a single object with Output.object({ schema: productSchema })
  // instead of Output.array({ element: productSchema })
  // but we want to generate multiple products
  output: Output.array({
    element: productSchema,
  }),

  prompt: "Generate a list of 10 products for an ecommerce store",
});

return result.toTextStreamResponse();
```

### Using the AI SDK on the Frontend

Then on the frontend, you use the `useObject` composable to render the data in a component.

```
<script setup lang="ts">
  const productSchema = // the same schema you used on the server (can be declared in a shared file or just inline)
  const { object, submit: generateProducts, isLoading, stop, clear } = useObject({
    api: '/api/products/generate',
    initialValue: {
      elements: [] as z.infer<typeof productSchema>
    }
    schema: schema
  })
</script>
<template>
  <div>
    <h1>Products</h1>
    <ul>
      <ProductCard
        v-for="product in object.elements"
        :key="product.id"
        :product="product"
      />
    </ul>
  </div>
</template>
```

With this little bit of code, you can now generate a list of product cards that seamlessly streams in. Furthermore they are all guaranteed to look like the other product cards in your app. BUT, you have the LLM do the heavy lifting of generating the data for you.

Finally, this of course is just one example. You could use the same approach to generate all manner of UI in your own apps.

## Use AI SDK Tools to Generate Custom UI Elements in a Chat Application

The previous example works in the context of any ol' application. But let's say that you want to take your AI Chat interfaces to the next level by displaying custom UI depending on the LLM output. For example, if the LLM responds with weather data, you display a weather widget instead of boring text.

![Weather Chat Widget screenshot from the Nuxt UI Chat template](https://blog.vueschool.io/wp-content/uploads/2026/02/weather-chat-widget.jpg)

The AI SDK makes this super easy to do with tools!

On the server side, you define a tool that generates the structured weather data.

```
const weatherTool = tool({
  description: "Get weather info with 5-day forecast",
  inputSchema: z.object({
    location: z.string().describe("Location for weather"),
  }),
  execute: async ({ location }) => {
    // fetch the weather data from an API
    return {
      temperature: "temp goes here",
      humidity: "humidity goes here",
      windSpeed: "wind speed goes here",
      dailyForecast: "daily forecast goes here",
      // etc...
    };
  },
});
```

Then you give this tool to an API endpoint that takes in the current conversation messages and streams the tool call output back to the frontend with `createUIMessageStream`.

```
const stream = createUIMessageStream({
  execute: async ({ writer }) => {
    const result = streamText({
      model: model,
      system: `... system prompt ...`,
      // the current conversation messages from the frontend 👇
      messages: await convertToModelMessages(messages),
      stopWhen: stepCountIs(5),
      tools: {
        weather: weatherTool,
      },
    });
  },
});
```

(Again, I like to do this in Nuxt, but it would work in other JS backend frameworks as well.)

Finally on the frontend, you can use the `new Chat` constructor to manage the conversation and display the custom weather widget UI based on the tool call output.

```
<script setup lang="ts">
  const chat = new Chat({
    id: "chat-id",
    messages: [],
    transport: new DefaultChatTransport({
      api: "/api/chats/[chat-id]",
    }),
  });
</script>
<template>
  <ul>
    <li v-for="message in chat.messages" :key="message.id">
      <div v-for="(part, index) in message.parts">
        <!-- NOTE: this is a custom component that you would need to create -->
        <ToolWeather v-if="part.type === 'tool-weather'" :invocation="part" />

        <!-- etc...-->
        <TextPart v-else-if="part.type === 'text'" :value="part.text" />
      </div>
    </li>
  </ul>
</template>
```

## Wrapping Up Deterministic UIs with Vue and the AI SDK

I hope this article has given you a good overview of how to use the AI SDK to generate deterministic UIs with Vue.

Maybe I'm a simpleton, but it was a game-changer for me when I first understood this stark difference between letting AI generate everything from scratch vs letting AI generate data for you and then rendering with your own app-specific components.

Layer on top the ease with which you can now use the AI SDK to generate custom UI elements in a chat application and you have a powerful tool for building AI-powered interfaces!

Thanks for reading!