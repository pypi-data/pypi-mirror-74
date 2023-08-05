# Game Hub

This project contains the games: rock paper scissors, hang man and tic tac toe at the 
moment. These are stored in individual files that can be played by themselves. They are
then organised in a CLI that has all of them callable via a command. A key feature is
that these commands can be called anywhere in the system after initialising the setup.py
file. The CLI can also create a repl and has other commands.

## How to use

First download it:

```
pip install gameHub
```
Now whenever you write gamehub (the name of the command group) it will show a help 
menu of all commands and command groups. You can get the commands of those command
groups by appending their name to gamehub 
```
C:\path\path\path> gamehub
Usage: gameHub [OPTIONS] COMMAND [ARGS]...

  the group of all the commands

Options:
  -h, --help  Show this message and exit.

Commands:
  generate   Pick Random Game to play
  last_game  plays the last game you played
  play       group of all games
  play_list  play's a random game from a list
  repl       creates a repl and a exit command

```

## Tested With

* Tested with Pytest

## Contributing

[Brooklyn Germa](https://gitlab.com/bGerma) and [Abel Germa](https://gitlab.com/agerma)

## Versioning

We use the [SemVer](http://semver.org/) standard for versioning 

## Authors

* **Brooklyn Germa** - *Leader of project* - [bGerma](https://gitlab.com/bGerma)
* **Abel Germa** - *Assistance and Guidance* - [aGerma](https://gitlab.com/agerma)

## Acknowledgments

* Abel helped every step of the way
* Thanks to Mum for supplying us with Buna