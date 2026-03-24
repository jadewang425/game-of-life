# Conway's Game of Life

An interactive implementation of Conway's Game of Life built with React.js and Vite. This cellular automaton simulation demonstrates how complex patterns can emerge from simple rules, creating a mesmerizing display of life, death, and evolution on a grid.

## Demo

![GoL Demo](https://github.com/jadewang425/game-of-life/assets/140425997/9d888ff5-6a5c-44f7-b622-eebf87de3a94)

## About Conway's Game of Life

Conway's Game of Life is a zero-player game devised by mathematician John Horton Conway in 1970. It's a cellular automaton where cells on a grid evolve through generations based on a set of simple rules. Despite its simplicity, the Game of Life is Turing complete and can simulate any computational process.

### The Rules

The simulation follows four fundamental rules:

1. **Underpopulation**: Any live cell with fewer than 2 live neighbors dies
2. **Survival**: Any live cell with 2 or 3 live neighbors lives on to the next generation
3. **Overpopulation**: Any live cell with more than 3 live neighbors dies
4. **Reproduction**: Any dead cell with exactly 3 live neighbors becomes a live cell

## Features

- **Interactive Grid**: Click individual cells to toggle them alive or dead
- **Random Generation**: Generate random starting patterns with one click
- **Playback Controls**: Play, pause, and restart the simulation
- **Generation Counter**: Track how many generations have passed
- **Responsive Design**: Clean, modern interface with custom styling
- **Real-time Animation**: Watch patterns evolve at 150ms intervals

## Technologies Used

- **React 19.2.4**: Modern React with hooks for state management
- **Vite 8.0.2**: Fast build tool and development server
- **JavaScript (ES6+)**: Core programming language
- **CSS3**: Custom styling and animations
- **Google Fonts (Inconsolata)**: Monospace typography for a retro computing aesthetic

### Font Integration

##### HTML

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz@6..96&family=Cinzel:wght@500&family=Cormorant&family=Inconsolata:wght@200..900&display=swap"
  rel="stylesheet"
/>
```

##### CSS

```css
font-family: "Inconsolata", monospace;
```

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup

1. Clone the repository:

```bash
git clone https://github.com/jadewang425/game-of-life.git
cd game-of-life
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

### Controls

- **Random**: Generates a random pattern of live cells across the grid
- **Play**: Starts the simulation and begins evolving generations
- **Stop**: Pauses the simulation at the current generation
- **Restart**: Clears the grid and resets the generation counter to 0
- **Click Cells**: Manually toggle individual cells on or off

### Tips

- Start with the **Random** button to see interesting patterns emerge
- Try creating known patterns like gliders, blinkers, or still lifes by clicking cells
- Watch the **Generation** counter to see how long patterns survive
- Experiment with different starting configurations to discover unique behaviors

## Project Structure

```
game-of-life/
├── public/              # Static assets
├── src/
│   ├── components/
│   │   ├── buttons.jsx  # Button components
│   │   └── grid.jsx     # Grid rendering component
│   ├── App.jsx          # Main application logic
│   ├── App.css          # Application styles
│   ├── index.jsx        # React entry point
│   ├── index.css        # Global styles
│   └── helper.js        # Custom hooks (useInterval)
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md            # Project documentation
```

## Key Components

### App.jsx

The main component containing:

- Grid state management (30x30 cells)
- Game logic implementation
- Generation tracking
- Control functions (play, stop, restart, random)

### Grid Component

Renders the cellular automaton grid and handles cell interactions.

### Custom Hooks

- `useInterval`: Custom hook for managing the simulation timer

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

To preview the production build:

```bash
npm run preview
```

## Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## License

This project is open source and available for educational purposes.

## Acknowledgments

- John Horton Conway for creating the Game of Life
- The React team for the excellent framework
- The open-source community for inspiration and resources
