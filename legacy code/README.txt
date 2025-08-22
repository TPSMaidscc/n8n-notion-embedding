
Quick start
===========

1) Replace the editor link:
   - Open your workflow in n8n, copy the editor URL, and set it in index.html:
     const WORKFLOW_EDITOR_URL = 'https://YOUR-N8N-DOMAIN/workflow/<ID>';

2) Replace the preview JSON (optional):
   - Export your workflow from n8n, remove any credentials, and overwrite workflow.json.

3) Deploy to any static host:
   A) GitHub Pages
      - Create a new repo and push these files.
      - In repo settings → Pages, set branch = main, folder = / (root).
      - Your site will be live at https://<username>.github.io/<repo>/

   B) Netlify (drag & drop)
      - Go to app.netlify.com → Add new site → Deploy manually.
      - Drag this folder into the upload area.
      - (Optional) Add a _headers file to allow embedding in Notion (see below).

   C) Vercel / Cloudflare Pages
      - Create a new project from this folder. Accept defaults.

4) Embed in Notion (optional):
   - Copy your live site URL and paste it into a Notion /Embed block.

-----
Allow embedding in Notion (Netlify/Cloudflare)
Create a file named `_headers` in the root with:

/*
  Content-Security-Policy: frame-ancestors https://www.notion.so https://notion.so *
  X-Frame-Options: ALLOW-FROM https://www.notion.so

Note: GitHub Pages usually works without extra headers.
