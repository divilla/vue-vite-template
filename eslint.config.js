import vue from "eslint-plugin-vue";
// import _import from "eslint-plugin-import";
// import { fixupPluginRules } from "@eslint/compat";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends(
    "./.eslintrc-auto-import.json",
    "airbnb-base",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
), {
    plugins: {
        vue,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
            defineEmits: true,
            document: true,
            localStorage: true,
            GLOBAL_VAR: true,
            window: true,
            defineProps: true,
            defineExpose: true,
        },

        ecmaVersion: 12,
        sourceType: "module",
    },

    rules: {
        "no-undef": 0,
        "vue/no-multiple-template-root": 0,
        "no-console": 0,
        "import/no-unresolved": 0,
        "import/extensions": 0,
        "import/no-extraneous-dependencies": 0,
        "import/prefer-default-export": 0,
    },
}];
