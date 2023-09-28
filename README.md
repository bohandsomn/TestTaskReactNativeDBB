This is a new **[React Native](https://reactnative.dev)** project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ app:

### For Android

```bash
# OR using Yarn
yarn android
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Congratulations!

You've successfully run the React Native App.

# Documentation

### Versions

`yarn` was used to build the application.

| Технологія   | Версія  |
| :----------- | :------ |
| node         | 18.10.0 |
| yarn         | 1.22.5  |
| npm          | 8.19.2  |
| react-native | 11.3.7  |

### .env

```bash
REACT_APP_DROP_BOX_ACCESS_TOKEN=accessToken
REACT_APP_DROP_BOX_BASE_URL=https://api.dropboxapi.com/2
```

### Methodology

Used `FSD` [methodology](https://feature-sliced.design/docs/get-started/overview).

### REST

Thanks to `axios`, `DropBoxFileService` was created, which is an API to the [dropboxapi](https://api.dropboxapi.com/2) resource.

### Navigation

Used `@react-navigation/native-stack`, `@react-navigation/native-stack` for navigation.

### UI & Notification

`@gluestack-ui` is used as a library for styling components.

### State manager

To save data, `redux`, `react-redux`, `@reduxjs/toolkit` are used.

## Implementation

### Toolbar

Toolbar contains `Share` and `Upload` buttons, which are not implemented. `ModalCreateFile` and `ModalCreateFolder` open modal windows with a form to create a file and folder respectively.

### Content

Content contains a list of files and folders. If you click on three dots, a `context menu` will open, where you can delete a file / folder. Clicking on a folder takes you to a page where the root folder is the one that was clicked.
