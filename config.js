/**
 * n8n Dynamic Workflow Editor - Configuration
 * Copy from config.example.js and customize for your setup
 */

window.N8N_CONFIG = {
  // Your n8n instance URL - REPLACE THIS
  n8nUrl: 'https://n8n-test.teljoy.io',
  
  // Leave empty for security - will prompt for API key
  apiKey: '',
  
  // Optional: Auto-load a specific workflow ID
  defaultWorkflowId: '',
  
  // Auto-connect when page loads
  autoConnect: false,
  
  // Enable auto-save (recommended)
  autoSave: true,
  
  // Customize branding
  branding: {
    title: 'My n8n Workflows',
    showPoweredBy: true,
    primaryColor: '#ff6d5a'  // n8n orange
  }
};
