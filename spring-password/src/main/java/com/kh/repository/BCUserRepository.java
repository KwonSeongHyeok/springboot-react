package com.kh.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kh.dto.BCUser;

/* JpaRepository
 * myabtis mapper 생략해서 작성하는 방법
 * sql알아서 작성
 * */
public interface BCUserRepository extends JpaRepository<BCUser, Integer>{
	// sava select 특정적으로 무언가를 검색하거나 하지 않는 한 기본적인 sql 작성 x
	// BCUser saveUser();
	
	// 이메일 찾기 기능
	BCUser findByEmail(String email);
	// -> sql select * from BCUser where email = ? ;
}
