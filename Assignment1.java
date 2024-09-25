import java.util.*;
public class Assignment1 {
    public static void main(String[] args) {
        int counter = 0;
        boolean isInt = true;
        Scanner sc = new Scanner(System.in);
        System.out.println("Hello! Enter integers to add to the counter. If you want to stop, type 'break'.");
        while (isInt) {
            if (sc.hasNextInt()) {
                counter += sc.nextInt();
                System.out.println("Counter: " + counter);
            } else {
                System.out.println("Oops! That was not an int!\nCounter: " + counter);
                break;
            }
        }
        sc.close();
    }
}