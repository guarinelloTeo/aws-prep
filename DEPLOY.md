# Quick Deploy to GitHub Pages

## From your computer:

```bash
# Clone this repo
git clone https://origin.cursor.com/git/teodoro-queiroz-guarinello/tmp-a5d9a36c6c3ba9cc.git
cd tmp-a5d9a36c6c3ba9cc

# Create a new GitHub repo at github.com/new named: ai-engineer-roadmap

# Add GitHub as remote
git remote add github https://github.com/YOUR-USERNAME/ai-engineer-roadmap.git

# Copy standalone HTML as index
cp ai-roadmap-standalone.html index.html
git add index.html
git commit -m "Add GitHub Pages"

# Push to GitHub
git push github main

# Enable GitHub Pages:
# Go to: github.com/YOUR-USERNAME/ai-engineer-roadmap/settings/pages
# Source: Deploy from main branch
# Root directory: / (root)
# Save

# Your site will be live at:
# https://YOUR-USERNAME.github.io/ai-engineer-roadmap/index.html
```

## OR Even Simpler - Upload via GitHub Web:

1. Go to: https://github.com/YOUR-USERNAME/ai-engineer-roadmap
2. Click "uploading an existing file"
3. Upload: ai-roadmap-standalone.html
4. Rename it to: index.html
5. Commit
6. Enable Pages in Settings → Pages
7. Done!
