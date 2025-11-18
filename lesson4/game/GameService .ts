
export class GameService {
    private static  MIN = 1;
    private static  MAX = 30;

   private static randomNumber(min = GameService.MIN, max = GameService.MAX): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    private static secretNumber: number = GameService.randomNumber();

    public static readonly ManagerName = "manager";
    public static readonly ManagerPassword = "123456789";

    public static setMin(min: number): void {
        GameService.MIN = min;
    }
    public static setMax(max: number): void {  
        GameService.MAX = max;
    }

    public static setSecretNumber(num: number): void {
        GameService.secretNumber = num;
    }

    public static checkGuess(guess: number): boolean{
        return guess === GameService.secretNumber;
    }
    public static newGame(): void {
        GameService.secretNumber = GameService.randomNumber();
    }
}