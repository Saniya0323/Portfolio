const { execSync } = require('child_process');

// Determine which command to run based on arguments
const script = process.argv[2] || 'start';

try {
  // Run the appropriate command with the legacy OpenSSL provider
  execSync(`set NODE_OPTIONS=--openssl-legacy-provider && react-scripts ${script}`, { 
    stdio: 'inherit',
    env: { ...process.env, CI: script === 'build' ? 'false' : process.env.CI }
  });
} catch (error) {
  console.error('Failed to run script:', error);
  process.exit(1);
}