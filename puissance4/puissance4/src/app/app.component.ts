import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  public title = 'puissance4';
  public gamePuissance4: string[][] = [];
  public nbLines : number = 6;
  public nbColumns : number = 7;
  public emptyCoin : string = '0';
  public redCoin : string = 'R';
  public yellowCoin : string = 'Y';


  ngOnInit(): void {
    this.gamePuissance4 = this.startNewGame(this.nbLines, this.nbColumns, this.emptyCoin);
    console.log("start game", this.gamePuissance4);

    /** Manually playing the game */
    this.playGame(this.gamePuissance4, this.redCoin, this.yellowCoin);
    this.gamePuissance4[5][1] = 'R';
    this.gamePuissance4[5][2] = 'Y';
    this.playGame(this.gamePuissance4, this.redCoin, this.yellowCoin);
    this.gamePuissance4[5][3] = 'R';
    this.gamePuissance4[4][1] = 'Y';
    this.playGame(this.gamePuissance4, this.redCoin, this.yellowCoin);
    this.gamePuissance4[5][2] = 'R';
    this.gamePuissance4[5][5] = 'Y';
    this.playGame(this.gamePuissance4, this.redCoin, this.yellowCoin);
    this.gamePuissance4[5][4] = 'R';
    this.gamePuissance4[4][4] = 'Y';
    this.playGame(this.gamePuissance4, this.redCoin, this.yellowCoin);
    this.gamePuissance4[5][6] = 'R';
    this.gamePuissance4[3][4] = 'Y';
    this.playGame(this.gamePuissance4, this.redCoin, this.yellowCoin);
     
    /**
     * his.gamePuissance4[x][y] = 'R';
      this.gamePuissance4[x][y] = 'Y';
      Play the game untill there is a winner or a null
     */
    
  }

  /**
   * This function retuns a board with the given coin 
   * @param nbLines (number)
   * @param nbColumns (number)
   * @param coin (any)
   * @returns matrix
   */
  startNewGame(nbLines: number, nbColumns : number, coin : string) : string[][] {
    const matrix = [];
    for (let i = 0; i < nbLines; i++) {
      const lines = [];
      for (let j = 0; j < nbColumns; j++) {
        lines.push(coin);
      }
      matrix.push(lines);  
    }
    return matrix;
  }

  /**
   * This function let the game be played and each time a coin (Red or Yellow) is played it's inserted into the board
   * @param matrix (string[][])
   * @param redCoin (string)
   * @param yellowCoin (string)
   */
  playGame(matrix : string[][], redCoin : string, yellowCoin : string) : void {
    for (let i=0; i < matrix.length; i++) {
      let lines = '';
      for (let j=0; j <matrix.length; j++) {
        lines += '| ';
        if(matrix[i][j] === '0'){
          lines +='x';
        }else if(matrix[i][j] === redCoin) {
          lines += 'R';
        }else if(matrix[i][j] === yellowCoin) {
          lines += 'Y';
        }
        lines += ' |';
      }
      //console.log("show", lines);
    }
  }

  /**
   * Ultimately this function need to check each time horizentally, vertically and diagonally if the board has a red or yellow coin 
   * and maybe store a temporary winner until we achieve 4 slots and then declare its winner
   * @param coin 
   */
  decideWinner(coin : string) :void {
    if(coin === 'Y') {
      console.log("Player Yellow won!");
    } else if(coin === 'R') {
      console.log("Player Red won!")
    }
  }
}
