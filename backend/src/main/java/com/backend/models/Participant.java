package com.backend.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(	name = "participant")
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Participant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 20)
    private String chef;

    @NotBlank
    @Size(min = 10, max = 50)
    @Email
    private String email;

    @NotBlank
    @Size(min = 8, max = 20)
    private String tel;

    @NotBlank
    @Size(min = 3, max = 20)
    private String robot;


    @NotBlank
    @Size(min = 3, max = 20)
    private String concours;

    public Participant(String chef, String email, String tel, String concours, String robot) {
        this.chef = chef;
        this.email = email;
        this.tel = tel;
        this.concours = concours;
        this.robot = robot;
    }
}
