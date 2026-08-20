# Highlight tags for task content

Use these tags inside any file under `content/<task-name>/`. They work like HTML tags: wrap the phrase you want to emphasize.

Colors automatically match the task currently being viewed (Busy board = pink, Scientific reasoning = orange, Crafting = yellow, Alternate uses = cyan).

| Tag | Effect | Example |
|-----|--------|---------|
| `<hi>…</hi>` | Bold text in the task accent color | `Curiosity and <hi>Exploration</hi>` |
| `<key>…</key>` | Soft tinted background plus task-colored text | `Measures <key>self-directed exploration</key>` |
| `<note>…</note>` | Callout block with a colored left border | `<note>Available in English and Spanish.</note>` |

## Quick examples

```md
Busy Board measures <hi>curiosity</hi> through open-ended play.

The main outcome is <key>exploration quality</key>.

<note>This task includes a knowledge test after exploration ends.</note>
```


## Notes

- You can still use normal markdown (`**bold**`, lists, links).
- Standard `<b>…</b>` stays plain bold and does **not** pick up the task color. Prefer `<hi>` when you want the accent color.
- Put the tags in the `.md` files under `content/`; the site styles them automatically.
