import pygame
import random

# Constants
WIDTH, HEIGHT = 600, 600
ROWS, COLS = 20, 20
CELL_SIZE = WIDTH // COLS

# Colors
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)

# Directions for maze generation
DIRECTIONS = [(0, -1), (1, 0), (0, 1), (-1, 0)]

# Initialize pygame
pygame.init()
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Maze Generator")
screen.fill(WHITE)

# Maze grid
maze = [[1 for _ in range(COLS)] for _ in range(ROWS)]

def draw_maze():
    for row in range(ROWS):
        for col in range(COLS):
            color = WHITE if maze[row][col] == 0 else BLACK
            pygame.draw.rect(screen, color, (col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE))
    pygame.display.update()

def is_valid(x, y):
    return 0 <= x < COLS and 0 <= y < ROWS and maze[y][x] == 1

def generate_maze(x, y):
    maze[y][x] = 0
    random.shuffle(DIRECTIONS)
    
    for dx, dy in DIRECTIONS:
        nx, ny = x + dx * 2, y + dy * 2
        if is_valid(nx, ny):
            maze[y + dy][x + dx] = 0
            generate_maze(nx, ny)

def main():
    generate_maze(0, 0)
    running = True
    while running:
        draw_maze()
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
    pygame.quit()

if __name__ == "__main__":
    main()
