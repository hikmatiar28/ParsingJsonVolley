package com.perpus;
import com.perpus.Buku;

public class Perpustakaan{
    public static void main(String[] args){
     System.out.println("selamat datang di perpustakaan");
        Buku lotr = new Buku ();
        lotr.judul = "Lord Of The Ring";
        System.out.println(lotr.getJudul());
}
}