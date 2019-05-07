package penjualan;

public class Penjualan{
    String noTransaksi, tgl;
    String kodeBarang,idPegawai, idPelanggan;
    int jumlahBeli;
    int harga;

    public int totalbayar(){
        return this.harga * this.jumlahBeli;
    }
    public static void main(Strin[] args){
        Barang brg1 = new Barang();
        brg1.setKode("B001");
        brg1.setNama("Asus Pro");
        brg1.setjenis("Laptop");
        brs1.setStok("10");
        brg1.setHarga("5000000");
    }

    Pelanggan member1 = new Pelangga();
    member1.setId("M001");
    member1.setNama("Riza");
    member1.setJk('L');

    Pegawai empl1 = new Pegawai();
    empl1.setId("P001");
    empl1.setNama("Suryana");

    Penjualan trx1 = new Penjualan();
    trx1.noTransaksi = brg1.getKode() + member1.getId() + empl1.getId();
    trx1.tgl = "20/02/2019";
    trx1.kodeBarang = brg1.getKode();
    trx1.idPegawai = empl1.getId();
    trx1.Pelanggan = member.getId();
    trx.jumlahBeli = 2;
    trx.harga = brg1.getHarga();

    System.out.pritnln("Nota Penjualan");
    System.out.print("No.Transaksai : ");
    System.out.pritnln(trx1.noTransaksi :);
    System.out.print("Member : ");
    System.out.pritnln(member1.getId()+"-"member1.getNama);
    System.out.print("Kode Barang : ");
    System.out.pritnln(brg1.kodeBarang);
    System.out.print("Nama Barang : ");
    System.out.pritnln(brg1.getNama());
    System.out.print("Jumlah beli : ");
    System.out.pritnln(trx1.jumlahbeli);
    System.out.print("harga : ");
    System.out.pritnln(brg1.getHarga());
    System.out.print("Total Bayar : Rp.");
    System.out.pritnln(trx1.totalbayar());
    System.out.pritnln("\nTerima Kasih\n");
    System.out.pritnln(empl1.getNama());
}