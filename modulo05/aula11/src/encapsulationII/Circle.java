package encapsulationII;

public final class Circle extends Shape{

    public double radius;

    public Circle (double radius){
        this.radius = radius;
    }

    @Override
    public double area(){
        return Math.PI * Math.pow(radius, 2);
    }
}
