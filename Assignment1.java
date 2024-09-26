import java.util.*;  // includes Scanner class

public class Assignment1 {
    public static void main(String[] args) {  // main method
        int counter = 0; 
        int input;
        boolean isInt = true;
        Scanner sc = new Scanner(System.in);  // created a scanner to read the input of the question below
        System.out.println("Hello! Enter integers to add to the counter. If you want to stop, type 'break'.");
        
        while (isInt) {  // uses boolean as a placeholder to allow this while loop to run
            if (sc.hasNextInt()) {  // if the input is an integer:
                input = sc.nextInt();  // the int 'input' takes that number
                if (input == 123456789) {  // checks if the input is the secret number
                    System.out.println("Congrats! You found a secret..");
                    System.out.println("=^.^=");
                    break;
                }
                counter += input;  // adds the inputted number to the counter
                System.out.println("Counter: " + counter);  // prints the updated counter
            } 
            else {  // if the input isn't an int
                System.out.println("Thanks for playing!\nCounter: " + counter);
                break;  // ends the loop
            }
        }
        sc.close();  // closes the Scanner
    }
}