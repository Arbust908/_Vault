What’s the best way to represent a hex map in text so it’s easy for LLMs and AI agents can access their information, reference them and then easily convert that into images with a hex mapping program
ChatGPT said:

Could you clarify a few things so I can tailor the best approach for you?

What kind of data does each hex contain (e.g., terrain type, coordinates, special features)?

Do you want the text format to be optimized for human readability, machine parsing, or both?

Are there any specific hex mapping programs you're targeting (like Hexographer, Wonderdraft, or custom tools)?

Do you want the output to include hex grid positioning (like axial or offset coordinates)?

This will help me provide a solution that balances clarity, structure, and ease of integration.

You said:
1- yes all of those and maybe travel encounters tables, part of which Kingdom or region it is
2- I would like it to be a bit of both but if a machine parsing will have drastic effects I’m willing to use that as long as there is a way to make it human readable
3- not any in specific, the one that is the best for all that we expect
4- yes that would be the best
ChatGPT said:

Thanks! I’ll find the most effective ways to represent hex maps in text so both LLMs and AI agents can easily parse them, with support for terrain types, coordinates, regional context, and travel tables. I’ll also include formatting suggestions that balance human readability with machine parsing, and look into which hex mapping tools work best for importing and converting that structure into visual maps.

I’ll let you know once everything is ready for review.

Research completed in 7m · 12 sources · 95 searches

Best Text-Based Representation for Hex Maps Usable by AI and Mapping Tools

Representing Hex Maps in Text for LLMs and Mapping Tools
Use a Structured Data Format (JSON or YAML)

One reliable approach is to represent the hex map as structured data (e.g. JSON or YAML). In a JSON schema, each hex cell can be an object with its coordinates and properties (terrain type, region, encounter table, etc.). For example, the HexJSON standard (by ODI Leeds) encodes each hexagon with an identifier and its coordinates (row r and column q in an axial grid) along with associated data values
r-bloggers.com
. A JSON snippet might look like:

{
  "hexes": [
    { "id": "0101", "q": 1, "r": 1, "terrain": "Mountain", 
      "region": "Kingdom of Westvale", "encounter_table": "Mountain Encounters" },
    { "id": "0102", "q": 2, "r": 1, "terrain": "Swamp", 
      "region": "Kingdom of Westvale", "encounter_table": "Swamp Encounters" },
    …
  ]
}


This format is machine-readable (easy for an AI agent or program to parse) while still being understandable to humans, especially if formatted with indentations. YAML could be used similarly – it is essentially a human-friendly superset of JSON. In fact, “YAML, depending on how you use it, can be more readable than JSON”
stackoverflow.com
 due to its clean, indented syntax. Using YAML, the same data might be:

hexes:
  - id: "0101"
    q: 1
    r: 1
    terrain: Mountain
    region: Kingdom of Westvale
    encounter_table: Mountain Encounters
  - id: "0102"
    q: 2
    r: 1
    terrain: Swamp
    region: Kingdom of Westvale
    encounter_table: Swamp Encounters
  # ... more hex entries ...


Both JSON and YAML allow you to include all relevant info per hex – such as terrain type, features/landmarks, which kingdom or region it belongs to, and what travel encounter table to use. This explicit structure makes it easy for an LLM to locate and reference information (it can search by hex ID or coordinates in the text) and also straightforward to convert into visuals with a mapping tool or script. For instance, a conversion script could read this data and plot each hex on an image, coloring by terrain and adding labels/icons based on the fields.

Text-Based Hex Map Formats (e.g. Text Mapper)

Another effective method is to use a specialized plain-text notation designed for hex maps. One proven format comes from Alex Schroeder’s Text Mapper tool, which represents a hex map as a list of lines, one per hex (plus lines for roads/rivers). Each line contains the hex coordinate and tags for terrain, features, and labels. For example, a simple map description might look like:

0101 mountain "mountain"  
0102 swamp "swamp"  
0103 hill "hill"  
0104 forest "forest"  
0201 empty pyramid "pyramid"  
0202 tundra "tundra"  
0203 coast "coast"  
… 


In this format, 0101 is the hex grid coordinate (column 01, row 01 in a rectangular/offset grid), followed by the terrain type and an optional feature or label in quotes
forum.autarch.co
. In the snippet above, hex 0101 is a mountain hex (with a “mountain” label/icon), 0102 is swamp, 0201 has an “empty” terrain (perhaps plains/desert) with a pyramid feature labeled “pyramid,” etc. This textual representation is quite human-readable (a game master can read “0104 forest ‘forest’” and understand there’s a forest at hex 1,4) and also easy for a machine to parse (the format is consistent and delimited).

 

The Text Mapper system even allows encoding additional details like roads, rivers, and region borders using special line syntax. For example, a road or river can be specified by listing a sequence of hexes joined with dashes and the keyword road or river
forum.autarch.co
. You can also include subtle map features: the format supports indicating terrain transitions at hex edges by directional codes. For instance, an advanced entry might be:

2410 default nw-mountain east-mountain sw-forest snowmountain heavypine cave "Dwimmermount"


This single line (for hex 2410) encodes that the hex’s northwest side borders a mountain, its east side borders mountains, southwest side borders forest (ensuring those neighboring transitions are drawn smoothly), the main terrain is a snowy mountain with heavy pine forest, and there is a cave feature labeled “Dwimmermount”
forum.autarch.co
. While such specifics are optional, it shows that a text-based format can capture complex map information in a structured way.

 

One big advantage of this approach is the existence of tools to automatically convert the text into an image. For example, Text Mapper can directly generate a hex map graphic (SVG image) from the text description. You write or edit the text file for your map, then run the mapper to get a visual map. In practice, you can “submit your text description of the map” to the tool and “click the button ‘Generate Map’ … [which] displays a new page with a nice SVG map of your hexes”
consp.org
. This SVG output can be further edited or directly exported to PNG/PDF. In other words, the text is the map – updating the text (terrain, features, etc.) and regenerating will update the image, which is great for keeping the visual in sync with the data.

Including Regions and Encounter Tables

Whichever format you choose, you should incorporate the extra information (beyond just terrain) in a clear way. Region/Kingdom affiliation can be included as a field or tag. In a JSON/YAML approach, this could be a "region" property for each hex as shown above. In a text-mapper style format, region borders can be drawn with special lines (e.g. listing hexes and using a border keyword to outline a kingdom’s boundary
forum.autarch.co
) or you could simply tag hex entries with a region code or name. For example, you might list the region name in parentheses or as a prefix: 0105 forest (Kingdom of X) – as long as you do it consistently, an AI agent could learn to parse it.

 

For travel encounter tables, you likely don’t want to embed an entire encounter table in each hex, but rather reference which table applies. A practical way is to assign each hex a category or key that corresponds to a specific encounter table. In JSON, you might have "encounter_table": "MountainEncTable" (the name of the table for mountainous terrain). In a pure text format, you could append a shorthand code, e.g. 0101 mountain "mountain" [ET:Mountain] or similar, to denote which encounter chart to roll when traveling there. The key is to make it unambiguous (perhaps using a clear marker like ET: or a separate column if using CSV/tabular text) so that both humans and AI can spot it. An AI parsing this text could then easily answer, for instance, “Hex 0101 uses the Mountain encounter table and lies in Kingdom X.”

 

If you maintain separate encounter tables (in text or spreadsheets), you can still link them by name or ID. The AI agent could be given both the hex map text and the encounter table data, and because the hex entries include a reference, the agent can cross-reference them. The structured format thus serves as an index: each hex knows which region and encounter set applies, guiding the AI or any program on how to handle that hex.

Balancing Human- and Machine-Readability

Since you indicated you want the format to be both human-readable and machine-friendly, it’s important to strike a balance in how information is encoded. Here are some tips to achieve both:

Use Descriptive Keys/Tags: In structured formats, use clear field names (region, terrain, encounter_table) rather than cryptic codes. In a custom text format, use plain language tokens (e.g. forest, mountain, road) rather than single-letter abbreviations. This ensures a human can read it without a legend, and an AI will also have an easier time (since the words are self-explanatory).

Keep a Consistent Structure: Consistency is crucial for machine parsing. Each hex entry should follow the same pattern. For example, if using “<HexID> <terrain> <feature> <optional label> (Region) [Encounter]”, stick to that order throughout. Consistency allows even a simple regex or AI pattern recognition to parse the details reliably.

Avoid Ambiguity: Delimit different types of information clearly. JSON/YAML inherently do this with key-value pairs. In a free-form text line, you might use punctuation or ordering to separate, as in the example of using quotes for labels, or brackets for encounter table keys. You can also break long descriptions into multiple lines or entries if it aids clarity (for example, list major landmarks in a separate section, or have a section listing which hex IDs belong to which kingdom).

Include Comments/Documentation: If using YAML or a custom text file, you can include comments to make it more human-friendly (YAML supports comments with # which the machine will ignore
stackoverflow.com
). For instance, at the top of the file you might write a short legend explaining the format or any shorthand used. This way, anyone reading the file (or any AI with general knowledge) can understand it more readily.

By applying these practices, you ensure that the text representation remains readable like a concise gazetteer of your world, while still being rigorously structured. A well-structured text file can be treated almost like a database of hexes – something an AI agent can query or reason over. In fact, such text could be fed into an LLM’s context, and the LLM would then be able to answer questions like “What terrain is in hex 0203?” or “Which kingdom does hex 0506 belong to?” by referring to the data you provided.

Converting Text to a Hex Map Image

Finally, to address converting the text into an actual map image: if you use a standard or well-known format, you can leverage existing tools. For example, if you maintain the map in HexJSON/GeoJSON, there are libraries and tools (in JavaScript, Python, etc.) that can render hex maps from that data
r-bloggers.com
. If you use the Text Mapper format, the tool itself (and its modern ports/plugins) will generate an SVG for you automatically
consp.org
. Many GMs also use Tiled or other map editors that import JSON – you could potentially format your data to Tiled’s JSON schema (or CSV layer data) and import to get an editable map.

 

Keep in mind that some mapping programs might not directly accept a custom text input without a conversion step. In such cases, you can write a small converter script. The consistency of JSON/YAML makes it straightforward to transform into the required input for a mapping tool. For instance, you could read the JSON and for each hex, draw a colored hexagon on a blank image canvas (using a library or even a spreadsheet grid). Similarly, with the Text Mapper text, since it’s line-based, it’s easy to write a parser that plots the map or to use the existing Text Mapper software. The key benefit of these text formats is that the data and the map are separate – you maintain the truth in the text, and the image is just one view of it. This separation means AI agents can use the text for reasoning and descriptions, and whenever needed you can regenerate or update the visual map without manual redraw.

 

Example: A hex map generated from a text description. In this figure, different colors represent various terrains and small icons denote features (e.g., towns or landmarks). Such an image can be produced automatically by feeding a text-based hex map description into a compatible program. The underlying text data is easy for an AI to parse, while the image helps human players visualize the world.

 

By representing your hex map in a structured text format, you gain flexibility: you (or an AI) can quickly search and reference any hex’s info, update details with simple text edits, and use tools to render it into an attractive map. This approach is widely regarded as a best-of-both-worlds solution for hexcrawl campaigns, combining machine accessibility with human readability and ensuring your hex map’s data can travel between your AI assistant, your notes, and your mapping software smoothly.

 

Sources: Structured hex map formats and tools
r-bloggers.com
consp.org
; examples of text-based hex map representation
forum.autarch.co
forum.autarch.co
; human-readability considerations
stackoverflow.com
troypress.com
.