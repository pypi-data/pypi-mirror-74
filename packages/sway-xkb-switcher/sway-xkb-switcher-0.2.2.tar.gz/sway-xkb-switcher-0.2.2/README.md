sway-xkb-switcher
===============

## Description

This app records keyboard layout for a sway windows when you leave them.
And when you come back it is restore keyboard layout.

This project is forked from https://github.com/inn0kenty/i3-xkb-switcher
and adapted to work with sway window manager.

This project is under construction yet.

## Install

```bash
$ pip install sway-xkb-switcher
```

Also you can download compiled binary from [release page](https://github.com/nmukhachev/sway-xkb-switcher/releases).

## Usage

```bash
$ sway-xkb-switcher --input-identifier <identifier>
```

You can view a list of actual identifiers by looking at

```bash
$ swaymsg -t get_inputs | grep identifier
```
The identifier corresponds to that from the input section of your sway config.

To enable debug mode run with `--debug` key.

By default it writes logs to stdout. You can specify path by `--log-path` option.
