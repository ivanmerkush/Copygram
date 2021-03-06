package com.netcracker.ivanmerkush.fapi.models;

import javax.validation.constraints.Email;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

public class User {
    private int idUser;
    @NotNull(message = "Nickname cannot be null")
    @Max(value=25, message = "Nickname cannot be so long(<25)")
    private String nickname;
    @NotNull(message = "Name cannot be null")
    private String name;

    @Max(value=15, message = "Password is too long(<15)")
    @Min(value = 10, message = "Password is too small(>10)")
    private String password;

    @Email(message = "Email should be valid")
    private String email;

    @Max(value = 225, message="Too much text(no more than 225)")
    private String info;
    private Role role;
    private Status status;
    private String profilePhoto;
    public User() {

    }


    public User(int _id, String _nickname, String _name, String _password, String _email, String _bio, Role role, Status status,String _userPhoto) {
        this.idUser = _id;
        this.nickname = _nickname;
        this.name = _name;
        this.password = _password;
        this.email = _email;
        this.info = _bio;
        this.role = role;
        this.status = status;
        this.profilePhoto = _userPhoto;
    }

    public int getIdUser() {
        return idUser;
    }

    public void setIdUser(int idUser) {
        this.idUser = idUser;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public String getProfilePhoto() {
        return profilePhoto;
    }

    public void setProfilePhoto(String profilePhoto) {
        this.profilePhoto = profilePhoto;
    }

    @Override
    public String toString() {
        return "User{" +
                "idUser=" + idUser +
                ", nickname='" + nickname + '\'' +
                ", name='" + name + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", info='" + info + '\'' +
                ", role=" + role +
                ", status=" + status +
                ", profilePhoto='" + profilePhoto + '\'' +
                '}';
    }
}



