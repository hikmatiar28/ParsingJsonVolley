public class Siswa{
    String nama;
    int umur;
    String jenisKelamin;

    public Siswa (String nama,int umur,String jk){//construktor
        this.nama=nama;
        this.umur=umur;
        this.jenisKelamin= jk;

    }
    public void berjalan (){
        System.out.printn("saya sedang berjalan");
    }
    public String getnama(){
        return this.nama;
    }
    public static int getUmur(){
        return 17;
    }
    public void perkenalan(){
        System.ou.println("hallo,nama saya "+this.nama);
    }
    public static void main(String [] args ){
        Siswa hikma = new Siswa ("Hikmatiar ramadhan",17,"Laki-laki");
        //hikma.perkenalan ();
        //Sysytem.out.print(hikma.getnama());
        System.out.println(getUmur());

    }
}