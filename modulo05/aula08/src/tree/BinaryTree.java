package tree;

// Classe que representa um nó da árvore binária
class Node {
    int value;
    Node left;
    Node right;

    // Construtor do nó
    Node(int value) {
        this.value = value;
        this.left = null; // Inicialmente, o nó não tem filhos
        this.right = null; // Inicialmente, o nó não tem filhos
    }
}

public class BinaryTree {

    // Classe que representa a árvore binária
    Node root;

    // Construtor da árvore, inicialmente a árvore está vazia (root é null)
    public BinaryTree() {
        this.root = null;
    }

    // Metodo para adicionar um nó na árvore
    public void add(int value) {
        this.root = addRecursive(this.root, value);
    }

    // Metodo recursivo para adicionar um nó em uma posição correta na árvore
    private Node addRecursive(Node current, int value) {
        // Verifica se o nó atual do root é nulo
        if (current == null) {
            return new Node(value); // Se a posição está vazia, crie um novo nó
        }

        // Se o valor for menor que o valor atual do root, adicione no lado esquerdo
        if (value < current.value) {
            current.left = addRecursive(current.left, value);
            // Se o valor for maior que o valor atual do root, adicione no lado direito
        } else if (value > current.value) {
            current.right = addRecursive(current.right, value);
        }

        // Se o valor for igual, não faça nada (nós duplicados não são permitidos)
        return current;
    }

    // Metodo para remover um nó com um valor específico
    public void remove(int value) {
        this.root = removeRecursive(this.root, value);
    }

    private Node removeRecursive(Node current, int value) {
        if (current == null) {
            return null;
        }

        if (value < current.value) {
            current.left = removeRecursive(current.left, value);
        } else if (value > current.value) {
            current.right = removeRecursive(current.right, value);
        } else {
            if (current.left == null && current.right == null) {
                return null;
            }

            if (current.left == null) {
                return current.right;
            }

            if (current.right == null) {
                return current.left;
            }

            int smallestValue = findSmallestValue(current.right);

            current.value = smallestValue;

            current.right = removeRecursive(current.right, smallestValue);
        }

        return current;
    }

    private int findSmallestValue(Node root) {
        return root.left == null ? root.value : findSmallestValue(root.left);
    }

    // Metodo para percorrer a árvore em ordem e exibir os valores à esquerda e à direita
    public void inOrderTraversal(Node current) {
        // Verifica se o nó atual não é nulo, para evitar erros ao tentar acessar filhos de um nó inexistente
        if (current != null) {

            // Primeiro, percorre recursivamente a subárvore esquerda do nó atual
            inOrderTraversal(current.left); // Chama o metodo recursivamente para o filho à esquerda

            // Após percorrer toda a subárvore esquerda, processa o nó atual
            System.out.println("Nó atual: " + current.value);

            // Verifica se o nó atual tem um filho à esquerda e imprime o valor desse filho
            if (current.left != null) {
                System.out.println("  Esquerda de " + current.value + ": " + current.left.value);
            } else {
                // Se não houver filho à esquerda, imprime "null" para indicar que não há subárvore à esquerda
                System.out.println("  Esquerda de " + current.value + ": null");
            }

            // Verifica se o nó atual tem um filho à direita e imprime o valor desse filho
            if (current.right != null) {
                System.out.println("  Direita de " + current.value + ": " + current.right.value);
            } else {
                // Se não houver filho à direita, imprime "null" para indicar que não há subárvore à direita
                System.out.println("  Direita de " + current.value + ": null");
            }

            // Finalmente, percorre recursivamente a subárvore direita do nó atual
            inOrderTraversal(current.right); // Chama o metodo recursivamente para o filho à direita
        }
    }

    public static void main(String[] args) {

        BinaryTree binaryTree = new BinaryTree();
        binaryTree.add(10);
        binaryTree.add(11);
        binaryTree.add(9);
        binaryTree.add(8);
        binaryTree.add(20);
        binaryTree.add(15);
        binaryTree.add(22);

        binaryTree.remove(22);
        binaryTree.inOrderTraversal(binaryTree.root);
    }
}
