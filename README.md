# MAGIC tasks

A website to share information for all tasks in the MAGIC project: [Shareable website](https://obradovic-spark.github.io) | [Magic project site](https://sparklab.stanford.edu/magic) 

# Admin manual: How to run this site?

This website was created by Adriana F. Chávez De la Peña on Summer 2026 (feel free to reach out if you have any questions at adrifelcha@gmail.com ), but it is meant to be accessible and easy to manage :-) 

In this section I will walk you through:

1) How to change the info displayed in the website

2) How to make more structural changes (add new sections, change layout, etc)

## 1) Change the website's content!



## 2) Change the website's structure!

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

Then open [http://localhost:4000](http://localhost:4000) in your favorite internet browser. Jekyll rebuilds when you save files; refresh the page to see changes.

To stop the server, press **Ctrl + C** in the terminal.
