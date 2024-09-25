import java.util.*;
public class Assignment1 {
    public static void main(String[] args) {
        int counter = 0;
        int input;
        boolean isInt = true;
        Scanner sc = new Scanner(System.in);
        System.out.println("Hello! Enter integers to add to the counter. If you want to stop, type 'break'.");
        
        while (isInt) {
            if (sc.hasNextInt()) {
                input = sc.nextInt();
                if (input == 123456789) {
                    System.out.println("Congrats! You found a secret..");
                    break;
                }
                counter += input;
                System.out.println("Counter: " + counter);
            } 
            else {
                System.out.println("Thanks for playing!\nCounter: " + counter);
                break;
            }
        }
        sc.close();
    }
}