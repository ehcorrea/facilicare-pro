# zctechs Expo Template

This is a template for mobile projects using [Expo](https://expo.dev), designed to accelerate the development of modern and scalable React Native applications.

## Main features

- **Predefined theme:** Comes with a ready-to-use color theme and token structure for easy customization.
- **React Query pre-configured:** Includes [React Query](https://tanstack.com/query/latest) for efficient and scalable data fetching and caching, already set up for immediate use.
- **Unit tests pre-configured:** Includes [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com/docs/react-native-testing-library/intro/) for unit testing, already set up for immediate use.

## Main dependencies

- **[nativewind](https://www.nativewind.dev/):** Tailwind CSS styling for React Native.
- **[zustand](https://zustand.docs.pmnd.rs/getting-started/introduction):** Simple, fast, and scalable state management.

## Development tools

- **[commitlint](https://github.com/conventional-changelog/commitlint):** Enforces commit message conventions.
- **[commitizen](https://github.com/commitizen/cz-cli)** & **[cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog):** Helps you write semantic commit messages.
- **[git-cz](https://github.com/streamich/git-cz):** Interactive commit interface.
- **[eslint](https://github.com/eslint/eslint):** Linter to maintain code quality.
- **[prettier](https://github.com/prettier/prettier):** Automatic code formatting.
- **[husky](https://github.com/typicode/husky)** & **[lint-staged](https://github.com/okonet/lint-staged):** Git hooks and pre-commit checks.
- **[typescript](https://www.typescriptlang.org/):** Static typing for JavaScript.
- **[jest](https://jestjs.io/):** Testing framework for JavaScript and TypeScript.

## Getting Started

1. Create a new project using this template:

```bash
  # Using yarn
  yarn create expo-app --template zctechs-expo-template

  # Using npm
  npx create-expo-app@latest --template zctechs-expo-template
```

2. Install dependencies:

```bash
  # If using yarn, run the following to ensure the lockfile exists and install dependencies
  touch yarn.lock && yarn

  # Or, if using npm
  npm install
```

3. Start the project:

```bash
  yarn start

  # or

  npm start
```

This template provides a solid, productive, and standardized foundation for mobile projects with Expo and React Native, including a pre-configured theme and React Query setup.
