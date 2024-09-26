import java.util.*;  // includes Scanner class

public class Assignment1 {
    public static void main(String[] args) {  // main method
        int counter = 0; 
        int input;
        boolean isInt = true;
        Scanner sc = new Scanner(System.in);  // created a scanner to read the input of the question below
        System.out.println("Hello! Enter integers to add to the counter. If you want to stop, type 'break', and the program will tell you if the number is even or odd.");
        
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
                if (counter%2 == 0) System.out.println("This number is an even number.");  // checks if the int is divisble by 2, then prints it's an even number
                else System.out.println("This number is an odd number.");  // if the int isn't divisble by 2, it prints it's an odd number
                break;  // ends the loop
            }
        }
        sc.close();  // closes the Scanner
    }
}