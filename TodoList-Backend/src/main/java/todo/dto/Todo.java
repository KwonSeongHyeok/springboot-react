package todo.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

// VO = dataBase 까지는 가지 않고 읽기 전용 -> email 인증번호

// DTO = dataBase의 값을 연동해서 사용

// Entity = JPA DataBase Oracle에 테이블을 만들지 않아도 알아서 테이블 만들어주고
// 컬럼지정해주고 컬럼 값 설정

@ToString
@Setter
@Getter
public class Todo {

	private int todoNo; // 할 일 번호
	private String title; // 할 일 제목이자 내용
	private String isDone; // 할 일을 완료했는지 완료 여부
	private int todoMemberNo; // 어떤 고객의 할 일인지 고객 번호 연동
}
