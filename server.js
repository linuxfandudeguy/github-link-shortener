// server.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Redirect function
app.get('/:username/:repo', (req, res) => {
    const { username, repo } = req.params;

    // Validate username and repo
    if (!username || !repo) {
        return res.status(400).json({ error: 'Username and repository are required.' });
    }

    // Construct the GitHub repository URL
    const githubUrl = `https://github.com/${username}/${repo}`;

    // Redirect to the GitHub repository
    res.redirect(githubUrl);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
