import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal:async (config)=>{
    config.plugins?.push(
      /**@see https://gitnub.com/aleclarson/vite-tsconfig-paths */
      tsconfigPaths({
        projects:[path.resolve(path.dirname(_dirname),"tsconfig.json")],
      })
    );
    return config;
  }
};
export default config;
