package com.kh.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.kh.dto.User;

// mybatis에 id 값으로 작성한 sql기능 목록
// 기능에 대한 목록만 보기 때문에 interface
@Mapper
public interface UserMapper {
	// user 정보 보기
	List<User> findAll();
	
	// user 입력하기 
	void insertUser(User user);
	
	// user 삭제하기
	void deleteUser(int id);
	
	// user 정보 수정하기
	void updateUser(User user);
}
