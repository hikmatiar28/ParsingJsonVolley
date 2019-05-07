package penjualan;

public class Customer{
    protected String idPelanggan, namaPelanggan, telp, email;
    protected char jk;


    public void setId(String id){
        this.idPelanggan = id;
    }

    public void setNama(String nama){
        this.namaPelanggan= nama;
    }
    
    public void setJk(char jk){
        this.jk = jk;
    }
    public String getId(){
        return this.idPelanggan;
    }
    
    public String getNama(){
        return this.namaPelanggan;
    }

    public String getJk(){
        if(this.jk == 'L'){
            return "Laki - laki";
        }
      return "perempuan";
    }
}


