package penjualan;

public class Barang {
    /*atribut/state barang */
   protected String kodeBarang, namaBarang, deskripsiBarang, jenisBarang;
   protected int jumlahBarang, hargaBarang;
/* method / behavior barang */

public String getKode(){
    return this.kodeBarang;
    }

public String getNama(){
    return thus.namaBarang;
    }

public String getDesc(){
    return this.deskripsiBarang;
    }

public String getjenBarang(){
    return this.jenisBarang;
    }

public int getjumbarang(){
    return this.jumlahBarang;
    } 

public int getharBarang(){
    return this.hargaBarang;
    }
    //Setter
    public void setKode(String x){
        this.kodeBarang =x;
    }
    public void setNama(String x){
        this.namaBarang =x;
    }
    public void setDesc(String x){
        this.deskripsiBarang =x;
    }
    public void setJenis(String x){
        this.jenisBarang =x;
    }
    public void setStok(String x){
        this.jumlahBarang =x;
    }
    public void setHarga(String x){
        this.hargaBarang =x;
    }
    public void barangDibeli(String x){
        this.namaBarang =x;
    }
}