// The idea of this "imports.ts" file is to avoid circular dependency loops by providing a single file for all imports.
// The idea is taken 2022-02-09 from https://medium.com/visual-development/how-to-fix-nasty-circular-dependency-issues-once-and-for-all-in-javascript-typescript-a04c987cf0de
// In the source website the file containing the export statements is called "internal.js" instead of "imports.ts", but I felt "imports" feels a bit more intuitive to me.

// TODO: Add all files here, and make all import statements in the project import from this file. Exception: External modules (Obsidian, Electron, Node.js, other libraries) can be imported directly from their sources, because they do not introduce a risk of circular dependencies.



// SECTIONS - Keep in alphabetical order!

// Miscellaneous files in the same folder as imports.ts
export * from "./IDGenerator";

// Preactions
export * from "./preactions/Preaction";
export * from "./preactions/Preaction_Prompt";

// Prompts
export * from "./prompt/prompt_fields/createPromptField";
export * from "./prompt/prompt_fields/PromptField";
export * from "./prompt/prompt_fields/PromptField_Text";
export * from "./prompt/prompt_fields/PromptFieldConfiguration";
export * from "./prompt/Prompt";
export * from "./prompt/PromptFunctions";
export * from "./prompt/PromptModal";

// Settings
export * from "./settings/setting_elements/createPromptField";
