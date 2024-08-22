import Stack.StackExample;

public class MainAula07 {
    public static void main(String[] args) {
        //StackExample stackExample = new StackExample();

        //stackExample.push(10);
        //stackExample.push(100);
        //stackExample.push(90);

        //try{
            //recursiveCall();
        //    while(true){
        //        stackExample.push(1);
        //    }
        //}catch (StackOverflowError error){
        //    System.err.println("StackOverflow detectado!" + error);
        //}

        //System.out.println("Elemento no topo: " + stackExample.peek());
        //System.out.println("Elemento removido: " + stackExample.pop());

        Desafio desafio = new Desafio();

        desafio.push("A");
        desafio.push("B");
        desafio.push("C");

        int i = 0;
        while(!desafio.isEmpty()){
            String elemento = desafio.peek();
            System.out.println("Elemento: " + elemento);
            i++;
        }

    }
}