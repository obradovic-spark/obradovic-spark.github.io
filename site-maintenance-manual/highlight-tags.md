# Highlight tags for task content

Use these tags inside any file under `_content/<task-name>/`. They work like HTML tags: wrap the phrase you want to emphasize.

| Tag | Effect | Example |
|-----|--------|---------|
| `<b>…</b>` | Plain black bold | `<b>Total Play Time:</b>` |
| `<hi>…</hi>` | Bold in the task accent color | `Curiosity and <hi>Exploration</hi>` |
| `<key>…</key>` | Soft tinted background plus task-colored text | `Measures <key>self-directed exploration</key>` |
| `<tt>…</tt>` | Monospace / code style (like `` `code` `` or LaTeX `\texttt{}`) | `<tt>total_play_time</tt>` |
| `<note>…</note>` | Callout block with a colored left border | `<note>Available in English and Spanish.</note>` |

Task accent colors: Busy board = pink, Scientific reasoning = orange, Crafting = yellow, Alternative solutions = cyan, Problem solving = green, Same-different selection = purple, Explore and learn = red, Memory game = blue, Challenge preference = teal.

## Quick examples

```md
- <b>Total Play Time:</b> The total amount of time in seconds...

Curiosity and <hi>Exploration</hi>

| Variable | Meaning |
|----------|---------|
| <tt>id</tt> | Unique participant identifier |
```

Use `<tt>` for variable names in the **Variables stored** tables (`variables-stored-short.md` and `variables-recorded-full.md`). To list more than one variable in the same cell, separate them with `<br>`:

```md
| <tt>var1</tt><br><tt>var2</tt> | Shared meaning | values |
```

## Notes

- You can still use normal markdown (`**bold**`, lists, links, tables).
- After editing, hard-refresh the browser (`Cmd + Shift + R`) so you are not seeing a cached page.
