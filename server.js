import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// App Info
const appInfo = {
  name: "Auto Deploy Test API's",
  version: "1.0.0",
  status: "Running Successfully 🚀",
};

// Home Route
app.get("/", (req, res) => {
  res.send(`
    <h1>🚀 Welcome to Auto Deploy Test API</h1>
    <p>Server is live and working perfectly.</p>
    <p>Version: ${appInfo.version}</p>
  `);
});

// API Info Route
app.get("/api", (req, res) => {
  res.json(appInfo);
});

// Sample Data Route
app.get("/api/data", (req, res) => {
  const data = {
    message: "This is dynamic data from the server",
    timestamp: new Date(),
    success: true,
  };

  res.json(data);
});

// Users Route
app.get("/api/users", (req, res) => {
  const users = [
    { id: 1, name: "Alice", role: "Developer" },
    { id: 2, name: "Bob", role: "Designer" },
    { id: 3, name: "Charlie", role: "Manager" },
    { id: 4, name: "Nandu", role: "Admin" },
  ];

  res.json({
    totalUsers: users.length,
    users,
  });
});

// Health Check Route
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date(),
  });
});

// 404 Route
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});