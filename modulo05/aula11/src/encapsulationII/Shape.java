package encapsulationII;

public abstract sealed class Shape permits Circle, Rectangle{

    public abstract double area();

}
