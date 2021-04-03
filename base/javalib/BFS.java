import java.util.LinkedList;

public class BFS {

    private boolean[][] marked; // Is a shortest path to this vertex known?
    private Square[][] connectedTo;
    private String path;
    private final Square start;

    public BFS(Board B, Square start){
        this.start = start;
        this.marked = new boolean[B.size][B.size];
        this.connectedTo = new Square[B.size][B.size];
        this.path = "";
        bfs(B);
    }

    public boolean hasPathTo(Square goal){
        return marked[goal.xCord][goal.yCord];
    }

    public Iterable<Square> createPath(Square goal){
        if (!hasPathTo(goal)) return null;
        LinkedList<Square> goalPath = new LinkedList<>();
        Square nextSquare = goal;
        while (!(nextSquare == start)) {
            int x = nextSquare.xCord;
            int y = nextSquare.yCord;
            goalPath.addFirst(nextSquare);
            path = nextSquare.toString() + " -> " + path;
            nextSquare = connectedTo[x][y];
        }
        goalPath.addFirst(start);
        path = start + " -> " + path;
        return goalPath;
    }

    public String getPath(){
        return path;
    }
    
    private void bfs(Board b) {
        LinkedList<Square> squaresToSearch = new LinkedList<>();
        marked[0][0] = true;
        squaresToSearch.add(start);

        while (!squaresToSearch.isEmpty()){
            Square currentSquare = squaresToSearch.removeFirst();

            for (Square adjSq : currentSquare.adjSquares) {
                if (adjSq == null) continue;

                int x = adjSq.xCord;
                int y = adjSq.yCord;
                if (!marked[x][y]) {    // only look at unmarked squares!
                    connectedTo[x][y] = currentSquare;
                    marked[x][y] = true;
                    squaresToSearch.add(adjSq);
                }
            }
        }
    }





}