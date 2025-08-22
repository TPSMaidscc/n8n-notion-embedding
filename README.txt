
n8n Dynamic Workflow Editor
============================

A powerful, modern web interface for viewing, editing, and managing your n8n workflows. 
Perfect for embedding in Notion or any other platform that supports iframe embeds.

🚀 NEW: DYNAMIC EDITING CAPABILITIES
- Connect directly to your n8n instance via API
- Load any workflow from your n8n instance
- Real-time editing with auto-save functionality
- No more static JSON files - everything is dynamic!

Quick Start
===========

## Method 1: URL Parameters (Recommended & New!)

You can now pass workflows directly via URL parameters! Perfect for Notion embedding:

**Option A: Direct workflow JSON**
```
https://your-site.com/n8n-editor/?workflow={"nodes":[...],"connections":{}}
```

**Option B: Load from external URL**
```
https://your-site.com/n8n-editor/?workflowUrl=https://github.com/user/repo/raw/main/workflow.json
```

**Option C: Load from n8n API**
```
https://your-site.com/n8n-editor/?workflowId=123&n8nUrl=https://your-n8n.com
```

## Method 2: Interactive Mode

1) Deploy to any static host (see hosting options below)

2) Open your deployed site and:
   - Enter your n8n instance URL (e.g., https://your-n8n-instance.com)
   - Click "Connect" 
   - Enter your API key when prompted
   - Select any workflow from the dropdown
   - Start editing directly in the interface!

## Method 2: Static Mode (Legacy)

1) Replace the preview JSON:
   - Export your workflow from n8n, remove any credentials
   - Overwrite workflow.json with your exported workflow

2) Update the edit link:
   - Open your workflow in n8n, copy the editor URL
   - Update the WORKFLOW_EDITOR_URL in index.html

## Hosting Options

### GitHub Pages (Free)
- Create a new repo and push these files
- Go to repo Settings → Pages
- Set source to "Deploy from branch", branch = main, folder = / (root)
- Your site will be live at https://<username>.github.io/<repo>/

### Netlify (Free)
- Go to app.netlify.com → Add new site → Deploy manually
- Drag this folder into the upload area
- Site will be live in seconds with a random URL

### Vercel (Free)
- Create a new project from this folder
- Accept all defaults - site will be live immediately

### Cloudflare Pages (Free)
- Create a new project from this folder
- Configure build settings if needed

## Embedding in Notion

1) Copy your hosted site URL
2) In Notion, type `/embed` and paste your URL
3) Resize the embed block as needed
4) You can now view and edit workflows directly in Notion!

## API Key Setup

### Getting your n8n API Key:
1) Open your n8n instance
2) Go to Settings → Personal Access Tokens
3) Click "Create token"
4) Copy the generated token

### Security Notes:
- Never commit API keys to public repositories
- Use environment variables or config files that are gitignored
- Consider using read-only API keys if you only need viewing capabilities

## Configuration Options

Create a config.js file with these options:

```javascript
window.N8N_CONFIG = {
  // Your n8n instance URL
  n8nUrl: 'https://your-n8n-instance.com',
  
  // Optional: Pre-configure API key (not recommended for security)
  apiKey: '',
  
  // Optional: Auto-load a specific workflow
  defaultWorkflowId: 'workflow-id-here',
  
  // Optional: Auto-connect on page load
  autoConnect: true,
  
  // Optional: Enable auto-save
  autoSave: true,
  
  // Optional: Customize branding
  branding: {
    title: 'My Company Workflows',
    primaryColor: '#your-brand-color',
    showPoweredBy: false
  }
};
```

## Features

✅ Dynamic workflow loading from n8n API
✅ Real-time editing capabilities  
✅ Auto-save functionality
✅ Change detection and warnings
✅ Responsive design for all screen sizes
✅ Perfect for Notion embedding
✅ Support for both public and private n8n instances
✅ Customizable branding and configuration
✅ Automatic API endpoint detection
✅ Fallback support for older n8n versions

## Troubleshooting

### Connection Issues:
- Verify your n8n URL is correct and accessible
- Check if your n8n instance requires authentication
- Ensure CORS is properly configured on your n8n instance
- Try both HTTP and HTTPS URLs

### Embedding Issues:
- Check that your hosting platform allows iframe embedding
- Verify the _headers file is properly configured
- Some platforms may require specific CSP headers

### API Issues:
- Verify your API key has the necessary permissions
- Check the browser console for detailed error messages
- Ensure your n8n version supports the API endpoints being used

## Browser Support

- Chrome/Chromium 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Support

For issues and questions:
- Check the browser console for error messages
- Verify your n8n instance is accessible
- Ensure proper API key permissions
- Review hosting platform documentation for embedding requirements

## Security Considerations

- Always use HTTPS for production deployments
- Store API keys securely and never commit them to repositories  
- Use read-only API keys when possible
- Configure proper CORS policies on your n8n instance
- Consider IP restrictions for additional security

-----

Legacy Headers for Notion Embedding
===================================

If using older hosting platforms, create a _headers file:

/*
  Content-Security-Policy: frame-ancestors https://www.notion.so https://notion.so *
  X-Frame-Options: ALLOW-FROM https://www.notion.so

Note: Most modern hosting platforms handle this automatically.
