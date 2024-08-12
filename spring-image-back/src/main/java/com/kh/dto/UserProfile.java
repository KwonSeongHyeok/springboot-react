package com.kh.dto;

import java.time.LocalDateTime;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor // 기본생성자
@AllArgsConstructor // 필수 생성자
@ToString	// DB에서 값이 제대로 넘어왔는지 체크용
public class UserProfile {
	private int userId;
	private String username;
	private String profileImageUrl;
	private LocalDateTime createdAt;
	// Local맛집 = 현재 현지 맛집
	// Localhost = 현재 내주소
	// LocalDateTime = 현재 날짜와 시간
	

}
