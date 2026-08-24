# Editing task content

Edit the markdown files under **`_content/<task-name>/`**.

Examples:

- `_content/busy-board/task-description.md`
- `_content/busy-board/task-description2.md`
- `_content/busy-board/what-the-child-does.md`
- `_content/busy-board/set-display.md` — HTML (or markdown) that shows task display illustrations; busy board uses a 2x2 contingency matrix
- `_content/busy-board/task-trailer.md`
- `_content/busy-board/some-results.md` — markdown list of key findings (one sentence per bullet)
- `_content/busy-board/task-validation.md`
- `_content/busy-board/subcomponent-measured.md`
- `_content/busy-board/variables-stored-short.md` — summary list shown under **Variables stored** on the task page
- `_content/busy-board/variables-recorded-full.md` — full variables table (`<tt>name</tt>`, meaning, values) opened by the “See full list…” button
- `_content/busy-board/performance-metrics.md`
- `_content/busy-board/ages.md`
- `_content/busy-board/languages.md`
- `_content/busy-board/publications.md`

## Display images (`set-display.md`)

`set-display.md` is rendered under **What the child sees and does**. It can be plain markdown or HTML (with Liquid).

**Important:** image files used by the site must live under **`assets/images/<task>/`**, not under `_content/`. See [task-display-images.md](task-display-images.md).

## Shared text (all tasks)

Text shared across every task lives in **`_content/shared-text/`**:

- `variables-1.md` — intro above each task’s variables list (and above the “See the full list...” button)

## Full variable list / data pipeline

After the on-page **Variables stored** summary (`variables-stored-short.md`):

- **See full list of Variables stored** opens `/<task>/variables/` in a new tab (content from `variables-recorded-full.md`)

After **Performance metrics**:

- **Data processing pipeline** still opens `/coming-soon/` until a real destination exists

## Task trailer video link

Each task folder also has `task-trailer.md`. Put only the video URL on the first line (Vimeo or YouTube). Example:

```md
https://vimeo.com/442138273?fl=pl&fe=vl
```
