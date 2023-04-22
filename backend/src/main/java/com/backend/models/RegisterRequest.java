package com.backend.models;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
@Getter
@Setter
public class RegisterRequest {
    @NotBlank
    @Size(min = 3, max = 20)
    private String chef;

    @NotBlank
    @Size(min = 8, max = 20)
    private String tel;
    @NotBlank
    @Size(max = 50)
    @Email
    private String email;

    @NotBlank
    @Size(min = 3, max = 20)
    private String robot;


    @NotBlank
    @Size(min = 3, max = 20)
    private String concours;

}
