const api_config = {
  BASE_URL: "https://api.novaprop.org/api/",
  TIMEOUT: 60000,
  HEADERS: {
    "Content-Type": "application/json",
  },
  MAX_RETRIES: 3,
  RETRY_DELAY: 1000,
  UPLOAD: {
    MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
    ALLOWED_FILE_TYPES: [
      "application/pdf",
      "image/jpeg",
      "image/png",
      "image/gif",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ],
  },
};

export default api_config;
