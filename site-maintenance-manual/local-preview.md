### Pro-tip: Check changes locally before making them public!

This site uses [Jekyll](https://jekyllrb.com/) with the [`github-pages`](https://pages.github.com/) gem, which allows you to preview any change you make on your local computer before they are published on the online version of this site.

You will need to install:

- [Homebrew](https://brew.sh/)
- Ruby 3.3 via Homebrew (`brew install ruby@3.3`)
- Ruby 3.3 on your `PATH` (see `~/.zprofile`)
- Bundler (`gem install bundler`)

You can check/verify your installation  by running

```bash
ruby --version   # should show 3.3.x
bundle --version
```

Once you have ensured you have bundler installed, you will need to go to the directory where this website is stored in your comuter and run the following line from the terminal:

```bash
bundle install
```

You only need to run this once. 

After that, you will be able to access the local preview server by running the:

```bash
bundle exec jekyll serve
```

Then open [http://localhost:4000](http://localhost:4000) in your favorite internet browser. Jekyll rebuilds when you save files (including markdown under `_content/`); refresh the page to see changes.

To stop the server, press **Ctrl + C** in the terminal.