package penjualan;

public class pelanggan{
    protected String idPelanggan, namaPelanggan, telp, email;
    protected char jk;


    public String setId(String id){
        this.idPelanggan = id;
    }

    public void setNama(String nama){
        this.namaPelanggan= nama;

    }
    
    public Void setJk(char jk){
        this.jk = jk;

    }
    public Strin getId(){
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


