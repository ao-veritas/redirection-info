# Starter Kit for _AO_ Application Development with _Teal_

This starter kit includes tooling that allows application developers on _AO_ to use _Teal_ - **_Lua_ with strong typing**.

It allows for a workflow similar to that in web development with _Typescript_, while catering to the requirements of _AO_ (to have a single `.lua` output file to be loaded into an _AO_ process)

## How to Use

1. `luarocks install tl && luarocks install cyan 0.3.1-2 && luarocks install amalg`
2. Write your code in _Teal_ (using `.tl` files)
3. Add your modules into the Squishy file (used to generate the final amalgamation). Modify the build.sh folder on adding a new tl file that needs to be built.
4. Use `npm run build` to create your `main.lua` output in the build-lua folder
5. `npm run deploy` to deploy each file into processes defined in processes.yaml

## How It Works

[Teal](https://github.com/teal-language/tl) is a superset of _Lua_ that allows for typed programming in _Lua_.

_Teal_ relates to _Lua_ as _Typescript_ relates to _Javascript_.

[Cyan](https://github.com/teal-language/cyan) is the official build tool for teal.

[Squish](https://github.com/LuaDist/squish) is a tool that allows for the amalgamation of multiple _Lua_ files into a single _Lua_ file.

This project seeks to provide a workflow similar to that in web development with _Typescript_, while catering to the requirements of _AO_ (to have a single `.lua` output file to be loaded into an _AO_ process via AOform/Aoconnect)

## AO-native modules and state

Two aspects about AO need to be considered:

1. Native modules like "ao", "json" ...
2. Native global state like `ao`, `Handlers`, ...

This project includes an ao type definition for ao globals.

### Adding more type definitions

It's possible to include type definitions for external packages, similar to the type definitions in _Typescript_.

See the [_Teal_ docs](https://github.com/teal-language/tl?tab=readme-ov-file) for more information.

Many packages already have existing type definitions: See the [Teal-types](https://github.com/teal-language/teal-types/) repo for more information.

You can grab a type defintion from there and place it into src/<your project>/typedefs

For developer convenience this starter kit **includes ao-native global state type definitions**. See `src/ao.d.tl` for details.

### Using you own Lua modules

If you wish to use packages/modules that are not natively typed you can place the lua file alongside a teal type defintion inside packages/<package name>/

You can then require them inside your teal project as usual via `require("yourmodule.yourfile")`. Teal will use the type definition for checks while copying the actual lua file during the build process.

To prevent Cyan from pruning these packages, add them into tlconfig.lua under the dont_prune section. Otherwise Cyan will warn about foreign files in the build dir and even prune/delete them if ran with the --prune flag.

### Amalgamations

For easier development we use squishy to produce a single output file in lua. Add your modules into the squishy file to configure this (optional).

### Batteries included

This project includes a [Teal bint](https://github.com/AutonomousResearch/teal-bint) implementation with typing support and increased type safety for big integer math and also a teal native implementation of the ao utils.
