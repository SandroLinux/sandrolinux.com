@type {import('next').NextConfig}

const nextConfig = {
  "redirects": [
    { 
      "source": "odysee",
      "destination": "https://odysee.com/@sandrolinux:4", 
      "permanent": true
    }
  ]
}

module.exports = nextConfig
