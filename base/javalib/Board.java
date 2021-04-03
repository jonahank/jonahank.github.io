public class Board {

    int size;
    Square[][] board;
    boolean isSolvable;
    String pathToGoal;

    public Board(int size){
        this.size = size;
        this.board = new Square[size][size];
        generateMaze();
        setAdj();
        setObjectives();
        findGoal();
    }


    private void generateMaze() {
        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size; j++) {
                Square sq1 = new Square(i,j);
                board[i][j] = sq1;
            }
        }
    }

    private void setAdj(){
        double hasRightAdj;
        double hasBotAdj;
        for (int i = 0; i < size; i++) {     // -1 because last row doesn't matter
            for (int j = 0; j < size; j++) { // -1 because last row doesn't matter
                Square current = board[i][j];
                hasRightAdj = Math.random();
                hasBotAdj = Math.random();
               
                if (hasRightAdj > 0.2 && j < size-1) {
                    Square right = board[i][j+1];
                    current.setRightAdj(right);
                    right.setLeftAdj(current);
                }

                if (hasBotAdj > 0.3 && i < size-1) {
                    Square bot = board[i+1][j];
                    current.setBotAdj(bot);
                    bot.setTopAdj(current);
                }   
            }
        }

    }
    
    private void setObjectives() {
        Square start = board[0][0];
        Square goal = board[size-1][size-1];
        start.setStart();
        goal.setGoal();
    }
    
    private void findGoal() {

    }

}
