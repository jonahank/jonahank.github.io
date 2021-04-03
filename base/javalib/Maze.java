public class Maze {

    public static void main(String[] args) {
        

        Square sq1 = new Square(0, 1);
        String path = "";

        Board board1 = new Board(12);
        Square goal = board1.board[11][11];
        Square start = board1.board[0][0];

        BFS bfs = new BFS(board1, start);

        if (bfs.hasPathTo(goal)) {
            bfs.createPath(goal);
            path = bfs.getPath();
        }

        System.out.println(path);
    }
    
}
