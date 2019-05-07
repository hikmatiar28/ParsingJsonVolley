import java.io.*;
//import java.io.IOException;
//import java.io.InputStream;

public class ContohBufferReader{
    public static void main (String[] args) throws Exception{
        String nama,PlatNomor,JM,JK,LP,;
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        program();
        print("apakah akan menghitung lagi ? [Y/N] : ");
        String M = input.readLine();
        boolean s =true;
        while(s == true )
            program();
            if(M != "Y" || M != "y")
                s = false
    }
}



        System.out.print("Masukan Plat Nomor : ");
        PlatNomor =bf.readLine();
        System.out.print("Jenis Kendaraan : \n" + "1 = Mobil\n" + "2 = Motor");
        System.out.print("Pilih [1/2] : ");

        System.out.print("Jam Masuk : ");
        JamMasuk =bf.readLine();
        System.out.print("Jam Keluar : ");
        JamKeluar =bf.readLine();
        switch(jenis_kendaraan){
            case '1' :
            Jenis Kendaraan = "Mobil";
            jam_pertama = 5000;
            jam_berikut = 3000;
            lama_parkir = jam_keluar - jam_masuk;
            if(lama_parkir > 1){
                total = ((lama_parkir - 1) * jam_berikut) + jam_pertama;
            }
            else{
                total = jam_pertama;
            }
            break;
        
            case '2' :
            jenis_kendaraan = "Motor";
            jam_pertama = 3000;
            jam_berikut = 1500;
            lama_parkir = jam_keluar - jam_masuk;
            if(lama_parkir > 1){
                total = ((lama_parkir - 1) * jam_berikut) + jam_pertama;
            }
            else{
                total = jam_pertama;
            }
        
            break;
    
            default :

    }
}