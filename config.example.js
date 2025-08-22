/**
 * n8n Dynamic Workflow Editor - Configuration Example
 * 
 * Copy this file to `config.js` and update with your n8n instance details.
 * This allows pre-configuring the editor with your n8n connection.
 */

window.N8N_CONFIG = {
  // Your n8n instance URL (required)
  // Example: 'https://your-n8n-instance.com' or 'http://localhost:5678'
  n8nUrl: 'https://your-n8n-instance.com',
  
  // Optional: Pre-set API key (not recommended for security)
  // Leave empty to be prompted for API key when needed
  apiKey: '',
  
  // Optional: Default workflow ID to load
  defaultWorkflowId: '',
  
  // Optional: Auto-connect on page load
  autoConnect: true,
  
  // Optional: Enable auto-save (saves changes after 2 seconds of inactivity)
  autoSave: true,
  
  // Optional: Branding customization
  branding: {
    title: 'n8n Dynamic Workflow Editor',
    showPoweredBy: true,
    primaryColor: '#ff6d5a'
  }
};
