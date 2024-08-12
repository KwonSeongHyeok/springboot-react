package com.kh.service;

import java.util.List;

import com.kh.dto.NaverUser;

// 서비스 목록 리스트 여기는 목록만 작성해주고 Impl에서 상세하게 작성
public interface NaverUserService {
	List<NaverUser> findAll();
	
	// 네이버 SNS 연동해서 회원가입하는 insert
	void insertNaverUser(NaverUser user);
}
