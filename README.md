# easyrooms

## Project Overview

Web application for intelligent hotel room reservations, optimizing room allocation based on proximity and availability.

## Key Features

- Dynamic room booking (up to 5 rooms)
- Intelligent room allocation algorithm
- Travel time minimization
- Room availability visualization
- Random occupancy generation
- Booking reset functionality

## Technical Stack

- React
- TypeScript
- Tailwind CSS

## Room Allocation Strategy

### Booking Priorities

1. Same-floor room booking
2. Minimize total travel time
3. Cross-floor allocation when needed

### Travel Time Calculation

- Horizontal: 1 minute per room
- Vertical: 2 minutes per floor

## Room Distribution

- Floors 1-9: 10 rooms per floor (101-110, 201-210)
- Floor 10: 7 rooms (1001-1007)

## Setup Instructions

```bash
# Clone repository
git clone [repository-url]

# Install dependencies
npm install

# Run development server
npm start

# Build for production
npm run build
```

## Booking Algorithm Highlights

- Find available rooms
- Calculate optimal room selection
- Respect booking constraints

## Deployment Options

- Vercel
- Netlify

## License

MIT License
