const axios = require("axios");

// Search iTunes API
const searchItunes = async (req, res) => {
  const { term, mediaType } = req.query;

  // If the term is not provided, return 400 Bad Request
  if (!term) {
    return res.status(400).json({ message: "Search term is required" });
  }

  try {
    // Make a request to the iTunes API
    const response = await axios.get("https://itunes.apple.com/search", {
      params: {
        term,
        media: mediaType !== "all" ? mediaType : undefined,
        limit: 25,
      },
    });

    // Return the results
    res.json(response.data);
  } catch (error) {
    // If there is an error, return 500 Internal Server Error
    res.status(500).json({ message: error.message });
  }
};

module.exports = searchItunes;
