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
    return this.namaBarang;
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

public int getHarga(){
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
    public void setStok(int x){
        this.jumlahBarang =x;
    }
    public void setHarga(int x){
        this.hargaBarang =x;
    }
    public void barangDibeli(int jumlahDibeli ){
        this.jumlahBarang = jumlahDibeli;
    }
}