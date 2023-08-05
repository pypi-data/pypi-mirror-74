# pytra #

## Preface ##
pytra is a simple command-line tool that translates stuff. It uses googletrans library for this purposes.
pytra is capable of translating (and detecting the source language) words, sentences and even files.

## Installation ##
### Using pip ###
python>3.7 required:

     $ pip install pytra

## Usage ##
pytra is very easy to use. It has several subcommands:
* detect -- detect languages
* detect-file -- detect file's language.
* show-language-code -- show language codes.
* translate -- translate stuff
* translate-file -- text file to translate

Also soon pytra will be capable of pipelining

You can use -h or --help option with each subcommand for more details as follows:

     
     $ pytra <subcommand> [-h|--help]


### Examples ###
Translate a sentence to French:

    $ pytra translate "hello, world" -t fr
    Bonjour le monde
