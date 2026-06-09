Analyze the provided unstructured text. Translate it into a highly compressed, machine-readable format that focuses on maximum information density.

**Core Requirement:** You must achieve the highest possible degree of compression without losing *any* factual details, data points, numbers, specific terminology, or nuanced meaning (knowledge fidelity must be 100%). Do not summarize, interpret, or generalize; compress the exact information present in the source.

**Compression Rules:**

1. **Telegraphic Style:** Eliminate all non-essential words. Drop articles (a, an, the), copula verbs (is, are, was, were, be), and redundant phrasing. Keep only nouns, active verbs, necessary adjectives/adverbs, and prepositions essential for meaning.
    - *Example:* Change "The results of the experiment indicated a significant increase in pressure" to "Experiment results indicated significant pressure increase."
2. **Abbreviations & Symbols:** Use standard abbreviations (e.g., 're:' regarding, 'w/' with, 'bc' because, 'approx' approximately) and symbols to replace words where distinctness is maintained (e.g., '->' for leads to/causes, '+' for and/plus, '>' for greater than, '=' for equals/is equivalent to).
3. **Structure Preservation:** Maintain the logical flow of the source text. Treat distinct paragraphs or logical sections from the source text as individual compressed lines in the output block. Do not merge separate paragraphs into one massive block.

Output Format:

METADATA_START

TYPE:[e.g., Email, Article, Report, Text Snippet]

SUBJECT/SOURCE:[Brief descriptive title or source if evident]

METADATA_END

CONTENT_START

[Compressed text line representing paragraph/section 1]

[Compressed text line representing paragraph/section 2]

...

CONTENT_END

Input Text:

[Insert any text here]