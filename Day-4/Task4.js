const http = require('http');

// Create HTTP server
const server = http.createServer((req, res) => {
    // Set response headers
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    });
    
    // API response
    const response = {
        message: "Hello, World!",
        status: "success",
        timestamp: new Date().toISOString()
    };
    
    // Send JSON response
    res.end(JSON.stringify(response));
});

// Set port
const PORT = 3000;

// Start server
server.listen(PORT, () => {
    console.log(`🚀 API Server running on http://localhost:${PORT}`);
    console.log(`📡 API Endpoint: GET http://localhost:${PORT}`);
    console.log(`✅ Returns: {"message": "Hello, World!"}`);
});