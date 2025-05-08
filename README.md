# POP! - AR Virtual Popup Shop Platform

An augmented reality platform that allows Shopify store owners to create virtual popup shops with animated 3D storefronts and avatars.

## Features

- AR-powered virtual storefronts
- Custom 3D avatars and characters
- Shopify store integration
- Real-time product synchronization
- Social and location-based features
- Interactive product browsing in AR

## Tech Stack

- Frontend: React + TypeScript
- AR Engine: 8th Wall WebAR
- 3D Rendering: Three.js
- Backend: Node.js + Express
- Database: MongoDB
- Authentication: Firebase Auth
- 3D Models: Blender + Mixamo
- API Integration: Shopify Storefront API

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── components/     # React components
├── scenes/        # AR scenes and 3D models
├── services/      # API and service integrations
├── store/         # State management
├── styles/        # Global styles
└── utils/         # Helper functions
```

## Environment Variables

- `SHOPIFY_STOREFRONT_TOKEN`: Your Shopify Storefront API token
- `EIGHTH_WALL_APP_KEY`: Your 8th Wall WebAR API key
- `FIREBASE_CONFIG`: Firebase configuration
- `MONGODB_URI`: MongoDB connection string

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

MIT License - see LICENSE file for details 