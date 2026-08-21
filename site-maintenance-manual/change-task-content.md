# Editing task content

Edit the markdown files under **`_content/<task-name>/`**.

Examples:

- `_content/busy-board/task-description.md`
- `_content/busy-board/what-the-child-does.md`
- `_content/busy-board/task-trailer.md`
- `_content/busy-board/subcomponent-measured.md`
- `_content/busy-board/variables-recorded.md`
- `_content/busy-board/performance-metrics.md`
- `_content/busy-board/ages.md`
- `_content/busy-board/languages.md`
- `_content/busy-board/publications.md`

## Shared text (all tasks)

Text shared across every task lives in **`_content/shared-text/`**:

- `variables-1.md` — intro above each task’s variables list (and above the “See the full list...” button)

## Full variable list / data pipeline

At the end of **Information collected and data processing**, two side-by-side links open `/coming-soon/` in a new tab for now:

- **See full list of Variables stored** (task accent color; two lines)
- **Data processing pipeline** (darker gray)

When the real destinations are ready, change the `href`s in `_includes/task-report.html` (keep `target="_blank"`).

## Task trailer video link

Each task folder also has `task-trailer.md`. Put only the video URL on the first line (Vimeo or YouTube). Example:

```md
https://vimeo.com/442138273?fl=pl&fe=vl
```
