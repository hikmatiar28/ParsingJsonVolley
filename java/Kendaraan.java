public class Kendaraan {
    //atribut / state
    Private String merk;
    private int jumlahRoda = 4;

    //method/ behaviour
    public void maju(){
        System.out.println("maju")
    }
    public void nyalakanMesing(){
        System.out.println("Mesin dinyalakan");
    }

    public static void main(String[] args) {
        Kendaraan motor_A = new Kendaraan();
        motor_A.merk = "BMW 1000R";
        motor_A.jumlahRoda = 2;

        motor_A.nyalakanMesin();
        motor_A.maju();

        Kendaraan motor_B = new Kendaraan(){
            motor_B.merk = "toyoto 07";
            motor_B.jumlahRoda = 4;

            motor_B.nyalakanMesin()
            motor_B.m
        }


    }
}
