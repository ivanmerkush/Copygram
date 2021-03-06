package com.netcracker.ivanmerkush.fapi.models;

import javax.validation.constraints.Max;
import java.sql.Date;

public class Post {
    private int idPost;
    @Max(value=225, message = "Too much text(<225)")
    private String text;
    private Date date;
    private int idAuthor;
    public Post() {

    }

    public int getIdPost() {
        return idPost;
    }

    public void setIdPost(int idPost) {
        this.idPost = idPost;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getIdAuthor() {
        return idAuthor;
    }

    public void setIdAuthor(int idAuthor) {
        this.idAuthor = idAuthor;
    }
}
