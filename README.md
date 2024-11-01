# HANUKKAN
This repository holds the source code for the [Hanukkan website](https://hanukkan.com)<br>
Hanukkan is a social community project created to spread a little light in these difficult times, where once again, like the story of Hanukkah, many of us find ourselves hiding.<br>
For more information about the project, visit the site.

## Development
The code is maintained by [Dean Ayalon](@DeanAyalon)<br>
For errors, feature requests, or questions, please [open an issue](https://github.com/DeanAyalon/wix-hanukkan/issues/new) or reach out to me [via email](mailto:dev@deanayalon.com).

This site is hosted on [Wix](https://wix.com) using the GitHub integration.<br>
In order to contribute to the code, [fork the repository](https://github.com/DeanAyalon/wix-hanukkan/fork), commit your changes, and [create a pull request](https://github.com/DeanAyalon/wix-hanukkan/compare).

### CRITICALLY IMPORTANT!
#### NEVER use the `wix publish` command!
> It is also not recommended to use `wix preview`.

Additionally, please make sure your `wix.config.json` file is updated with the latest UI version before performing a commit:
- If you edited the UI in the local editor - It should be updated automatically.
- If you did not, then [open the editor](#scripts), hover over the 'save' button, and match your config file with the version displayed.

### Optional
For optimal development experience, install the devDependencies.

You can do this using [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) or a different Node package manager of your choice.
```sh
npm install -d
```

To synchronize types with the Wix API and site elements, you'll need to authenticate with your Wix account, which needs to have [Site Editor permissions](https://manage.wix.com/dashboard/b1125880-0a91-447e-9421-a800818949f5/roles-and-permissions).
```sh
npx wix login
```

### Scripts
To run a script, use `npm run <script-name>`

- **`sync`** - Syncs your `.wix` directory with the UI version specified in [wix.config.json](wix.config.json).
- **`dev`** - Syncs the `.wix` types, and opens the Wix Studio editor with your local code.
  > This stays running and automatically reloads the editor preview when code is updated locally. It also automatically syncs the types whenever the save button is pressed.
- **`open`** - Opens the website in your browser.

### Typical Workflow
Sync your development environment with the site:
```sh
git pull upstream main                  # Pull the latest version of the official repository
npm run dev                             # Start the Local Editor
```
- If UI is edited, save changes
- If UI is not edited, ensure `uiVersion` is up to date in wix.config.json
```sh
git commit -m "Modified x, fixed y"     # Commit your changes, please use a meaningful message
git push                                # Push your changes to your fork
```
- [Open a pull request on GitHub](https://github.com/DeanAyalon/wix-hanukkan/compare)

## UI Changes
For changes to the UI, none of this is necessary!<br>
Simply update the site using the regular Wix Studio editor :)