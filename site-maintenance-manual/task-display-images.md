# Task display images

## Why images live in `assets/`, not `_content/`

Task **text** belongs in **`_content/<task>/`** (for example `_content/busy-board/task-description.md`). Those markdown files are pulled into pages with Jekyll includes. They are not meant to be served as public files by themselves.

Task **images** (screenshots of what the child sees, form layouts, and so on) must live in:

```text
assets/images/<task-name>/
```

Example for Busy board:

```text
assets/images/busy-board/image1a.png
assets/images/busy-board/image1b.png
assets/images/busy-board/image2a.png
assets/images/busy-board/image2b.png
```

Jekyll does not publish folders whose names start with an underscore (`_content`, `_includes`, `_layouts`, …). If images stay only under `_content/<task>/images/`, the local preview and the live site will not find them, even though the files exist on disk.

`assets/` is a normal public folder, so anything placed there is copied into the built site and can be linked from HTML.

## How `set-display.md` uses the images

Each task has `_content/<task>/set-display.md`. That file can contain HTML that points at the matching assets folder:

```html
<img src="{{ '/assets/images/busy-board/image1a.png' | relative_url }}" alt="...">
```

Busy board’s `set-display.md` builds a 2x2 contingency-style matrix (Form A / Form B × Inputs OFF / Inputs ON) from the four images above.

## Workflow when you change an image

1. Replace or add the file under **`assets/images/<task>/`**.
2. Keep the filename in sync with whatever `set-display.md` references.
3. Refresh the local preview. If the browser still shows the old picture, hard-refresh (**Ctrl+Shift+R**) to bypass the image cache.

Optional: you may keep a working copy of images under `_content/<task>/images/` for your own organization, but **the site only serves `assets/images/<task>/`**. If you edit the `_content` copy, copy it into `assets` before previewing or publishing.
