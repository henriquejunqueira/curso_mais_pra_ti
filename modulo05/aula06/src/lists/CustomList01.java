package lists;

import java.util.Arrays;

public class CustomList01 {
    private int[] elements;
    private int size;

    public CustomList01(){
        this.elements = new int[10];
        this.size = 0;
    }

    public void add(int element){
        if(this.size == this.elements.length){
            this.resize();
        }

        this.elements[this.size++] = element;
    }

    public int get(int index){
        if(index >= this.size || index < 0){
            throw new IndexOutOfBoundsException("Index fora dos limites/inválido");
        }

        return this.elements[index];
    }

    public void remove(int index){
        if(index >= this.size || index < 0){
            throw new IndexOutOfBoundsException("Index fora dos limites/inválido");
        }

        for(int i = index; i < this.size - 1; i++){
            this.elements[i] = this.elements [i + 1];
        }

        this.size--;
    }

    private void resize(){
        int[] newElements = new int[elements.length * 2];

        for(int i = 0; i < this.elements.length; i++){
            newElements[i] = elements[i];
        }

        this.elements = newElements;
    }

    @Override
    public String toString(){
        return Arrays.toString(Arrays.copyOfRange(this.elements, 0, this.size));
    }
}
