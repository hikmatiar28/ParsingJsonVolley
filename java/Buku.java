package com.perpus;

public class Buku{
String isbn;
String judul;
String penerbit;
int jmlHal;
    
    public String getJudul(){
        return this.judul;
    }
    public void pinjamBuku(){
        System.out.println("BUku ini berhasil di pinjam");
    }
    public void kembalikanbuku(){
        System.out.println("Buku ini berhasil dikembalikan");
    }
}