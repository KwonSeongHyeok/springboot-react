package com.kh.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity // mysql에 테이블이 존재하지 않으면 테이블 생성
@Getter
@Setter // 룸북이나 자카르타가 나오지 않음 -> bulid.gradle에 spring이나 lombok 관련된 설정이 있는지 확인
public class Chicken {
	
	@Id // primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY) // 자동으로 id값 올라가는 시퀀스 NextVal
	private int id;
	
	private String chickenName;
	private String description;
	private double price; // 소수점 고려
}
