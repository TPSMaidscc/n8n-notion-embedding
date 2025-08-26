# 🚀 GitHub Pages Deployment Guide

## 📋 Setup Instructions

### 1. Repository Settings
- Go to your repository → **Settings** → **Pages**
- Set **Source** to: **"GitHub Actions"** (not "Deploy from branch")

### 2. Secrets Configuration
- Go to your repository → **Settings** → **Secrets and variables** → **Actions**
- Make sure you have the secret: `N8N_API_KEY` with your n8n API key

### 3. Automatic Deployment
The site will automatically deploy to `https://yourusername.github.io/n8n-notion-embedding` when you:
- Push to the `main` branch
- The GitHub Actions workflow will:
  1. Read your `N8N_API_KEY` secret
  2. Inject it securely into the HTML
  3. Deploy to GitHub Pages

## 🔧 Local Development

When running locally (`http://localhost:8000`):
- The app will show: `🚨 DEVELOPMENT MODE ERROR: No API key available!`
- For localhost development, manually replace `__N8N_API_KEY__` with your actual API key in `index.html`
- Production deployments will show: `✅ Using injected API key from GitHub Secrets`

## 🔐 Security

- ✅ **API key is secure** - stored in GitHub Secrets
- ✅ **Not exposed in code** - injected during build time only  
- ✅ **localhost still works** - uses fallback for development

## 🌐 Usage

Your deployed app will be accessible at:
```
https://yourusername.github.io/n8n-notion-embedding/?workflowId=YOUR_WORKFLOW_ID
```

Replace `YOUR_WORKFLOW_ID` with any n8n workflow ID you want to display.
