# Highlight tags for task content

Use these tags inside any file under `_content/<task-name>/`. They work like HTML tags: wrap the phrase you want to emphasize.

| Tag | Effect | Example |
|-----|--------|---------|
| `<b>…</b>` | Plain black bold | `<b>Total Play Time:</b>` |
| `<hi>…</hi>` | Bold in the task accent color | `Curiosity and <hi>Exploration</hi>` |
| `<key>…</key>` | Soft tinted background plus task-colored text | `Measures <key>self-directed exploration</key>` |
| `<note>…</note>` | Callout block with a colored left border | `<note>Available in English and Spanish.</note>` |

Task accent colors: Busy board = pink, Scientific reasoning = orange, Crafting = yellow, Alternate uses = cyan.

## Quick examples

```md
- <b>Total Play Time:</b> The total amount of time in seconds...

Curiosity and <hi>Exploration</hi>
```

## Notes

- You can still use normal markdown (`**bold**`, lists, links).
- After editing, hard-refresh the browser (`Cmd + Shift + R`) so you are not seeing a cached page.
