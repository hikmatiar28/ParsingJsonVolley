public class Main{

    public static void main(String[] args){
        Matematika tambah = new Matematika();
        System.out.println(tambah.tambah(10,5));
        Matematika tambah1 = new Matematika();
        System.out.println(tambah1.tambah(10.5,20.5));
        System.out.println(tambah1.tambah(10,5));
    }
}

class Matematika{
    //Overload
    public int tambah(int a,int b){
        return a + b;
    }
    public double tambah(double a,double b){
        return a + b;
    } 
}