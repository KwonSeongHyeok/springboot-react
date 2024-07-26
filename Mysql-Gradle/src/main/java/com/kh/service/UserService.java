package com.kh.service;

import java.util.List;

import com.kh.dto.User;

// 서비스 목록 리스트 여기는 목록만 작성해주고 Impl에서 상세하게 작성
public interface UserService {
	List<User> findAll();
	
	void insertUser(User user);
	
	void deleteUser(int id);
	
	void updateUser(User user);
}
