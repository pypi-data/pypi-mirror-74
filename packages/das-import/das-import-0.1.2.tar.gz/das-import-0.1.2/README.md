# Decks Against Society card importer

## Usage

Install using pipsi:
```shell
$ pipsi install das-import
```

Prepare separate CSV files for black and white cards, each card text in separate line[^1] and run:
```
$ das-import -u <your username> -p <password> -e <target deck ID> -c <card color> <path to file>
```

[^1]: Multiline cards need to be wrapped in double quotes.
