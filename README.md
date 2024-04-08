# @thewebforge/usewp

[![Npm Package](https://img.shields.io/npm/v/@thewebforge/usewp.svg)](href="https://www.npmjs.com/package/@thewebforge/usewp)
[![Npm Downloads](https://img.shields.io/npm/dm/@thewebforge/usewp.svg)](href="https://www.npmjs.com/package/@thewebforge/usewp)
[![Npm Package](https://img.shields.io/badge/docs-📚-white.svg)](href="https://usewp.thewebforge.dev)

___

This package is a collection of useful React hooks created especially to be used in your WordPress Theme or Plugin development project.

- <strong>[Why useWP](#why-useWP)</strong>
- <strong>[Installation](#installation)</strong>
- <strong>[Usage](#usage)</strong>
- <strong>[Available Hooks](#available-hooks)</strong>
- <strong>[Contributing](#contributing)</strong>
- <strong>[License](#license)</strong>
- <strong>[Acknowledgements](#acknowledgements)</strong>
- <strong>[Support](#support)</strong>

## Why useWP

`useWP` is a collection of React Hooks designed specifically for WordPress Themes and Plugins developers. These hooks leverage the functionalities provided by the `@wordpress/elements` package, thereby utilizing WordPress React and avoiding the need to add another copy of React as a dependency.

## Installation

To install `useWP`, simply use npm or yarn:

```bash
npm install @thewebforge/usewp
```

or

```bash
bun add @thewebforge/usewp
```

## Usage

```jsx
import { useConfirm } from "@thewebforge/usewp";
import { check, trash } from "@wordpress/icons";
import { Button } from "@wordpress/components";

const MyComponent = () => {
  const [confirmDelete, setConfirmDelete] = useConfirm();

  return (
    <Button
          variant="link"
          icon={confirmDelete ? check : trash}
          isDestructive={!confirmDelete}
          onClick={() => {
            if (!confirmDelete) {
              setConfirmDelete(true);
              return;
            }
            // Handle Deletion
          }}
        >
          Delete
        </Button>
  );
};

export default MyComponent;
```

## Available Hooks

- `useBattery`: A hook to access battery information.
- `useConfirm`: A hook to trigger an action after it has been confirmed.
- `useDarkMode`: A hook to enable dark mode.
- `useDebounce`: A hook to debounce state changes.
- `useDocTitle`: A hook to dynamically update the document title.
- `useFirstMount`: A hook to determine if the component is mounted for the first time.
- `useLocalStorage`: A hook to interact with local storage.
- `useMediaQuery`: A hook to track media query matches.
- `useStorage`: A hook to interact with session storage.
- `useValueWithDefault`: A hook to provide a default value if the initial value is undefined.

## Contributing

Contributions are welcome! Please feel free to submit pull requests to contribute to this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- This package relies on the `@wordpress/elements` package for WordPress React functionalities.
- Special thanks to the WordPress community for their work.

## Support

If you have any questions, issues, or suggestions, feel free to open an issue on GitHub or contact the maintainer directly.
