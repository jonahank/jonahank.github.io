public class Square {

    int xCord;
    int yCord;
    Square[] adjSquares;
    boolean isStart;
    boolean isGoal;
    boolean isExplored;

    public Square(int x, int y){
        this.xCord = x;
        this.yCord = y;
        this.isExplored = false;
        adjSquares = new Square[4]; // 0 is up, 1 is right, 2 is down, 3 is left
    }

    @Override
    public String toString(){
        return "(" + xCord + ", " + yCord + ")";
    }

    public void setStart(){
        this.isStart = true;
    }

    public void setGoal(){
        this.isGoal = true;
    }
    
    public void setLeftBorder() {
        this.adjSquares[3] = null;
    }

    public void setRightBorder() {
        this.adjSquares[1] = null;
    }

    public void setTopBorder() {
        this.adjSquares[0] = null;
    }

    public void setBotBorder() {
        this.adjSquares[2] = null;
    }

    public void setRightAdj(Square right){
        this.adjSquares[1] = right;
    }
    
    public void setBotAdj(Square bot){
        this.adjSquares[2] = bot;
    }

    public void setLeftAdj(Square left){
        this.adjSquares[3] = left;
    }
    
    public void setTopAdj(Square top){
        this.adjSquares[0] = top;
    }

    public void setExplored(){
        this.isExplored = true;
    }


}