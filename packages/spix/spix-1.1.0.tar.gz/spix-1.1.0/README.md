# SpiX 🦜 Yet another TeX compilation tool: simple, human readable, no option, no magic

SpiX is [yet another compilation tool](https://www.ctan.org/topic/compilation) for ``.tex`` files. It aims at being simple and human readable. Every piece of configuration is written in the ``.tex`` file itself, in a clear format (a list of console commands).

## Why SpiX?

With SpiX, the compilation process of a ``.tex`` file (Is it compiled using latex? pdflatex? xelatex? lualatex? Should I process its bibliography? with bibtex or biber? Is there an index?) is written in the ``.tex`` file itself, in a human-readable format (a shell script). That way:

- when you want to compile two years later, you don't have to guess the compilation process;
- you can send the ``.tex`` file to someone, and that's it: no need to send detailed instructions or a Makefile along with it (everything is in the ``.tex`` file);
- the compilation process is human readable: it can be understood by anyone who is able to read a very basic shell script. In particular, one can read it even if she does not know SpiX.

### The ``.tex`` file

Write the compilation process of your ``.tex`` file as a shell script, before the preamble, as lines starting with ``%$``:

    % Compile this file twice with lualatex.
    %$ lualatex foo.tex
    %$ lualatex foo.tex
 
    \documentclass{article}
    \begin{document}
    Hello, world!
    \end{document}

You can also replace the file name with ``$texname``. That way, you don't have to worry about the file name when writing your commands.

    % Compile this file twice with lualatex.
    %$ lualatex $texname
    %$ lualatex $texname

### Compilation

To compile the ``.tex`` file, run SpiX:

    spix foo.tex

Spix will parse the ``.tex`` file, looking for shell snippets (lines before the preamble starting with ``%$``), and run them.

That's all!

## Documentation

The complete documentation is available on [readthedocs](http://spix.readthedocs.io).

To compile it from source, download and run:

    cd doc && make html

## What's new?

See [changelog](https://framagit.org/spalax/spix/blob/master/CHANGELOG.md).

## Download and install

The preferred way to install SpiX used pip:

    python3 -m pip install spix

Other installation methods can be found in the [documentation](https://spix.readthedocs.io/en/latest/install/).

## License

*Copyright 2020 Louis Paternault*

SpiX is licensed under the [Gnu GPL 3 license](https://www.gnu.org/licenses/gpl-3.0.html), or any later version.
