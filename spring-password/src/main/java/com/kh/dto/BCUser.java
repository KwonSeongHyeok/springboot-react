package com.kh.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity // mysql 매핑
public class BCUser {
	
	@Id // primarykey
	@GeneratedValue(strategy = GenerationType.IDENTITY) // 자동으로 id값 올라가는 시퀀스 NextVal
	private int id;
	private String username;
	private String email;
	private String password;
}
