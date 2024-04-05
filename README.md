# @thewebforge/usewordpress

[![Npm Package](https://img.shields.io/npm/v/@thewebforge/usewordpress.svg)](href="https://www.npmjs.com/package/@thewebforge/usewordpress)
[![Npm Downloads](https://img.shields.io/npm/dm/@thewebforge/usewordpress.svg)](href="https://www.npmjs.com/package/@thewebforge/usewordpress)
[![Npm Package](https://img.shields.io/badge/docs-📚-blue.svg)](href="https://usewordpress.thewebforge.dev)

___

This package is a collection of usefil React hooks created especially to be used in your WordPress Theme or Plugin development.

- <strong>[Why useWordPress](#why-usewordpress)</strong>
- <strong>[Installation](#installation)</strong>

Certainly! Below is a template for the README file for your npm package "useWordPress":

---

## Why useWordPress

`useWordPress` is a collection of React Hooks designed specifically for WordPress Themes and Plugins developers. These hooks leverage the functionalities provided by the `@wordpress/elements` package, thereby utilizing WordPress React and avoiding the need to add another copy of React as a dependency.

## Installation

To install `useWordPress`, simply use npm or yarn:

```bash
npm install usewordpress
```

or

```bash
yarn add usewordpress
```

## Usage

```jsx
import { useConfirm } from "@thewebforge/usewordpress";
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
- Special thanks to the WordPress community for their contributions and support.

## Support

If you have any questions, issues, or suggestions, feel free to open an issue on GitHub or contact the maintainer directly.
