package penjualan;

import penjualan.Barang;

public class Penjualan{
    String noTransaksi, tgl;
    String kodeBarang,idPegawai, idPelanggan;
    int jumlahBeli;
    int harga;

    public int totalbayar(){
        return this.harga * this.jumlahBeli;
    }
    public static void main(String[] args){
        HashMap<String, Barang> items = new HashMap<String, Barang>();
        Barang kasur = new barang("kardus","0900","alat tidur",1222);
        Barang masak = new Barang("wajan","1232","Almas",1221,2343);

        items.put("tempat tidur", kasur);
        items.put("alat masak",Masak);

        HashMap <String,Pegawai> empl1 = new HashMap<String , Pegawai>();
        Pegawai idPegawai = new Pegawai("001","Riza","Laki - laki", "911");

        member1.put("idPelanggan",idPegawai);

        HashMap<String, Pegawai> empl1 = new HashMap<String, Pegawai>();
        Pegawai idPegawai = new pegawai ("al azis", "002");

        empl1.put("pegawai", idPegawai);

/*Barang brg1 = new Barang();
        brg1.setKode("B001");
        brg1.setNama("Asus Pro");
        brg1.setJenis("Laptop");
        brg1.setStok(10);
        brg1.setHarga(5000000);
        
        Customer member1 = new Customer();
        member1.setId("M001");
        member1.setNama("Riza");
        member1.setJk('L');
*/
        Pegawai empl1 = new Pegawai();
        empl1.setId("P001");
        empl1.setNama("Suryana");

/* Penjualan trx1 = new Penjualan();
        trx1.noTransaksi = brg1.getKode() + member1.getId() + empl1.getId();
        trx1.tgl = "20/02/2019";
        trx1.kodeBarang = brg1.getKode();
        trx1.idPegawai = empl1.getId();
        trx1.idPelanggan = member1.getId();
        trx1.jumlahBeli = 2;
        trx1.harga = brg1.getHarga();

        System.out.println("Nota Penjualan");
        System.out.print("No.Transaksai : ");
        System.out.println(trx1.noTransaksi);
        System.out.print("Member : ");
        System.out.println(member1.getId()+"-"+member1.getNama());
        System.out.print("Kode Barang : ");
        System.out.println(brg1.kodeBarang);
        System.out.print("Nama Barang : ");
        System.out.println(brg1.getNama());
        System.out.print("Jumlah beli : ");
        System.out.println(trx1.jumlahBeli);
        System.out.print("Harga : ");
        System.out.println(brg1.getHarga());
        System.out.print("Total Bayar : Rp.");
        System.out.println(trx1.totalbayar());
        System.out.println("\nTerima Kasih\n");
        System.out.println(empl1.getNama());
*/
        System.out.println(
    }
}